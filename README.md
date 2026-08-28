# Ausomigos — Fast Food Website

A single-page React + Tailwind site for Ausomigos (F-8 Markaz, Islamabad).
Static build, no backend, no database — every piece of text, every menu
item, every price and image lives in one file: `src/content.js`.

## Run it locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:5173`.

## Edit the content

Open `src/content.js`. Everything on the page is driven from there:

- `shop` — name, address, phone, WhatsApp number, hours, rating, price range
- `about` — the about-section copy and stats
- `menu` — categories and items, each with a name, note, price, tag
  (e.g. "Best seller", "Spicy") and an `image` — this is the space
  left for your menu photos, just swap the URL for a real photo
- `gallery` — photo cards (currently stock placeholder images —
  swap these `image` URLs for real photos of your food and shop)
- `reviews` — the two real reviews from your Google listing
- `nav` — the header/footer navigation links

No other file needs to change for a normal content update.

### WhatsApp ordering

The WhatsApp number lives in `shop.whatsappNumber` in `src/content.js`
(digits only, country code first, no `+` or spaces — e.g. `923125126016`).
Both the floating button and the "Order on WhatsApp" links open a chat
to that number with a pre-filled message from `shop.whatsappDefaultMessage`.

## Deploy to GitHub Pages (manual, no CI)

1. Push this project to a new GitHub repository.
2. Run:

   ```bash
   npm install
   npm run deploy
   ```

   This builds the site and pushes the `dist/` folder to a `gh-pages`
   branch, using the `gh-pages` package already listed in `package.json`.
3. In your repo, go to **Settings → Pages**, and under **Source**
   choose the `gh-pages` branch (root folder).
4. Your site goes live at `https://<username>.github.io/<repo-name>/`.

Whenever you change `src/content.js` (new menu items, new photos, a
price update), just run `npm run deploy` again to republish.

## Project structure

```
src/
  content.js         ← all editable text, menu, images, links
  App.jsx             ← page assembly
  index.css           ← Tailwind + animation styles
  components/
    Navbar.jsx
    Hero.jsx             ← full-screen animated fast-food background
    HeroBackground.jsx    ← drifting food icons + flame flicker bars
    FoodIcons.jsx           ← flat SVG burger/fries/drink/pizza icons
    About.jsx
    Menu.jsx                 ← animated menu cards with image slots
    Gallery.jsx
    Reviews.jsx
    Visit.jsx                 ← hours, address, map link
    Footer.jsx
    WhatsAppButton.jsx
  hooks/
    useReveal.js               ← scroll-reveal animation hook
  lib/
    whatsapp.js
```

## Notes

- The hero background is built entirely from CSS and inline SVG
  (drifting food icons, a warm grill glow, animated flame bars) —
  no video or photo files needed, so it loads instantly.
- Menu and gallery images are stock placeholders sized and cropped
  to match the layout — replace them with real photos whenever
  you have them; no layout changes needed, just swap the URLs.
- Menu items and prices are placeholder copy built around the
  dishes mentioned in your own reviews (beef burger, pasta, panini,
  loaded fries) — update with your real menu before publishing.
- Respects `prefers-reduced-motion` — animations are disabled
  automatically for users who have that OS setting on.
