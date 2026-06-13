import CoverSection from "../components/wish/CoverSection";
import MessageSection from "../components/wish/MessageSection";
import GallerySection from "../components/wish/GallerySection";
import VideoSection from "../components/wish/VideoSection";
import ExtraMessages from "../components/wish/ExtraMessages";
import EndingSection from "../components/wish/EndingSection";
// import coverImg from "../assets/wish-cover.jpeg"
import wishImg from "../assets/wish-img.jpeg"
import { useState } from "react";

export default function PublicWish() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const wishData = {
    recipientName: "Anushka",
    senderName: "Virat",
    

    title: "Happy Birthday Annu 🎉",

    message: `
      You make every day brighter just by being in my life.
      Your smile, your kindness and your beautiful heart
      mean the world to me.
    `,

    coverImage: 
      "https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1600",
    recipientPhoto:"https://i.dawn.com/primary/2017/12/5a2fc739ce961.jpg",
    // "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200",

    gallery: [
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800",
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=800",
      "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?q=80&w=800",
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800",
    ],

    videoThumbnail:
      "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200",

    extraMessages: [
      {
        title: "Thank You ❤️",
        text: "Thank you for always being there for me.",
      },
      {
        title: "Best Memories ✨",
        text: "Every moment with you is special.",
      },
      {
        title: "Forever Friends 🤝",
        text: "Let's create many more memories together.",
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#fff8f8]">
      <CoverSection wishData={wishData} isVideoPlaying={isVideoPlaying} />

      <MessageSection wishData={wishData} />

      {wishData.gallery?.length > 0 && (
        <GallerySection gallery={wishData.gallery} />
      )}

      {wishData.videoThumbnail && (
        <VideoSection thumbnail={wishData.videoThumbnail} setIsVideoPlaying={setIsVideoPlaying} />
      )}

      {wishData.extraMessages?.length > 0 && (
        <ExtraMessages messages={wishData.extraMessages} />
      )}

      <EndingSection wishData={wishData} />
    </main>
  );
}