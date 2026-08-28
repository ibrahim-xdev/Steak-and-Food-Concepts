// Minimal flat-style food icons, drawn as plain SVG paths so the
// hero background has zero image dependencies. Each accepts a
// `className` for sizing/color via Tailwind (fill-current friendly).

export function BurgerIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M8 26c0-9 10.7-16 24-16s24 7 24 16H8z" fill="currentColor" opacity="0.9" />
      <rect x="6" y="28" width="52" height="6" rx="3" fill="currentColor" opacity="0.7" />
      <rect x="8" y="37" width="48" height="7" rx="3.5" fill="currentColor" opacity="0.6" />
      <path
        d="M6 40c0 3 2 5 4 5h44c2 0 4-2 4-5"
        stroke="currentColor"
        strokeWidth="0"
        fill="currentColor"
        opacity="0.4"
      />
      <rect x="7" y="47" width="50" height="9" rx="4.5" fill="currentColor" />
    </svg>
  )
}

export function FriesIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M14 26h36l-4 30a4 4 0 0 1-4 3.4H22a4 4 0 0 1-4-3.4z" fill="currentColor" opacity="0.85" />
      {[20, 27, 34, 41, 48].map((x, i) => (
        <rect key={i} x={x - 2.5} y={8 + (i % 2) * 4} width="5" height="24" rx="1.5" fill="currentColor" />
      ))}
    </svg>
  )
}

export function DrinkIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M18 14h28l-4 42a4 4 0 0 1-4 3.6H26a4 4 0 0 1-4-3.6z" fill="currentColor" opacity="0.85" />
      <rect x="15" y="9" width="34" height="7" rx="3.5" fill="currentColor" />
      <rect x="30" y="2" width="4" height="12" rx="2" fill="currentColor" />
    </svg>
  )
}

export function PizzaIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path d="M32 6 58 56H6z" fill="currentColor" opacity="0.85" />
      <circle cx="26" cy="34" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="36" cy="26" r="3" fill="currentColor" opacity="0.4" />
      <circle cx="30" cy="44" r="3" fill="currentColor" opacity="0.4" />
      <path d="M4 56h56" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
    </svg>
  )
}

export function ChickenIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M40 8c9 2 14 10 12 19-1.5 7-7 11-13 15l-9 16-8-4 8-15c-4-6-4-13 0-19 4-6 12-14 10-12z"
        fill="currentColor"
        opacity="0.85"
      />
      <circle cx="42" cy="20" r="4" fill="currentColor" />
    </svg>
  )
}

export function FlameIcon(props) {
  return (
    <svg viewBox="0 0 64 64" fill="none" {...props}>
      <path
        d="M32 4c4 10-6 12-6 22 0 5 3 8 6 8s6-3 6-7c4 3 8 9 8 16 0 11-9 21-14 21S6 54 6 43c0-9 5-15 9-19-1 4 1 7 3 7 3 0 4-4 3-8-1-6 0-13 11-19z"
        fill="currentColor"
      />
    </svg>
  )
}
