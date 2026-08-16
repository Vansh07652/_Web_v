/**
 * MedAtlas prototype — routing + gallery.
 *
 * `/prototype` — gallery comparing the three art directions.
 * `/prototype/:variant/:screen` — one of four demo screens in one direction.
 *
 * Follows the repo's segment-router pattern. Everything is front-end demo
 * only and isolated from production pages.
 */

import { Link } from "../components/ui";
import type { Navigate } from "../lib/navigation";
import {
  isProtoScreen,
  isProtoVariant,
  PROTO_SCREENS,
  PROTO_VARIANTS,
  protoHref,
  PrototypeShell,
  type ProtoScreen,
  type ProtoVariant,
} from "./components";
import { DashboardScreen } from "./DashboardScreen";
import { LessonScreen } from "./LessonScreen";
import { PracticeScreen } from "./PracticeScreen";
import { FlashcardsScreen } from "./FlashcardsScreen";
import { ArrowRightIcon, MedAtlasMark } from "./icons";

function Gallery({ navigate }: { navigate: Navigate }) {
  return (
    <div className="ma-root" data-ma-theme="classic">
      <div className="ma-gallery">
        <header className="ma-gallery-head">
          <p className="ma-gallery-eyebrow">Front-end visual prototype · demo content only</p>
          <div className="ma-gallery-brand">
            <MedAtlasMark />
            <h1>MedAtlas</h1>
          </div>
          <p className="ma-gallery-lede">
            A study workspace concept for pre-med, nursing, PA, medical, A&amp;P and bio/chem
            students — four screens, each built in three art directions so they can be
            compared side by side. Nothing here is clinical guidance; every screen runs on
            local demo data with no backend.
          </p>
        </header>

        <div className="ma-gallery-grid">
          {PROTO_VARIANTS.map((variant) => (
            <section key={variant.id} className="ma-gallery-variant" aria-labelledby={`ma-gv-${variant.id}`}>
              <div className={`ma-gallery-swatch is-${variant.id}`} aria-hidden="true">
                <span /><span /><span /><span />
              </div>
              <h2 id={`ma-gv-${variant.id}`}>{variant.name}</h2>
              <p className="ma-gallery-tagline">{variant.tagline}</p>
              <ul className="ma-gallery-links">
                {PROTO_SCREENS.map((screen) => (
                  <li key={screen.id}>
                    <Link href={protoHref(variant.id, screen.id)} navigate={navigate} className="ma-gallery-link">
                      <span>{screen.name}</span>
                      <ArrowRightIcon />
                    </Link>
                  </li>
                ))}
              </ul>
              <Link href={protoHref(variant.id, "dashboard")} navigate={navigate} className="ma-btn ma-btn-primary ma-gallery-cta">
                Open {variant.name}
                <ArrowRightIcon />
              </Link>
            </section>
          ))}
        </div>

        <footer className="ma-gallery-foot">
          <p>
            Compare tip: use the toolbar at the top of any screen to switch variant or
            screen in place. <Link href="/" navigate={navigate}>Back to MedMosa</Link>
          </p>
        </footer>
      </div>
    </div>
  );
}

function Screen({ variant, screen, navigate }: { variant: ProtoVariant; screen: ProtoScreen; navigate: Navigate }) {
  if (screen === "dashboard") return <DashboardScreen variant={variant} navigate={navigate} />;
  if (screen === "lesson") return <LessonScreen variant={variant} navigate={navigate} />;
  if (screen === "practice") return <PracticeScreen variant={variant} navigate={navigate} />;
  return <FlashcardsScreen variant={variant} navigate={navigate} />;
}

export default function PrototypeRoutes({ path, navigate }: { path: string; navigate: Navigate }) {
  const segments = path.split("/").filter(Boolean).map(decodeURIComponent);
  const variant = segments[1];
  const screen = segments[2];

  if (variant && screen && isProtoVariant(variant) && isProtoScreen(screen)) {
    return (
      <main id="main-content" className="ma-main" tabIndex={-1}>
        <PrototypeShell variant={variant} screen={screen} navigate={navigate}>
          <Screen variant={variant} screen={screen} navigate={navigate} />
        </PrototypeShell>
      </main>
    );
  }

  return (
    <main id="main-content" className="ma-main" tabIndex={-1}>
      <Gallery navigate={navigate} />
    </main>
  );
}
