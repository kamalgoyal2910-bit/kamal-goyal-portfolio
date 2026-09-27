# Kamal Goyal — React Portfolio

A responsive professional portfolio for Kamal Goyal, built with React + Vite, Lucide icons and an optional Express production server.

## Run locally

```bash
npm install
npm run dev
```

Open the Vite URL shown in the terminal (normally `http://localhost:5173`).

## Production

```bash
npm run build
npm start
```

The Express server serves the `dist` folder on port 3000 (or `PORT`).

## Main files

- `src/main.jsx` — page content and React components
- `src/styles.css` — complete responsive design
- `public/kamal-cv.png` — supplied CV/profile image
- `server.js` — Express production server

## Notes

- Contact form is frontend-only. Connect it to Formspree, EmailJS, a WordPress API, or your own backend when ready.
- Replace the CV image in `public/kamal-cv.png` with a dedicated profile photo later if desired.
