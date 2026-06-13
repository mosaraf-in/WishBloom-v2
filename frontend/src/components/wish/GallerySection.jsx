export default function GallerySection({ gallery }) {
  return (
    <section className="px-4 py-10">
      <div className="mx-auto max-w-md">
        {/* Heading */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Our Beautiful Memories
          </h2>

          <div className="mt-3 flex items-center justify-center gap-2">
            <div className="h-[1px] w-10 bg-pink-300" />
            <span className="text-pink-500">❤</span>
            <div className="h-[1px] w-10 bg-pink-300" />
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {gallery.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-md"
            >
              <img
                src={photo}
                alt={`memory-${index}`}
                className="h-36 w-full object-cover transition duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="mt-6">
          <button className="w-full rounded-full border border-gray-200 bg-white px-6 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50">
            📷 View All Photos
          </button>
        </div>
      </div>
    </section>
  );
}