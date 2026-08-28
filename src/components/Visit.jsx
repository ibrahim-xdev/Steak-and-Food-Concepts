import { shop } from '../content'
import useReveal from '../hooks/useReveal'
import WhatsAppButton from './WhatsAppButton'

const DAY_ORDER = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function Visit() {
  const leftRef = useReveal()
  const rightRef = useReveal()
  const today = DAY_ORDER[new Date().getDay()]

  return (
    <section id="visit" className="relative border-t border-cream-100/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 sm:px-10 lg:grid-cols-2">
        <div ref={leftRef} className="reveal">
          <p className="font-body text-xs font-bold uppercase tracking-[0.3em] text-flame-500">Visit</p>
          <h2 className="mt-5 font-display text-4xl uppercase text-cream-100 sm:text-5xl">
            Find us in {shop.neighborhood}
          </h2>

          <div className="mt-8 space-y-6 font-body text-sm">
            <div className="flex items-start gap-3">
              <PinIcon />
              <div>
                <p className="text-cream-100">{shop.address}</p>
                <a
                  href={shop.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-block font-semibold text-flame-500 underline decoration-flame-500/40 underline-offset-4 hover:decoration-flame-500"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PhoneIcon />
              <div>
                <a href={`tel:${shop.phoneDisplay.replace(/\s+/g, '')}`} className="text-cream-100 hover:text-flame-500">
                  {shop.phoneDisplay}
                </a>
                <p className="mt-1 text-cream-200/60">Call, or order straight to WhatsApp below.</p>
              </div>
            </div>
          </div>

          <div className="mt-9">
            <WhatsAppButton variant="inline" />
          </div>
        </div>

        <div ref={rightRef} className="reveal">
          <div className="overflow-hidden rounded-2xl border border-cream-100/10 bg-char-800/60">
            <div className="flex items-center justify-between border-b border-cream-100/10 px-6 py-4">
              <span className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-200/70">Hours</span>
              <span className="font-body text-xs font-semibold text-mustard-400">{shop.priceRange}</span>
            </div>
            <ul>
              {shop.hours.map((h) => (
                <li
                  key={h.day}
                  className={`flex items-center justify-between px-6 py-3.5 text-sm ${
                    h.day === today ? 'bg-flame-500/10' : ''
                  } ${h.day !== shop.hours[shop.hours.length - 1].day ? 'border-b border-cream-100/5' : ''}`}
                >
                  <span className={h.day === today ? 'font-bold text-flame-400' : 'text-cream-200/80'}>
                    {h.day}
                  </span>
                  <span className="font-semibold text-cream-100">{h.time}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-cream-100/10 px-6 py-4">
              <span className="font-body text-xs text-cream-200/60">{shop.services.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="mt-0.5 h-5 w-5 shrink-0 text-flame-500">
      <path d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="mt-0.5 h-5 w-5 shrink-0 text-flame-500">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
