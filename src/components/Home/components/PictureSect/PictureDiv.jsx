function PictureDiv({ title, desc, image }) {
  return (
    <div className="rounded-2xl max-w-2xl mx-auto my-8 md:min-h-[40vh]">
      <div className="rounded-xl p-6 md:p-8 bg-jungle-green-50 shadow-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">{title}</h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed">{desc}</p>
      </div>
      <div className="flex justify-center mt-4">
        <img
          src={image.replace(/w=800/, 'w=400')}
          srcSet={`
            ${image.replace(/w=800/, 'w=400')} 400w,
            ${image.replace(/w=800/, 'w=800')} 800w,
            ${image.replace(/w=800/, 'w=1200')} 1200w
          `}
          sizes="100vw"
          alt={title}
          className="md:hidden rounded-lg w-full max-w-md ring-4 ring-green-200"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default PictureDiv;