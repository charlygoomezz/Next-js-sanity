# Multilanguage Landing Page with Next.js, Sanity & next-intl

This project is a modern, multilingual landing page built with [Next.js](https://nextjs.org/), [Sanity](https://www.sanity.io/) as a headless CMS, and [next-intl](https://next-intl-docs.vercel.app/) for internationalization. It features light/dark themes, reusable components, and support for multiple languages (English and Spanish).

## Features

- **Internationalization**: Multi-language support using `next-intl`.
- **Content Management**: Integrated with Sanity for editing texts, images, and sections from an admin panel.
- **Light/Dark Theme**: Easily switch between visual themes.
- **Reusable Components**: Sections like Hero, Features, Stats, Brand Carousel, Footer, and more.
- **Protected Routes & Middleware**: Redirects and route handling based on language, with internal route exclusions.

## Requirements

- Node.js 18+
- A [Sanity.io](https://www.sanity.io/) account and project

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-user/your-repo.git
   cd your-repo
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file with your Sanity credentials:
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Useful Scripts

- `dev`: Start the development server.
- `build`: Build the app for production.
- `start`: Start the app in production mode.
- `lint`: Run the linter.

## Main Structure

- `/app`: Next.js pages and layouts.
- `/components`: Reusable UI components.
- `/sanity`: Sanity configuration and schemas.
- `/i18n`: Internationalization configuration.
- `/public`: Static images and assets.

## Customization

- **Languages**: Edit `i18n/routing.ts` to add or remove languages.
- **Content**: Manage content from the Sanity admin panel.
- **Styles**: Customize styles in `globals.css` and component files.

## Deployment

You can easily deploy on [Vercel](https://vercel.com/) or any platform compatible with Next.js.

---
