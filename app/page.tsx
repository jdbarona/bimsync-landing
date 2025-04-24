import React from "react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col items-center px-4 py-10">
      {/* Header */}
      <header className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">La forma más inteligente de coordinar tus modelos BIM</h1>
        <p className="text-lg">Sube tus modelos. Detecta interferencias. Aprende justo lo que necesitas para resolverlas.</p>
        <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center">
          <input type="email" placeholder="Tu correo electrónico" className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md" />
          <button className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800">Únete a la lista de espera</button>
        </div>
      </header>

      {/* Benefits */}
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

      {/* Testimonials Placeholder */}
      <section className="max-w-xl text-center mb-16">
        <blockquote className="italic">“Esto me ahorró semanas de coordinación con el ingeniero estructural.”</blockquote>
        <p className="mt-2 font-semibold">— Laura, Arquitecta</p>
      </section>

      {/* Footer */}
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