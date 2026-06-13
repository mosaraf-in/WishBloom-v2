import { Heart, Share2 } from "lucide-react";

export default function EndingSection({ wishData }) {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-md">
        <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 p-8 text-center text-white shadow-2xl">
          
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
              <Heart
                size={30}
                className="fill-white text-white"
              />
            </div>
          </div>

          {/* Title */}
          <h2 className="mb-4 text-3xl font-bold">
            Forever Yours ❤️
          </h2>

          {/* Message */}
          <p className="mx-auto max-w-xs text-sm leading-7 text-white/90">
            Thank you for being such an important part of my life.
            This wish was created especially for you.
          </p>

          {/* Sender */}
          <div className="mt-8">
            <p className="text-sm text-white/80">
              With Love,
            </p>

            <h3 className="mt-2 text-2xl font-semibold">
              {wishData.senderName}
            </h3>
          </div>

          {/* Share Button */}
          <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-pink-600 shadow-lg transition hover:scale-105">
            <Share2 size={18} />
            Share This Wish
          </button>
        </div>

        {/* Branding */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            Made with ❤️ on WishBloom
          </p>
        </div>
      </div>
    </section>
  );
}