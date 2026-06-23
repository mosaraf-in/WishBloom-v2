import {
  Heart,
  Home,
  Sparkles,
  BarChart3,
  Settings,
  Gem,
  ChevronRight,
} from "lucide-react";

export default function MobileDrawer({
  open,
  scrollToSection,
  setOpenModal,
}) {
  return (
    <div
      className={`fixed top-[60.8px] right-0 z-[70] h-[calc(100vh-64.2px)] w-[77%] rounded-l-2xl max-w-[340px] bg-white border-l border-pink-100 border-t-0 shadow-2xl transition-all duration-300 md:hidden ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="px-5 py-3 -space-y-1">
        <button
          onClick={() => scrollToSection("hero")}
          className="flex w-full items-center justify-between rounded-2xl px-3 py-4 hover:bg-pink-50"
        >
          <div className="flex items-center gap-4">
            <Home className="h-5 w-5 text-pink-500" />
            <span className="font-medium">Home</span>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        <button
          onClick={() => scrollToSection("features")}
          className="flex w-full items-center justify-between rounded-2xl px-3 py-4 hover:bg-pink-50"
        >
          <div className="flex items-center gap-4">
            <Sparkles className="h-5 w-5 text-pink-500" />
            <span className="font-medium">Features</span>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        <button
          onClick={() => scrollToSection("impact")}
          className="flex w-full items-center justify-between rounded-2xl px-3 py-4 hover:bg-pink-50"
        >
          <div className="flex items-center gap-4">
            <BarChart3 className="h-5 w-5 text-pink-500" />
            <span className="font-medium">Our Impact</span>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        <button
          onClick={() => scrollToSection("how-it-works")}
          className="flex w-full items-center justify-between rounded-2xl px-3 py-4 hover:bg-pink-50"
        >
          <div className="flex items-center gap-4">
            <Settings className="h-5 w-5 text-pink-500" />
            <span className="font-medium">How It Works</span>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        <button
          onClick={() => scrollToSection("pricing")}
          className="flex w-full items-center justify-between rounded-2xl px-3 py-4 hover:bg-pink-50"
        >
          <div className="flex items-center gap-4">
            <Gem className="h-5 w-5 text-pink-500" />
            <span className="font-medium">Pricing</span>
          </div>

          <ChevronRight className="h-5 w-5 text-slate-400" />
        </button>

        <div className="my-5 h-px bg-slate-100" />

        <button
          onClick={() => setOpenModal(true)}
          className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-pink-500 to-violet-500 py-3 font-bold text-white shadow-lg"
        >
          Create Wish
        </button>

        <div className="mt-5 rounded-2xl bg-pink-50 p-4">
          <div className="flex items-center gap-3">
            <Heart className="h-8 w-8 fill-pink-500 text-pink-500" />

            <div>
              <p className="font-semibold text-slate-800">
                Make every wish special
              </p>

              <p className="text-sm text-slate-500">
                Create beautiful memories ✨
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}