function PictureDiv({ title, desc, image }) {
  return (
    <div className=" rounded-2xl max-w-[calc(100vw-10rem)] lg:w-lg md:min-h-[50vh]">
        <div className="align-center max-w-[calc(100vw-10rem)] w-sm rounded-xl p-6 bg-jungle-green-50">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl mb-4">{title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">{desc}</p>
        </div>
        <div className="flex justify-center">
            <img
                src={image}
                alt={title}
                className="md:hidden rounded-lg w-sm max-w-screen ring-4 ring-green-200"
                />
        </div>
    </div>
  );
}

export default PictureDiv;