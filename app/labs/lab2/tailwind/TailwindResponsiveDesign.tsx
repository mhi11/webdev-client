export default function TailwindResponsiveDesign() {
  return (
    <div className="font-sans">
      <h2 className="text-3xl font-bold mb-4">Responsive Design</h2>
      <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl">
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="/images/mycat.jpg"
              alt="My Cat"
            />
          </div>
          <div className="min-w-0 p-8 text-center md:text-left">
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              A Glorious Creature
            </a>
            <p className="mt-2 text-gray-500">
              An in-depth analysis on cats...
            </p>
          </div>
        </div>
      </div>
      <div
        id="wd-ai-responsive"
        className="mx-auto mt-8 w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl md:bg-indigo-50"
      >
        <div className="md:flex">
          <div className="relative md:w-48 md:shrink-0">
            <img
              className="h-56 w-full object-cover md:h-full md:min-h-56 md:w-48"
              src="https://picsum.photos/400/300"
              alt="Sample placeholder"
            />
          </div>
          <div className="min-w-0 p-8 text-center md:text-left lg:p-12">
            <a
              href="#"
              className="mt-1 block text-lg leading-tight font-medium text-black no-underline hover:underline"
            >
              Case Study
            </a>
            <p className="mt-2 text-gray-500">
              A short write-up describing the sample content for this card.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}