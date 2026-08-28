// Minimal flat-style Hong Kong Cafe food icons, drawn as plain SVG paths.
// Each accepts a `className` for sizing/color via Tailwind (fill-current friendly).

export function SteakIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M18 12c-8 0-12 6-12 14 0 16 14 26 28 26 12 0 22-8 22-20 0-8-6-14-14-14-4 0-7 2-10 2s-6-8-14-8z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="24" cy="28" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="40" cy="32" r="4" fill="currentColor" opacity="0.4" />
    </svg>
  );
}

export function NoodlesIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M10 28c0 14 10 24 22 24s22-10 22-24H10z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M18 28V14M26 28V10M34 28V12M42 28V16"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path d="M8 28h48" stroke="currentColor" strokeWidth="3" />
    </svg>
  );
}

export function TeaIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M14 20h28l-3 32a4 4 0 0 1-4 3.6H21a4 4 0 0 1-4-3.6z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M42 26h6a6 6 0 0 1 0 12h-5"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M22 10c0-3 2-4 2-6M30 10c0-3 2-4 2-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        opacity="0.6"
      />
    </svg>
  );
}

export function SoupIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M8 26c0 15 11 26 24 26s24-11 24-26H8z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M6 26h52"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M24 14c0-3 2-4 2-6M32 14c0-3 2-4 2-6M40 14c0-3 2-4 2-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  );
}

export function RiceIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M12 32c0 12 9 20 20 20s20-8 20-20H12z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M16 32c0-9 7-14 16-14s16 5 16 14H16z"
        fill="currentColor"
        opacity="0.5"
      />
      <path
        d="M40 18l12-10"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MusselIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M12 40C12 22 24 10 38 10c12 0 18 8 18 18 0 14-12 26-26 26-10 0-18-6-18-14z"
        fill="currentColor"
        opacity="0.85"
      />
      <path
        d="M18 38c4-10 12-18 22-20"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        opacity="0.4"
      />
    </svg>
  );
}
