import { ImagePlus, Upload, Pencil, Plus, X } from "lucide-react";
import { useRef } from "react";

export default function PhotosStep({
  wishData,
  setWishData,
}) {
  const galleryRef = useRef(null);
  const handleCoverImage = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setWishData({
      ...wishData,
      coverImage: URL.createObjectURL(file),
    });
  };

  const handleRecipientPhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setWishData({
      ...wishData,
      recipientPhoto: URL.createObjectURL(file),
    });
  };

  const handleGalleryPhotos = (e) => {
  const files = Array.from(e.target.files);

  const urls = files.map((file) =>
    URL.createObjectURL(file)
  );

  setWishData((prev) => ({
    ...prev,
    gallery: [
      ...(prev.gallery || []),
      ...urls,
    ],
  }));

  setTimeout(() => {
    if (galleryRef.current) {
      galleryRef.current.scrollTo({
        left: galleryRef.current.scrollWidth,
        behavior: "smooth",
      });
    }
  }, 100);
};

  const removeGalleryPhoto = (index) => {
    setWishData({
      ...wishData,
      gallery: wishData.gallery.filter(
        (_, i) => i !== index
      ),
    });
  };

  return (
    <div className="rounded-3xl border border-pink-100 bg-white p-4 shadow-sm">

      {/* Cover + Recipient */}
      <div className="mb-8 grid grid-cols-2 gap-3">

        {/* Cover Photo */}
        <div>
          <h3 className="mb-3 text-center text-sm font-bold">
            Cover Photo
          </h3>

          <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50 p-1">

            <input
              id="cover-image"
              type="file"
              accept="image/*"
              onChange={handleCoverImage}
              className="hidden"
            />

            {!wishData.coverImage ? (
              <label
                htmlFor="cover-image"
                className="
                  flex
                  h-[230px]
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                "
              >
                <Upload
                  size={34}
                  className="mb-3 text-pink-500"
                />

                <p className="text-sm font-semibold">
                  Upload Cover
                </p>

                <p className="text-xs text-slate-500">
                  JPG, PNG
                </p>
              </label>
            ) : (
              <div className="relative">

                <img
                  src={wishData.coverImage}
                  alt="Cover"
                  className="
                    h-[230px]
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />

                <label
                  htmlFor="cover-image"
                  className="
                    absolute
                    right-1
                    top-1
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-pink-500
                    text-white
                    shadow-lg
                  "
                >
                  <Pencil size={16} />
                </label>

              </div>
            )}

          </div>
        </div>

        {/* Recipient Photo */}
        <div>
          <h3 className="mb-3 text-center text-sm font-bold">
            Recipient Photo
          </h3>

          <div className="rounded-3xl border-2 border-dashed border-pink-200 bg-pink-50 p-1">

            <input
              id="recipient-photo"
              type="file"
              accept="image/*"
              onChange={handleRecipientPhoto}
              className="hidden"
            />

            {!wishData.recipientPhoto ? (
              <label
                htmlFor="recipient-photo"
                className="
                  flex
                  h-[230px]
                  cursor-pointer
                  flex-col
                  items-center
                  justify-center
                  rounded-2xl
                "
              >
                <ImagePlus
                  size={34}
                  className="mb-3 text-pink-500"
                />

                <p className="text-sm font-semibold">
                  Upload Recipient
                </p>

                <p className="text-xs text-slate-500">
                  Main Photo
                </p>
              </label>
            ) : (
              <div className="relative">

                <img
                  src={wishData.recipientPhoto}
                  alt="Recipient"
                  className="
                    h-[230px]
                    w-full
                    rounded-2xl
                    object-cover
                  "
                />

                <label
                  htmlFor="recipient-photo"
                  className="
                    absolute
                    right-1
                    top-1
                    flex
                    h-9
                    w-9
                    cursor-pointer
                    items-center
                    justify-center
                    rounded-full
                    bg-pink-500
                    text-white
                    shadow-lg
                  "
                >
                  <Pencil size={16} />
                </label>

              </div>
            )}

          </div>
        </div>

      </div>

      {/* Gallery */}
      <div>

        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-base font-bold">
            Gallery Photos
          </h3>

          <label
            htmlFor="gallery-upload"
            className="
              flex
              h-10
              cursor-pointer
              items-center
              gap-2
              rounded-xl
              border
              border-pink-200
              bg-pink-50
              px-3
              text-sm
              font-semibold
              text-pink-600
            "
          >
            <Plus size={18} />
            Add Photos
          </label>
        </div>

        <input
          id="gallery-upload"
          type="file"
          multiple
          accept="image/*"
          onChange={handleGalleryPhotos}
          className="hidden"
        />

        <div
          ref={galleryRef}
          className="
            flex
            gap-2
            overflow-x-auto
            pb-2
            scrollbar-hide
          "
        >
          {(wishData.gallery || []).map(
            (photo, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
              >
                <img
                  src={photo}
                  alt=""
                  className="
                    h-35
                    w-23
                    rounded-2xl
                    object-cover
                  "
                />

                <button
                  type="button"
                  onClick={() =>
                    removeGalleryPhoto(index)
                  }
                  className="
                    absolute
                    right-1
                    top-1
                    flex
                    h-7
                    w-7
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    shadow-md
                  "
                >
                  <X size={14} />
                </button>
              </div>
            )
          )}
        </div>

        <p className="mt-3 text-xs text-slate-500">
          You can add multiple photos (Max 15)
        </p>

      </div>

    </div>
  );
}