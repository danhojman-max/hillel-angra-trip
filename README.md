# Hillel Latam Trip - Club Med Angra (Landing + Preinscripción)

Landing en Next.js + Tailwind con un formulario propio que **guarda respuestas en el Google Form original**.

## Requisitos
- Node.js 18+ (recomendado 20+)
- npm

## Setup local

```bash
npm install
npm run dev
```

Abrí `http://localhost:3000`.

## ¿Cómo funciona el formulario?
El frontend manda los campos (los `entry.*`) a un endpoint local `POST /api/submit`, y ese endpoint hace `POST` al Google Form:

- `https://docs.google.com/forms/d/e/1FAIpQLSdvAjmajPPdOayHQLeLTPGOEhu12Ze2Pw4GpA_BvtW1io7R_w/formResponse`

Así evitamos problemas de CORS y las respuestas te llegan en Google Forms → Responses.

## Fotos y videos
- Fotos usadas en la galería: `public/media/angra-1.jpeg` … `public/media/angra-4.jpeg`
- Video (opcional): agregá un archivo `public/media/angra.mp4` para que aparezca embebido.

## Deploy (Vercel)
- Subí este repo a GitHub.
- En Vercel: **New Project** → importás el repo → Deploy.
- No hace falta configurar variables de entorno.

