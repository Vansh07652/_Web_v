/**
 * MedAtlas prototype — inline SVG icon set.
 *
 * Follows the repo convention (components/ui.tsx): plain function components,
 * stroke = currentColor, aria-hidden, sized by the surrounding CSS via the
 * `ma-ic` class. No icon library is installed and none is added.
 */

interface IconProps {
  className?: string;
}

function base(className?: string) {
  return {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    "aria-hidden": true as const,
    focusable: "false" as const,
    className: className ? `ma-ic ${className}` : "ma-ic",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
}

export function SearchIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="11" cy="11" r="6.5" />
      <path d="m16 16 4.5 4.5" />
    </svg>
  );
}

export function BellIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M6 10a6 6 0 0 1 12 0c0 4 1.6 5.4 2 6H4c.4-.6 2-2 2-6Z" />
      <path d="M10 19a2.2 2.2 0 0 0 4 0" />
    </svg>
  );
}

export function SpeakerIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4 9.5h3l4.5-3.8v12.6L7 14.5H4z" fill="currentColor" stroke="none" />
      <path d="M15 9a4.2 4.2 0 0 1 0 6" />
      <path d="M17.5 6.8a7.4 7.4 0 0 1 0 10.4" />
    </svg>
  );
}

export function PlayIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M8 5.5v13l10-6.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function PauseIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="7" y="5.5" width="3.4" height="13" rx="1" fill="currentColor" stroke="none" />
      <rect x="13.6" y="5.5" width="3.4" height="13" rx="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StopIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="6.5" y="6.5" width="11" height="11" rx="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M13 2.5 5 13.5h5l-1 8 8-11h-5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function StethoscopeIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M5 3.5v5a4.5 4.5 0 0 0 9 0v-5" />
      <path d="M9.5 13v2.5a5 5 0 0 0 10 0v-1.6" />
      <circle cx="19.5" cy="11" r="2.4" />
    </svg>
  );
}

export function AlertTriangleIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 4 2.8 19.5h18.4Z" />
      <path d="M12 10v4.2" />
      <path d="M12 16.8v.2" strokeWidth="2.6" />
    </svg>
  );
}

export function TargetIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m5 12.5 4.5 4.5L19 7.5" strokeWidth="2.2" />
    </svg>
  );
}

export function CheckCircleIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
      <path d="m8 12.5 2.8 2.8L16.5 9.5" strokeWidth="2" />
    </svg>
  );
}

export function CircleIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" strokeWidth="2.2" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m6 9.5 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M14.5 6 8.5 12l6 6" />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 12h15" />
      <path d="m13.5 6 6 6-6 6" />
    </svg>
  );
}

export function BookmarkIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M7 3.5h10a1 1 0 0 1 1 1v16l-6-4-6 4v-16a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function BookmarkFilledIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M7 3.5h10a1 1 0 0 1 1 1v16l-6-4-6 4v-16a1 1 0 0 1 1-1Z" fill="currentColor" />
    </svg>
  );
}

export function CardsIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="3.5" y="7.5" width="13" height="13" rx="2" />
      <path d="M8 4h11a1.5 1.5 0 0 1 1.5 1.5V17" />
    </svg>
  );
}

export function TimerIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="12" cy="13.5" r="7.5" />
      <path d="M12 9.5v4l2.8 1.8" />
      <path d="M9.5 3h5" />
    </svg>
  );
}

export function NotesIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="5" y="3.5" width="14" height="17" rx="2" />
      <path d="M9 8.5h6M9 12.5h6M9 16.5h3.5" />
    </svg>
  );
}

export function FlameIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3.5c.6 3-1.4 4.6-2.7 6.2C7.9 11.4 7 13 7 15a5 5 0 0 0 10 0c0-2.6-1.3-4.3-2.4-5.7-.8-1-1.6-2-1.6-3.3 0-.8.4-1.7 0-2.5Z" />
      <path d="M12 20a2.8 2.8 0 0 1-2.8-2.8c0-1.5 1.2-2.4 2.8-4 1.6 1.6 2.8 2.5 2.8 4A2.8 2.8 0 0 1 12 20Z" fill="currentColor" stroke="none" opacity=".35" />
    </svg>
  );
}

export function CalendarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <rect x="4" y="5.5" width="16" height="15" rx="2" />
      <path d="M4 10h16M8.5 3.5v3.5M15.5 3.5v3.5" />
    </svg>
  );
}

export function BookOpenIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 6.5c-1.6-1.6-4-2-8-2v15c4 0 6.4.4 8 2 1.6-1.6 4-2 8-2v-15c-4 0-6.4.4-8 2Z" />
      <path d="M12 6.5v15" />
    </svg>
  );
}

export function StarIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m12 3.5 2.5 5.4 5.9.6-4.4 4 1.2 5.8L12 16.4l-5.2 2.9 1.2-5.8-4.4-4 5.9-.6Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LightbulbIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M12 3.5a6 6 0 0 1 3.5 10.9c-.8.6-1 1.5-1 2.6h-5c0-1.1-.2-2-1-2.6A6 6 0 0 1 12 3.5Z" />
      <path d="M9.8 20h4.4" />
    </svg>
  );
}

export function RotateIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 12a7.5 7.5 0 0 1 13-5.1L20 9.5" />
      <path d="M20 4.5v5h-5" />
      <path d="M19.5 12a7.5 7.5 0 0 1-13 5.1L4 14.5" />
      <path d="M4 19.5v-5h5" />
    </svg>
  );
}

export function TrendUpIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="m4 16.5 5-5 3.5 3.5 7-7" />
      <path d="M14.5 8h5v5" />
    </svg>
  );
}

export function PulseIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M3.5 12h4l2-5 3.5 9.5L15.5 10l1.3 2h3.7" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <path d="M4.5 7h15M4.5 12h15M4.5 17h15" />
    </svg>
  );
}

export function DotsIcon({ className }: IconProps) {
  return (
    <svg {...base(className)}>
      <circle cx="6" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="18" cy="12" r="1.3" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Abstract MedAtlas brand mark: a compass-cross inside a rounded tile. */
export function MedAtlasMark({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false" className={className ? `ma-mark ${className}` : "ma-mark"}>
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" fill="currentColor" opacity=".14" />
      <rect x="1.5" y="1.5" width="29" height="29" rx="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M16 8v16M8 16h16" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      <circle cx="16" cy="16" r="3.2" fill="currentColor" />
    </svg>
  );
}
