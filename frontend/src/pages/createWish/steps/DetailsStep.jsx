export default function DetailsStep({
  wishData,
  setWishData,
}) {
  const TEMPLATES = {
    "Happy Birthday 🎂": {
      short:
        "Wishing you endless happiness and success! 🎉",

      message: `Dear ${
        wishData.recipientName || "Friend"
      },

On this special day, I wish you happiness, good health and success.

May all your dreams come true.

Happy Birthday! 🎂❤️

From,
${wishData.senderName || "Your Name"}`,
    },

    "Happy Anniversary 💕": {
      short:
        "Celebrating your beautiful journey together 💕",

      message: `Dear ${
        wishData.recipientName || "Friend"
      },

May your love continue to grow stronger every day.

Wishing you both a lifetime of happiness and togetherness. 💖

From,
${wishData.senderName || "Your Name"}`,
    },

    "I Love You ❤️": {
      short:
        "You mean the world to me ❤️",

      message: `Dear ${
        wishData.recipientName || "Love"
      },

You are the most beautiful part of my life.

Thank you for every smile, every memory and every moment together.

I Love You ❤️

From,
${wishData.senderName || "Your Name"}`,
    },

    "Best Wishes ⭐": {
      short:
        "Best wishes for your bright future ⭐",

      message: `Dear ${
        wishData.recipientName || "Friend"
      },

Wishing you success, happiness and positivity in every step of life.

May all your goals become reality. ⭐

From,
${wishData.senderName || "Your Name"}`,
    },

    "Congratulations 🎉": {
      short:
        "Congratulations on your amazing achievement 🎉",

      message: `Dear ${
        wishData.recipientName || "Friend"
      },

Your hard work and dedication have paid off.

Wishing you even more success ahead. 🎉

From,
${wishData.senderName || "Your Name"}`,
    },

    "Just For You 🎀": {
      short:
        "A special message just for you 🎀",

      message: `Dear ${
        wishData.recipientName || "Friend"
      },

This wish was created especially for you.

May your day be filled with joy, love and beautiful memories. 💕

From,
${wishData.senderName || "Your Name"}`,
    },
  };

  const TITLES = [
    "Happy Birthday 🎂",
    "Happy Anniversary 💕",
    "I Love You ❤️",
    "Best Wishes ⭐",
    "Congratulations 🎉",
    "Just For You 🎀",
  ];

  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-5 shadow-sm">
      {/* Header */}

      <div className="mb-6">
        <p className="text-sm text-slate-500">
          Tell us about your wish
        </p>
      </div>

      {/* Wish Title */}

      <div className="mb-6">
        <label className="mb-2 block font-semibold text-slate-800">
          Wish Title
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <p className="mb-3 text-xs text-slate-500">
          Choose a title
        </p>

        <div className="grid grid-cols-3 gap-2">
          {TITLES.map((title) => (
            <button
              key={title}
              type="button"
              onClick={() => {
                const template =
                  TEMPLATES[title];

                setWishData({
                  ...wishData,
                  wishTitle: title,
                  shortMessage:
                    template.short,
                  mainMessage:
                    template.message,
                });
              }}
              className={`
                rounded-xl
                border
                px-2
                py-2
                text-xs
                transition-all

                ${
                  wishData.wishTitle ===
                  title
                    ? `
                      border-pink-500
                      bg-pink-50
                      text-pink-600
                    `
                    : `
                      border-slate-200
                      bg-white
                      text-slate-700
                    `
                }
              `}
            >
              {title}
            </button>
          ))}
        </div>
      </div>

      {/* Recipient Name */}

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-slate-800">
          Recipient Name
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <input
          type="text"
          value={
            wishData.recipientName
          }
          onChange={(e) =>
            setWishData({
              ...wishData,
              recipientName:
                e.target.value,
            })
          }
          placeholder="Sarah Johnson"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-3
            py-3
            outline-none
            focus:border-pink-500
          "
        />
      </div>

      {/* Sender Name */}

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-slate-800">
          Sender Name
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <input
          type="text"
          value={wishData.senderName}
          onChange={(e) =>
            setWishData({
              ...wishData,
              senderName:
                e.target.value,
            })
          }
          placeholder="Mosaraf Hossain"
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            px-3
            py-3
            outline-none
            focus:border-pink-500
          "
        />
      </div>

      {/* Short Message */}

      <div className="mb-5">
        <label className="mb-2 block font-semibold text-slate-800">
          Short Message
          <span className="ml-1 text-slate-400">
            (Optional)
          </span>
        </label>

        <p className="mb-2 text-xs text-slate-500">
          A short line that appears
          under the title
        </p>

        <div className="relative">
          <input
            type="text"
            maxLength={80}
            value={
              wishData.shortMessage
            }
            onChange={(e) =>
              setWishData({
                ...wishData,
                shortMessage:
                  e.target.value,
              })
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-3
              py-3
              pr-16
              outline-none
              focus:border-pink-500
            "
          />

          <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-slate-400">
            {
              wishData.shortMessage
                ?.length
            }
            /80
          </span>
        </div>
      </div>

      {/* Main Message */}

      <div>
        <label className="mb-2 block font-semibold text-slate-800">
          Main Message
          <span className="text-red-500">
            {" "}
            *
          </span>
        </label>

        <p className="mb-2 text-xs text-slate-500">
          Write your heartfelt
          message
        </p>

        <div className="relative">
          <textarea
            rows={10}
            maxLength={2000}
            value={
              wishData.mainMessage
            }
            onChange={(e) =>
              setWishData({
                ...wishData,
                mainMessage:
                  e.target.value,
              })
            }
            className="
              w-full
              rounded-xl
              border
              border-slate-200
              px-3
              py-3
              outline-none
              focus:border-pink-500
            "
          />

          <span className="absolute bottom-3 right-4 text-xs text-slate-400">
            {
              wishData.mainMessage
                ?.length
            }
            /2000
          </span>
        </div>
      </div>
    </div>
  );
}