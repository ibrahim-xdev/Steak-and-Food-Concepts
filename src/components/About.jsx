import { about, shop } from '../content'
import useReveal from '../hooks/useReveal'

export default function About() {
  const textRef = useReveal()
  const statsRef = useReveal()
  const cardRef = useReveal()

  return (
    <section id="about" className="relative border-t border-cream-100/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div ref={textRef} className="reveal">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-flame-500">{about.eyebrow}</p>
          <h2 className="mt-5 max-w-lg font-display text-4xl uppercase leading-[0.95] text-cream-100 sm:text-5xl">
            {about.heading}
          </h2>
          <div className="mt-8 max-w-xl space-y-5 font-body text-[0.98rem] leading-relaxed text-cream-200/85">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div ref={statsRef} className="reveal-stagger mt-12 grid grid-cols-3 gap-6 border-t border-cream-100/10 pt-8">
            {about.stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-2xl text-mustard-400 sm:text-3xl">{s.value}</div>
                <div className="mt-2 font-body text-xs leading-snug text-cream-200/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div ref={cardRef} className="reveal lg:pt-4">
          <div className="relative overflow-hidden rounded-2xl border border-cream-100/10 bg-char-800/70 p-8">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-flame-500/15 blur-3xl" />
            <div className="relative flex items-baseline gap-2">
              <span className="font-display text-6xl text-mustard-400">{shop.rating.toFixed(1)}</span>
              <span className="font-body text-sm text-cream-200/60">/ 5</span>
            </div>
            <div className="relative mt-2 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} filled={i < Math.round(shop.rating)} />
              ))}
            </div>
            <p className="relative mt-3 font-body text-sm text-cream-200/60">
              Based on {shop.reviewCount} reviews
            </p>

            <dl className="relative mt-8 space-y-4 border-t border-cream-100/10 pt-6 font-body text-sm">
              <div className="flex items-center justify-between gap-4">
                <dt className="text-cream-200/60">Price range</dt>
                <dd className="text-right font-semibold text-cream-100">{shop.priceRange}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-cream-200/60">Service</dt>
                <dd className="text-right text-cream-100">{shop.services.join(' · ')}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt className="text-cream-200/60">Hours</dt>
                <dd className="text-right text-cream-100">2 PM – 3 AM, every day</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

function Star({ filled }) {
  return (
    <svg viewBox="0 0 20 20" className={`h-4 w-4 ${filled ? 'fill-mustard-400' : 'fill-cream-100/15'}`}>
      <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.9l-5.18 2.54.99-5.77-4.19-4.08 5.79-.84z" />
    </svg>
  )
}
