import {
  SteakIcon,
  NoodlesIcon,
  TeaIcon,
  SoupIcon,
  RiceIcon,
  MusselIcon,
} from "./FoodIcons";

// Purely CSS/SVG animated background — customized for HK-style Cafe menu items.
const ICONS = [
  {
    Icon: SteakIcon,
    top: "12%",
    left: "8%",
    size: 64,
    delay: "0s",
    dur: "7s",
    rot: "-8deg",
  },
  {
    Icon: NoodlesIcon,
    top: "68%",
    left: "14%",
    size: 58,
    delay: "1.2s",
    dur: "8s",
    rot: "10deg",
  },
  {
    Icon: TeaIcon,
    top: "22%",
    left: "85%",
    size: 56,
    delay: "0.6s",
    dur: "6.5s",
    rot: "6deg",
  },
  {
    Icon: SoupIcon,
    top: "76%",
    left: "80%",
    size: 60,
    delay: "1.8s",
    dur: "9s",
    rot: "-6deg",
  },
  {
    Icon: RiceIcon,
    top: "48%",
    left: "92%",
    size: 52,
    delay: "0.3s",
    dur: "7.5s",
    rot: "14deg",
  },
  {
    Icon: MusselIcon,
    top: "82%",
    left: "46%",
    size: 48,
    delay: "2.1s",
    dur: "8.5s",
    rot: "12deg",
  },
  {
    Icon: NoodlesIcon,
    top: "8%",
    left: "52%",
    size: 46,
    delay: "1.5s",
    dur: "6s",
    rot: "-12deg",
  },
  {
    Icon: TeaIcon,
    top: "40%",
    left: "4%",
    size: 42,
    delay: "0.9s",
    dur: "7s",
    rot: "-4deg",
  },
];

export default function HeroBackground() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* grill-grate diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #FFF8EC 0px, #FFF8EC 1px, transparent 1px, transparent 26px)",
        }}
      />

      {/* warm grill glow */}
      <div className="absolute -top-32 left-1/2 h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-flame-500/25 blur-[130px]" />
      <div className="absolute bottom-0 right-0 h-[380px] w-[440px] rounded-full bg-mustard-400/15 blur-[110px]" />
      <div className="absolute bottom-0 left-0 h-[320px] w-[380px] rounded-full bg-flame-600/20 blur-[100px]" />

      {/* drifting food icon field */}
      {ICONS.map((f, i) => (
        <div
          key={i}
          className="absolute animate-drift text-flame-400/20"
          style={{
            top: f.top,
            left: f.left,
            width: f.size,
            height: f.size,
            animationDelay: f.delay,
            animationDuration: f.dur,
            "--rot": f.rot,
          }}
        >
          <f.Icon className="h-full w-full" />
        </div>
      ))}

      {/* flicker "flame" bars along the bottom edge */}
      <div className="absolute inset-x-0 bottom-0 flex h-24 items-end justify-center gap-1.5 opacity-40 sm:h-32">
        {Array.from({ length: 28 }).map((_, i) => (
          <span
            key={i}
            className="w-1.5 origin-bottom animate-sizzle rounded-t-full bg-gradient-to-t from-flame-600 via-flame-500 to-mustard-400 sm:w-2"
            style={{
              height: `${20 + ((i * 37) % 60)}%`,
              animationDelay: `${(i % 7) * 0.15}s`,
              animationDuration: `${1.4 + (i % 5) * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* vignette so foreground text always reads clearly */}
      <div className="absolute inset-0 bg-gradient-to-b from-char-950/40 via-char-950/55 to-char-950" />
    </div>
  );
}
