import { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";


import StepHeader from "../../components/createWish/StepHeader";
import StepNavigation from "../../components/createWish/StepNavigation";

import DetailsStep from "./steps/DetailsStep";
import ThemeStep from "./steps/ThemeStep";
import PhotosStep from "./steps/PhotosStep";
import MusicStep from "./steps/MusicStep";
import VideoStep from "./steps/VideoStep";
import CardsStep from "./steps/CardsStep";
import EndingStep from "./steps/EndingStep";
import ReviewStep from "./steps/ReviewStep";

export default function CreateWish() {
  const [currentStep, setCurrentStep] = useState(0);

  const [wishData, setWishData] = useState({
  wishTitle: "",
  recipientName: "",
  senderName: "",
  shortMessage: "",
  mainMessage: "",

  theme: "",
  font: "",
  background: "",
  accentColor: "",

  gallery: [
    
  "https://picsum.photos/300/400?1",
  "https://picsum.photos/300/400?2",
  "https://picsum.photos/300/400?3",
  "https://picsum.photos/300/400?4",

  ],

  musicSource: "library",
musicType: "mp3",

music: "",
musicTitle: "",
musicArtist: "",
musicCover: "",

voiceMessage: "",
voiceDuration: "",

video: "",

  cards: [],

  endingTitle: "",
  endingMessage: "",
});

  const [completedSteps] = useState([0, 1]);
  const user = JSON.parse(
    localStorage.getItem("user")||"{}"
  )
  

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <DetailsStep
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          user={user}
          wishData={wishData}
          setWishData={setWishData}
        />;

      case 1:
        return <ThemeStep
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 2:
        return <PhotosStep
        currentStep={currentStep}
          setCurrentStep={setCurrentStep}
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 3:
        return <MusicStep
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 4:
        return <VideoStep
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 5:
        return <CardsStep
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 6:
        return <EndingStep
         wishData={wishData}
          setWishData={setWishData}
        />;

      case 7:
        return <ReviewStep
         wishData={wishData}
          setWishData={setWishData}
        />;

      default:
        return null;
    }
  };

  return (
    <div className="h-screen bg-[#fffafb]">
      <div className="mx-auto flex h-full max-w-md flex-col">

        {/* Fixed Top Area */}
        <div className="shrink-0 px-4 pt-5">
          <StepHeader
          currentStep={currentStep}
           wishData={wishData}
          
          />

          <StepNavigation
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
            completedSteps={completedSteps}
            onPreview={()=> {
            console.log(
              "Preview Clicked",
              currentStep
            )
          }}
          />
        </div>

        {/* Scrollable Form Area */}
        <div className="flex-1 overflow-y-auto px-4 pb-26">
          {renderStep()}
        </div>

        {/* Fixed Bottom Navigation */}
        <div
          className="
            fixed
            bottom-0
            left-0
            right-0
            z-50
            border-t
            border-pink-100
            bg-white
            pb-[env(safe-area-inset-bottom)]
            px-4
            py-1
          "
        >
          <div className="flex justify-between">

            <button
              type="button"
              disabled={currentStep === 0}
              onClick={() =>
                setCurrentStep((prev) =>
                  Math.max(prev - 1, 0)
                )
              }
              className="
                px-3
                py-2
                font-semibold
                flex
                items-center
                justify-center
                gap-1
                disabled:opacity-40
              "
            >
              <GrFormPrevious size={25}/>
              Previous
            </button>

            <button
              type="button"
              onClick={() =>
                setCurrentStep((prev) =>
                  Math.min(prev + 1, 7)
                )
              }
              className={`
                px-3
                py-2
                flex
                items-center
                justify-center
                gap-1
                font-semibold
                ${
                  currentStep === 7
                ? "bg-pink-600 text-white rounded-2xl"
                : "text-pink-600"
                }
              `}
            >
              
              {currentStep === 7
                ? "Create Wish"
                : "Next"}
              <MdOutlineNavigateNext size={25}/>
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}