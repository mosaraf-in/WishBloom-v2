import { useEffect, useRef } from "react";
import { CREATE_WISH_STEPS } from "../../constants/createWishSteps";
import { CloudUpload } from "lucide-react";
import { IoEyeOutline } from "react-icons/io5";

export default function StepNavigation({
  currentStep,
  setCurrentStep,
  completedSteps = [],
  onPreview,
}) {
  const scrollRef = useRef(null);

  // Auto center active item
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    const item = container.children[currentStep];

    if (!item) return;

    const left =
      item.offsetLeft -
      (container.offsetWidth - item.offsetWidth) / 2;

    container.scrollTo({
      left,
      behavior: "smooth",
    });
  }, [currentStep]);

  // Detect closest item while scrolling
  useEffect(() => {
    const container = scrollRef.current;

    if (!container) return;

    let timeout;

    const handleScroll = () => {
      const center =
        container.scrollLeft +
        container.offsetWidth / 2;

      let closestIndex = 0;
      let closestDistance = Infinity;
      Array.from(container.children).forEach(
        (child, index) => {
          const childCenter =
            child.offsetLeft +
            child.offsetWidth / 2;
          const distance = Math.abs(
            center - childCenter
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = index;
          }
        }
      );

      clearTimeout(timeout);

      timeout = setTimeout(() => {
        setCurrentStep(closestIndex);
      }, 80);
    };

    container.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      container.removeEventListener(
        "scroll",
        handleScroll
      );
  }, [setCurrentStep]);

  const ActiveIcon =
    CREATE_WISH_STEPS[currentStep]?.icon;

  return (
    <div className="mb-4">
      {/* Navigation */}
      <div className="relative h-[90px]">

        {/* Fixed Ring */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-0
            z-30
            h-[68px]
            w-[68px]
            -translate-x-1/2
            rounded-full
            border-[1px]
            border-pink-300
            bg-white/90
            shadow-md
          "
        />

        {/* Active Icon */}
        <div
          className="
            pointer-events-none
            absolute
            left-1/2
            top-[9px]
            z-40
            flex
            h-[50px]
            w-[50px]
            -translate-x-1/2
            items-center
            justify-center
            rounded-full
            border-[1px]
            border-black/16
            bg-pink-500
            text-white
            shadow-lg
          "
        >
          {ActiveIcon && (
            <ActiveIcon size={29} />
          )}
        </div>

        {/* Scroll Icons */}
        <div
          ref={scrollRef}
          className="
            flex
            items-center
            gap-5
            overflow-x-auto
            px-[50%]
            pt-[18px]
            scrollbar-hide
          "
        >
          {CREATE_WISH_STEPS.map(
            (step, index) => {
              const Icon = step.icon;

              const isCompleted =
                completedSteps.includes(
                  index
                );

              return (
                <button
                  key={step.label}
                  type="button"
                  onClick={() =>
                    setCurrentStep(index)
                  }
                  className="
                    flex
                    min-w-[42px]
                    justify-center
                    transition-all
                    duration-300
                  "
                >
                  <div
                    className={`
                      flex
                      h-[38px]
                      w-[38px]
                      items-center
                      justify-center
                      rounded-full
                      transition-all
                      duration-300

                      ${
                        isCompleted
                          ? "bg-green-500 text-white border-[1px] border-black/10 opacity-80"
                          : "bg-yellow-400 text-white border-[1px] border-black/10 opacity-80"
                      }
                    `}
                  >
                    <Icon size={22} />
                  </div>
                </button>
              );
            }
          )}
        </div>
      </div>


      {/* Active Label */}
      <div className="relative flex items-center justify-center text-center">

  {/* Preview */}
  <button
    type="button"
    onClick={onPreview}
    className="
      absolute left-0
      flex items-center gap-1
      rounded-xl border border-pink-200
      bg-white px-2 py-[5px]
      text-sm font-semibold text-pink-600
      shadow-sm
    "
  >
    <IoEyeOutline size={18} />
    <span>Preview</span>
  </button>

  {/* Active Label */}
  <div>
    <p className="text-lg font-bold text-pink-600">
      {
        CREATE_WISH_STEPS[currentStep]
          ?.label
      }
    </p>

    <div className="mx-auto mt-1 h-[2px] w-9 rounded-full bg-pink-500" />
  </div>

  {/* Save */}
  <button
    type="button"
    className="
      absolute right-0
      flex items-center gap-1
      rounded-xl border border-pink-200
      bg-white px-2 py-[5px]
      text-sm font-semibold text-pink-600
      shadow-sm
    "
  >
    <CloudUpload size={18} />
    <span>Save</span>
  </button>

</div>
      
    </div>
  );
}