'use client';
import React, { useState } from 'react';

export default function HomePage() {
  const [correo, setCorreo] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const url = "https://script.google.com/macros/s/AKfycbzKgIkM4-Bj2PV-WGgKWzDHOmbpsJwksBF9tCb6ZD5RVq6YGkynJb35xDq0i1xkay6W/exec";
    const params = new URLSearchParams({ correo, linkedin });

    try {
      await fetch(url, {
        method: "POST",
        body: params,
      });
      setStatus("✅ ¡Gracias por registrarte!");
      setCorreo('');
      setLinkedin('');
    } catch {
      setStatus("❌ Error al enviar los datos. Intenta de nuevo.");
    }
  };

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-10">
      <header className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">La forma más inteligente de coordinar tus modelos BIM</h1>
        <p className="text-lg">Sube tus modelos. Detecta interferencias. Aprende justo lo que necesitas para resolverlas.</p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <input
            type="url"
            placeholder="URL de tu perfil LinkedIn (opcional)"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
          <button type="submit" className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Únete a la lista de espera
          </button>
          {status && <p className="text-sm text-green-600">{status}</p>}
        </form>
      </header>

      <section className="grid md:grid-cols-3 gap-8 max-w-5xl mb-16 text-center">
        <div>
          <h3 className="text-xl font-semibold mb-2">🧠 Aprende lo necesario</h3>
          <p className="text-gray-600">Videos breves que solucionan problemas reales.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">🧱 Sube tus modelos</h3>
          <p className="text-gray-600">Arquitectura, estructura y más en un solo lugar.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">⚠️ Detecta interferencias</h3>
          <p className="text-gray-600">Conoce los errores antes de construir.</p>
        </div>
      </section>

      <section className="max-w-xl text-center mb-16">
        <blockquote className="italic">“Esto me ahorró semanas de coordinación con el ingeniero estructural.”</blockquote>
        <p className="mt-2 font-semibold">— Laura, Arquitecta</p>
      </section>

      <footer className="text-center text-sm text-gray-500">
        <p>BIMSync © 2025. Todos los derechos reservados.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="#" className="hover:underline">Términos</a>
          <a href="#" className="hover:underline">Privacidad</a>
        </div>
      </footer>
    </main>
  );
}
