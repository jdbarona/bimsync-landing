// layout.tsx
import "../styles/globals.css";
import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BIMSync - Coordinación BIM Inteligente",
  description: "Sube modelos, detecta interferencias y aprende a resolverlas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}