import { reviews, shop } from '../content'
import useReveal from '../hooks/useReveal'

export default function Reviews() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="reviews" className="relative border-t border-cream-100/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div ref={headRef} className="reveal flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-flame-500">Word of mouth</p>
            <h2 className="mt-5 font-display text-4xl uppercase text-cream-100 sm:text-5xl">What people say</h2>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display text-4xl text-mustard-400">{shop.rating.toFixed(1)}</span>
            <span className="font-body text-sm text-cream-200/60">/ 5 · {shop.reviewCount} reviews</span>
          </div>
        </div>

        <div ref={gridRef} className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="relative overflow-hidden rounded-2xl border border-cream-100/10 bg-char-800/60 p-7"
            >
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg
                    key={s}
                    viewBox="0 0 20 20"
                    className={`h-4 w-4 ${s < r.rating ? 'fill-mustard-400' : 'fill-cream-100/15'}`}
                  >
                    <path d="M10 1.5l2.59 5.25 5.79.84-4.19 4.08.99 5.77L10 14.9l-5.18 2.54.99-5.77-4.19-4.08 5.79-.84z" />
                  </svg>
                ))}
              </div>

              {r.text && (
                <p className="mt-4 font-body text-[0.95rem] leading-relaxed text-cream-200/90">&ldquo;{r.text}&rdquo;</p>
              )}

              {r.breakdown && (
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm text-cream-200/80">
                  {Object.entries(r.breakdown).map(([k, v]) => (
                    <span key={k}>
                      {k}: <span className="font-semibold text-mustard-400">{v}/5</span>
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex items-center justify-between border-t border-cream-100/10 pt-4">
                <span className="font-display text-lg uppercase text-cream-100">{r.name}</span>
                <span className="font-body text-xs text-cream-200/50">{r.meta}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
