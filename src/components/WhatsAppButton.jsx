import { shop } from '../content'
import { buildWhatsAppLink } from '../lib/whatsapp'

export default function WhatsAppButton({ variant = 'floating' }) {
  const href = buildWhatsAppLink(shop.whatsappNumber, shop.whatsappDefaultMessage)

  if (variant === 'inline') {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 rounded-full bg-flame-500 px-7 py-3.5 font-body text-sm font-bold uppercase tracking-wide text-char-950 shadow-[0_8px_24px_rgba(255,90,31,0.35)] transition-transform duration-300 hover:scale-[1.04] hover:bg-flame-400 active:scale-[0.98]"
      >
        <WhatsAppIcon className="h-4 w-4" />
        Order on WhatsApp
      </a>
    )
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Order on WhatsApp"
      className="fixed bottom-6 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-flame-500 text-char-950 shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-transform duration-300 hover:scale-110 active:scale-95 sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-flame-500 animate-pulse-ring motion-reduce:animate-none" />
      <WhatsAppIcon className="relative h-6 w-6" />
    </a>
  )
}

function WhatsAppIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.87.5 3.62 1.4 5.15L2 22l5.11-1.5a9.94 9.94 0 0 0 4.93 1.31c5.46 0 9.9-4.45 9.9-9.91C21.94 6.45 17.5 2 12.04 2zm0 18.03c-1.64 0-3.18-.44-4.5-1.22l-.32-.19-3.02.89.9-2.94-.21-.32a8.19 8.19 0 0 1-1.26-4.34c0-4.53 3.7-8.22 8.42-8.22 4.71 0 8.42 3.69 8.42 8.22 0 4.53-3.71 8.12-8.43 8.12z" />
    </svg>
  )
}
