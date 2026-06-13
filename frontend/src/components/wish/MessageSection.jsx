export default function MessageSection({ wishData }) {
  return (
    <section  className="px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            A Few Words For You
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-[1px] w-10 bg-pink-300" />
            <span className="text-pink-500">❤</span>
            <div className="h-[1px] w-10 bg-pink-300" />
          </div>
        </div>

        {/* Message Card */}
        <div className="rounded-3xl border border-pink-100 bg-white p-6 shadow-lg">
          <h3 className="mb-5 text-2xl font-semibold text-pink-600">
            Dear {wishData.recipientName},
          </h3>

          <div className="space-y-4 leading-8 text-gray-700">
            <p>
              {wishData.message}
            </p>

            <p>
              Thank you for being such an important part of my
              life.
            </p>

            <p>
              Wishing you all the happiness today and always.
            </p>
          </div>

          {/* Signature */}
          <div className="mt-10">
            <p className="mb-2 text-gray-600">
              Forever yours,
            </p>

            <h4 className="text-3xl font-serif text-gray-900">
              {wishData.senderName}
            </h4>

            <span className="text-pink-500">♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}