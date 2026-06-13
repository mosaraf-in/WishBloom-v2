export default function ExtraMessages({ messages }) {
  return (
    <section id="message-section" className="px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Little Notes For You
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-[1px] w-10 bg-pink-300" />
            <span className="text-pink-500">💌</span>
            <div className="h-[1px] w-10 bg-pink-300" />
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-4">
          {messages.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl border border-pink-100 bg-white p-5 shadow-md"
            >
              <h3 className="mb-3 text-lg font-semibold text-pink-600">
                {item.title}
              </h3>

              <p className="leading-7 text-gray-700">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}