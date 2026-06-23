import { themeCategories } from "../../../constants/themeData";

export default function ThemeStep({
  currentStep,
  setCurrentStep,
  wishData,
  setWishData,
}) {
  const fonts = [
    
    { name: "Poppins", className: "font-sans" },
    

    { name: "Playfair Display", className: "font-serif" },

    { name: "Dancing Script", className: "italic" },


    { name: "Cinzel", className: "font-bold" },
    
  ];

  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-3 shadow-sm">
      {/* Heading */}
      <div className="mb-4">
        <p className="mt-2 text-sm text-slate-500">
          Customize the appearance of your wish.
        </p>
      </div>

      {/* Selected Theme */}
      <div className="mb-4 rounded-2xl border border-pink-100 bg-gradient-to-r from-pink-50 to-purple-50 p-3">
        <p className="text-sm text-slate-500">Selected Theme</p>

        <h3 className=" text-lg font-bold text-pink-600">
          {wishData.theme || "No Theme Selected"}
        </h3>
      </div>

      {/* Theme Categories */}
      {themeCategories.map((category) => (
        <div key={category.title} className="mb-3">
          <h3 className="mb-2 text-lg font-bold">{category.title}</h3>

          <div
            className="
              flex
              gap-2
              overflow-x-auto
              pb-2
              scrollbar-hide
            "
          >
            {category.themes.map((theme) => (
              <button
                key={theme.name}
                type="button"
                onClick={() =>
                  setWishData({
                    ...wishData,
                    theme: theme.name,
                  })
                }
                className={`
    relative
    h-32
    w-24
    flex-shrink-0
    overflow-hidden
    rounded-2xl
    border-2
    transition-all

    ${
      wishData.theme === theme.name
        ? "border-pink-500 scale-105"
        : "border-transparent"
    }
  `}
              >
                <div
                  className={`
      h-full
      w-full
      bg-gradient-to-br
      ${theme.gradient}
      p-2
      text-white
    `}
                >
                  <div className="text-lg">{theme.icon}</div>

                  <div className="mt-3">
                    <p className="text-[10px] font-semibold leading-tight">
                      Happy
                    </p>

                    <p className="text-[10px] font-semibold leading-tight">
                      Birthday
                    </p>

                    <p className="mt-1 text-[9px] opacity-90">Sarah</p>
                  </div>
                </div>

                {wishData.theme === theme.name && (
                  <div
                    className="
        absolute
        right-1
        top-1
        flex
        h-6
        w-6
        items-center
        justify-center
        rounded-full
        bg-white
        text-pink-600
        text-xs
        font-bold
      "
                  >
                    ✓
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}

      {/* Selected Font */}
      <div className="mb-4 rounded-2xl bg-pink-50 p-3">
        <p className="text-sm text-slate-500">Selected Font</p>

        <h3 className="mt-1 text-lg font-bold text-pink-600">
          {wishData.font || "No Font Selected"}
        </h3>
      </div>

      {/* Fonts */}
      <div className="mb-3">
        <h3 className="mb-4 text-lg font-bold">Fonts</h3>

        <div className="space-y-3">
          {fonts.map((font) => (
            <button
              key={font.name}
              type="button"
              onClick={() =>
                setWishData({
                  ...wishData,
                  font: font.name,
                })
              }
              className={`
                w-full
                rounded-2xl
                border
                p-3
                text-left
                transition

                ${
                  wishData.font === font.name
                    ? "border-pink-500 bg-pink-50"
                    : "border-slate-200"
                }
              `}
            >
              <p className={`text-xl ${font.className}`}>
                Happy Birthday Sarah
              </p>

              <p className="mt-1 text-xs text-slate-500">{font.name}</p>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
