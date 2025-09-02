// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h2 className="text-3xl font-bold">Hi, I’m Subhasish 👋</h2>
      <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
        Electronics Engineer | Embedded Systems | FPGA & VLSI Enthusiast
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <a href="https://github.com/subhasish-subhasish" target="_blank" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/subhasishsubhasish/" target="_blank" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          LinkedIn
        </a>
      </div>
    </section>
  );
}
