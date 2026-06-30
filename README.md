# Satvik Yoga 🧘‍♀️

A beautifully designed, highly responsive modern web application built for **Satvik Yoga**. This landing page and lead-generation site is optimized for converting visitors into clients through direct WhatsApp integrations, offering sections for personal classes, corporate wellness programs, and therapeutic yoga specializations.

## 🌟 Features

- **Modern & Premium Design**: Built with a "Sattvic" aesthetic in mind—pure, clean, and harmonious—using custom Tailwind CSS utility classes.
- **Dynamic Animations**: Smooth, high-performance scroll animations powered by Framer Motion.
- **WhatsApp Integration**: A direct inquiry funnel that pre-fills WhatsApp messages for different intents (Corporate, General, Specific Classes) right to the business owner's device.
- **Therapeutic Specializations**: A dedicated "What We Teach" section highlighting 28 distinct areas of yoga expertise (e.g., Knee Pain, Anxiety, PCOD/PCOS).
- **Corporate Wellness**: A bespoke section aimed at B2B clientele for office/team bookings.
- **Fully Responsive**: Optimized for all screen sizes with seamless mobile drawer navigation.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Hosting / Image CDN**: [Cloudinary](https://cloudinary.com/) for optimized dynamic image fetching

## 🚀 Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

- `src/app/` - Next.js App Router pages (`page.tsx`, `layout.tsx`, `about`, `contact`, `classes`, `blog`)
- `src/components/` - Reusable UI components (`Navbar`, `Footer`, `ClassCard`, `WhatsAppButton`, `AnimateOnScroll`)
- `src/data/` - Static data for the application (`classes.ts`, `testimonials.ts`, `blogPosts.ts`)
- `public/` - Static assets, images, and fonts

## 🎨 Modifying Content
To modify the list of classes, team members, or blog posts, simply edit the respective TypeScript files located in the `src/data/` directory or directly within the page components. All images are dynamically loaded from Cloudinary via standard `<img>` tags for simplicity and bypassing Next.js external domain restrictions.

## 📝 License
This project is proprietary and built specifically for Satvik Yoga.
