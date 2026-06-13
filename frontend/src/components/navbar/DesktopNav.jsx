export default function DesktopNav({ scrollToSection }) {
  return (
    <div className="hidden md:flex items-center gap-8 text-[15px] font-medium text-slate-700">
      <button
        onClick={() => scrollToSection("hero")}
        className="hover:text-pink-600 transition"
      >
        Home
      </button>

      <button
        onClick={() => scrollToSection("features")}
        className="hover:text-pink-600 transition"
      >
        Features
      </button>

      <button
        onClick={() => scrollToSection("impact")}
        className="hover:text-pink-600 transition"
      >
        Our Impact
      </button>

      <button
        onClick={() => scrollToSection("how-it-works")}
        className="hover:text-pink-600 transition"
      >
        How It Works
      </button>

      <button
        onClick={() => scrollToSection("pricing")}
        className="hover:text-pink-600 transition"
      >
        Pricing
      </button>
    </div>
  );
}