import { Fragment, type ReactNode } from "react";

const safeUrl = (value: string, image = false): string | undefined => {
  const url = value.trim();
  if (!url || /[\u0000-\u001f\u007f]/.test(url)) return undefined;
  if (!/^[a-z][a-z0-9+.-]*:/i.test(url)) return url;
  if (/^https?:/i.test(url) || (!image && /^mailto:/i.test(url))) return url;
  if (image && /^data:image\/(?:png|jpe?g|gif|webp|avif);base64,/i.test(url)) return url;
  return undefined;
};

export function InlineMarkup({ text }: { text: string }) {
  const parts = text.split(/(!\[[^\]]*\]\([^)]+\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\)|\$(?!\s)[^$\n]+\$)/g);
  return <>{parts.map((part, index): ReactNode => {
    const image = part.match(/^!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/);
    if (image) {
      const source = safeUrl(image[2], true);
      return source ? <img key={index} src={source} alt={image[1]} loading="lazy" /> : <Fragment key={index}>{image[1]}</Fragment>;
    }
    if (part.startsWith("**") && part.endsWith("**")) return <strong key={index}>{part.slice(2, -2)}</strong>;
    if (part.startsWith("*") && part.endsWith("*")) return <em key={index}>{part.slice(1, -1)}</em>;
    if (part.startsWith("`") && part.endsWith("`")) return <code key={index}>{part.slice(1, -1)}</code>;
    if (part.startsWith("$") && part.endsWith("$")) return <span key={index} className="formula">{part.slice(1, -1)}</span>;
    const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)(?:\s+"[^"]*")?\)$/);
    if (link) {
      const href = safeUrl(link[2]);
      return href ? <a key={index} href={href} rel="noreferrer">{link[1]}</a> : <Fragment key={index}>{link[1]}</Fragment>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

const isTableLine = (line: string) => line.trim().startsWith("|") && line.trim().endsWith("|");
const tableCells = (line: string) => line.trim().slice(1, -1).split("|").map((cell) => cell.trim());

export function MarkdownDocument({ source }: { source: string }) {
  const lines = source.split(/\r?\n/);
  const blocks: ReactNode[] = [];
  let index = 0;
  // Scrollable regions need unique accessible names; several identically
  // labelled regions on one page is itself an accessibility failure.
  let regionCount = 0;
  // Source documents pick their own heading depths (some start at "#", some at
  // "##", and several jump straight from "#" to "###"). Compressing the depths
  // that actually occur onto consecutive levels below the page <h1> keeps the
  // outline valid whatever the source did.
  const depthsUsed = [...new Set(
    lines.map((line) => line.trim().match(/^(#{1,6})\s+\S/)?.[1].length).filter((depth): depth is number => Boolean(depth)),
  )].sort((a, b) => a - b);
  const headingLevel = (depth: number) => Math.min(depthsUsed.indexOf(depth) + 2, 6);
  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }
    if (line.startsWith("```")) {
      const language = line.slice(3).trim();
      const code: string[] = [];
      index += 1;
      while (index < lines.length && !lines[index].trim().startsWith("```")) { code.push(lines[index]); index += 1; }
      if (index < lines.length) index += 1;
      regionCount += 1;
      blocks.push(<pre key={`code-${index}`} tabIndex={0} role="region" aria-label={`${language ? `${language} code example` : "Code example"} ${regionCount}`}><code className={language ? `language-${language}` : undefined}>{code.join("\n")}</code></pre>);
      continue;
    }
    if (/^(?:---+|\*\*\*+)$/.test(line)) {
      blocks.push(<hr key={`rule-${index}`} />);
      index += 1;
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      const Tag = `h${headingLevel(heading[1].length)}` as "h2" | "h3" | "h4" | "h5" | "h6";
      blocks.push(<Tag key={index}><InlineMarkup text={heading[2]} /></Tag>);
      index += 1;
      continue;
    }
    if (line.startsWith(">")) {
      blocks.push(<blockquote key={index}><InlineMarkup text={line.replace(/^>\s?/, "")} /></blockquote>);
      index += 1;
      continue;
    }
    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push(<ul key={`list-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}><InlineMarkup text={item} /></li>)}</ul>);
      continue;
    }
    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push(<ol key={`ordered-list-${index}`}>{items.map((item, itemIndex) => <li key={itemIndex}><InlineMarkup text={item} /></li>)}</ol>);
      continue;
    }
    if (isTableLine(line) && index + 1 < lines.length && /^\|?[\s:|-]+\|?$/.test(lines[index + 1].trim())) {
      const header = tableCells(line);
      index += 2;
      const rows: string[][] = [];
      while (index < lines.length && isTableLine(lines[index])) { rows.push(tableCells(lines[index])); index += 1; }
      blocks.push(
        <div className="table-scroll" key={`table-${index}`} tabIndex={0} role="region" aria-label={`Table ${(regionCount += 1)}`}>
          <table><thead><tr>{header.map((cell, cellIndex) => <th key={cellIndex} scope="col"><InlineMarkup text={cell} /></th>)}</tr></thead>
            <tbody>{rows.map((row, rowIndex) => <tr key={rowIndex}>{row.map((cell, cellIndex) => <td key={cellIndex}><InlineMarkup text={cell} /></td>)}</tr>)}</tbody>
          </table>
        </div>,
      );
      continue;
    }
    const paragraph: string[] = [line];
    index += 1;
    while (index < lines.length && lines[index].trim() && !/^(?:```|#{1,4}\s+|[-*]\s+|\d+\.\s+|>)/.test(lines[index].trim()) && !isTableLine(lines[index])) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}><InlineMarkup text={paragraph.join(" ")} /></p>);
  }
  return <article className="markdown-document">{blocks}</article>;
}
