import { shop, nav } from '../content'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function Footer() {
  const year = new Date().getFullYear()
  const waHref = buildWhatsAppLink(shop.whatsappNumber, shop.whatsappDefaultMessage)

  return (
    <footer className="relative border-t border-cream-100/10 py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-xs">
            <a href="#top" className="font-display text-2xl uppercase text-cream-100">
              Auso<span className="text-flame-500">migos</span>
            </a>
            <p className="mt-4 font-body text-sm leading-relaxed text-cream-200/70">
              {shop.tagline} {shop.neighborhood}, {shop.city}.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 font-body text-sm font-semibold text-flame-500 underline decoration-flame-500/40 underline-offset-4 hover:decoration-flame-500"
            >
              Order on WhatsApp →
            </a>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-200/60">Explore</p>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="font-body text-sm text-cream-200/80 hover:text-flame-500">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-body text-xs font-bold uppercase tracking-[0.2em] text-cream-200/60">Contact</p>
              <ul className="mt-4 space-y-2.5 font-body text-sm text-cream-200/80">
                <li>
                  <a href={`tel:${shop.phoneDisplay.replace(/\s+/g, '')}`} className="hover:text-flame-500">
                    {shop.phoneDisplay}
                  </a>
                </li>
                <li className="max-w-[22ch] text-cream-200/60">{shop.address}</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream-100/10 pt-6 font-body text-xs text-cream-200/50 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Ausomigos. All rights reserved.</span>
          <span>{shop.rating.toFixed(1)}★ · {shop.reviewCount} reviews · {shop.priceRange}</span>
        </div>
      </div>
    </footer>
  )
}
