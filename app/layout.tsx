import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hillel Latam Trip - Club Med Angra",
  description:
    "Preinscripción para el viaje de 4 días a Rio (Club Med Angra). Cupos limitados. USD 200."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}

