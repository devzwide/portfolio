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
- React Router DOM
- Tailwind CSS
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

This project is configured for AWS CodePipeline/CodeBuild using [`buildspec.yml`](buildspec.yml).

## File Structure

- `src/pages/` — Main page components (Home, About, Portfolio, Testimonials, Assistant)
- `src/routes/` — App routing configuration
- `src/client/Index.jsx` — Layout and navigation
- `src/main.jsx` — App entry point
- `src/main.css` — Tailwind CSS import
- `public/` — Static assets (images, favicon, etc.)

## License

MIT © 2025 Bukeka Nxumalo

---

Feel free to fork, contribute, or reach out via [LinkedIn](https://www.linkedin.com/in/devzwide/)!
