# Bukeka Nxumalo Portfolio

This is a personal portfolio web application built with **React**, showcasing my skills and projects in Software Engineering, DevOps, and Cloud Engineering.

## Features

- **Home Page:** Introduction and quick links to social profiles.
- **About:** Background, skills, and toolkit overview.
- **Portfolio:** Interactive display of projects and technologies.
- **Testimonials:** Feedback from collaborators and a form to submit new testimonials.
- **Chatbot Assistant:** AI-powered assistant using Google Gemini 2.5 Flash model.

## Technologies Used

- React 19
- React Router DOM 7
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)
- Tailwind Merge
- Vite (build tool)
- AWS (deployment pipeline)

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
git clone https://github.com/devzwide/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment

This project is configured for AWS CodePipeline/CodeBuild using a `buildspec.yml` file (add one if deploying to AWS).

## File Structure

- `src/pages/` — Main page components (Home, About, Portfolio, Testimonials, Assistant)
- `src/routes/` — App routing configuration
- `src/client/Index.jsx` — Layout and navigation
- `src/main.jsx` — App entry point
- `src/main.css` — Tailwind CSS import
- `public/` — Static assets (images, favicon, etc.)

## Notes

- **Images:** Place your images (e.g., `/about.jpg`, `/zwide.jpeg`, `/campus-security.png`, `/tute-me.png`, `/favicon.png`, `/hero.png`) in the `public/` directory.
- **Chatbot:** The Assistant page connects to a backend API (see `src/pages/Assistant.jsx`). Update the `API_URL` if you deploy your own backend.
- **Sidebar Navigation:** Edit navigation links in [`src/client/Index.jsx`](src/client/Index.jsx).

## License

MIT © 2025 Bukeka Nxumalo

---

Feel free to fork, contribute, or reach out via [LinkedIn](https://www.linkedin.com/in/devzwide/)!
