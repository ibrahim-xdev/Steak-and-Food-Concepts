import { gallery } from '../content'
import useReveal from '../hooks/useReveal'

const TALL_INDEXES = new Set([1, 4])

export default function Gallery() {
  const headRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="gallery" className="relative border-t border-cream-100/10 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div ref={headRef} className="reveal">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-flame-500">Around the grill</p>
          <h2 className="mt-5 max-w-xl font-display text-4xl uppercase text-cream-100 sm:text-5xl">
            Fresh, loud, and a little messy.
          </h2>
        </div>

        <div ref={gridRef} className="reveal-stagger mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5">
          {gallery.map((img, i) => (
            <figure
              key={img.image}
              className={`group relative overflow-hidden rounded-2xl border border-cream-100/10 bg-char-800 ${
                TALL_INDEXES.has(i) ? 'row-span-2 aspect-[3/4]' : 'aspect-square'
              }`}
            >
              <img
                src={img.image}
                alt={img.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-char-950/85 via-char-950/0 to-char-950/0 opacity-0 transition-opacity duration-400 group-hover:opacity-100" />
              <figcaption className="absolute bottom-0 left-0 right-0 translate-y-3 p-4 font-mark text-sm text-mustard-300 opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
                {img.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
