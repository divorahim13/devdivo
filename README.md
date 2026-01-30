# NeonFolio - Web 3.0 Portfolio Template

This is a modern, responsive React portfolio template styled with Tailwind CSS and animated with Framer Motion.

## 🚀 How to Customize

All content data is separated from the UI logic for easy editing. You do not need to touch the complex React components to update your information.

### 1. Update Personal Info & Data
Open the file `constants.ts`. Here you can change:
- **NAV_ITEMS**: Navigation links.
- **SERVICES**: The services you offer (change titles, descriptions, and icons).
- **PROJECTS**: Your portfolio items.
    - Change `image` to your own project screenshot URLs.
    - Update `tags` and `description`.
- **SKILLS**: Your technical skills and proficiency percentages (0-100).
- **TESTIMONIALS**: Client reviews.
- **SOCIALS**: Your social media links.

### 2. Update Icons
Icons are provided by `lucide-react`. If you want to change an icon:
1. Go to https://lucide.dev/icons to find an icon name.
2. In `constants.ts`, update the import statement: `import { NewIconName } from 'lucide-react';`
3. Use it in the data arrays.

### 3. Update Images
Currently, the site uses `picsum.photos` for placeholders.
To use your own images:
1. Place your images in a `public/assets` folder (create if not exists) or host them online (Imgur, AWS S3, etc.).
2. Update the `image` URLs in `constants.ts` or `components/About.tsx`.

### 4. Contact Form
The contact form in `components/Contact.tsx` currently **simulates** a submission for demo purposes.
To make it real:
1. Sign up for a service like [Formspree](https://formspree.io/) or [EmailJS](https://www.emailjs.com/).
2. For Formspree: Update the `<form>` tag in `components/Contact.tsx` to:
   ```jsx
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" ...>
   ```

### 5. Colors & Theme
The colors are defined in `index.html` within the Tailwind config script.
- `primary`: Cyan (#00F5FF)
- `secondary`: Purple (#7B2CBF)
- `accent`: Pink (#FF006E)
- `dark`: Background (#0B0B15)

Change these hex codes to match your personal brand.

## 📦 How to Deploy

Since this template uses standard ES Modules and generic CDNs (`esm.sh`, `cdn.tailwindcss.com`), it requires **zero build steps**.

### Option A: Vercel (Recommended)
1. Push this code to a GitHub repository.
2. Login to [Vercel](https://vercel.com).
3. Click **Add New Project** -> Select your repository.
4. **Important**: Keep the "Build Command" and "Output Directory" **EMPTY**.
5. Click **Deploy**.

### Option B: Netlify
1. Drag and drop this project folder into the Netlify Drop zone.
2. Or connect to GitHub, and ensure "Build command" and "Publish directory" are empty.

### Option C: GitHub Pages
1. Go to Settings -> Pages.
2. Select `main` branch and `/` (root) folder.
3. Save.

## 🛠 Tech Stack
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (Animation)
- Lucide React (Icons)
