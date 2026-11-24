# VOUCH Group of Schools — Website

Next.js 16 (App Router) + Tailwind CSS v4. Builds to a plain static site, so hosting is free on Cloudflare Pages or Netlify.

## Run it locally

```bash
npm install
npm run dev        # http://localhost:3000
```

## Build for hosting

```bash
npm run build      # outputs the finished site to /out
npm start          # preview the /out folder locally
```

## Turn on the contact form (free)

1. Go to https://web3forms.com, enter the school's email (vouchgroupofschools@yahoo.com) and copy the access key they email.
2. Create a file called `.env.local` (copy `.env.example`) and add:
   ```
   NEXT_PUBLIC_WEB3FORMS_KEY=paste-key-here
   NEXT_PUBLIC_SITE_URL=https://your-domain
   ```
3. Rebuild. Messages now arrive in the school's inbox, with the parent's email set as the reply address.

Without a key the form runs in **preview mode** and clearly tells the user no email was sent.

## Deploy to Cloudflare Pages

1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build` · Output directory: `out`
4. Add the environment variables `NEXT_PUBLIC_WEB3FORMS_KEY` and `NEXT_PUBLIC_SITE_URL`.
5. After it deploys, add the custom domain under the project's **Custom domains** tab.

## Where things live

| What | File |
| --- | --- |
| All text, fees, hours, staff, board, news | `lib/data.ts` |
| Colours, fonts, animations (Tailwind theme) | `app/globals.css` (`@theme`) |
| Pages | `app/page.tsx`, `app/about/`, `app/admissions/`, `app/contact/` |
| Header / footer | `components/Header.tsx`, `components/Footer.tsx` |
| Contact form | `components/ContactForm.tsx` |
| Images | `public/images/` (staff photos in `public/images/staff/`) |

**To update content** (fees, a new teacher, a news story) edit `lib/data.ts` only.
New teacher photo: add `public/images/staff/20.jpeg`, then add `{ photo: 20, name: "...", cls: "K1" }` to the right school in `teachers`.

## Design rules

- Photos of children are never cropped: the hero photo keeps its own shape, and program photos sit whole inside `PhotoMat` with a blurred fill.
- Brand colours: `vouch-blue`, `vouch-navy`, `sun`, `coral`, `leaf`, plus pastels `sky`, `peach`, `mint`, `lemon`.
- Animations use `motion-safe:` and switch off for visitors who choose reduced motion.

## Still to confirm with the school

- Tuition period (per term / month / year?) — `lib/data.ts` → `tuition`
- Principal's name — `app/about/page.tsx` (currently "The Principal")
- Uniform price wording ("per gear")
- Spelling: Dorian vs Doran Dixon
