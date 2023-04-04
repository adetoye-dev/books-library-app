import heroImg from "../assets/StackOfBooks.svg";

function Hero() {
  return (
    <div className="w-full min-h-screen text-white bg-gradient-to-r from-teal-500 to-blue-500">
      <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
        <img
          className="lg:w-1/6 md:w-3/6 w-5/6 mb-10 object-cover object-center"
          alt="hero"
          src={heroImg}
        />
        <div className="text-center lg:w-6/12 w-full">
          <h1 className="my-4 text-5xl font-bold leading-tight">
            Looking for a tech book?
          </h1>
          <p className="text-2xl mb-8">
            Explore our interesting collections of free tech books.
          </p>
          <div className="flex justify-center mx-auto">
            <a
              href="#books"
              className="hover:underline bg-white text-gray-800 font-bold rounded-full  py-4 px-8"
            >
              Explore Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
