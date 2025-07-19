function PictureDiv({ title, desc, image, type }) {
  return (
    <div className="rounded-2xl max-w-2xl mx-auto my-8 md:min-h-[40vh]">
      <div className="rounded-xl p-6 md:p-8 bg-jungle-green-50 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{desc}</p>
      </div>

      <div className="flex justify-center mt-4">
        {type === 'video/mp4'? (
          <video
            autoPlay
            muted
            playsInline
            loop
            className="md:hidden rounded-lg w-full max-w-md ring-4 ring-green-200"
          >
            <source src={image} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={typeof image === 'string' && image.includes('w=800')
                  ? image.replace('w=800', 'w=400')
                  : image
                }
            sizes="100vw"
            alt={title}
            className="md:hidden rounded-lg w-full max-w-md ring-4 ring-green-200"
            loading="lazy"
          />
        )}
      </div>
    </div>
  );
}

export default PictureDiv;
