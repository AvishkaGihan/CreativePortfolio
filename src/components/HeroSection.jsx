const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white">
      <h1 className="text-5xl font-bold">John Doe</h1>
      <p className="mt-4 text-xl">Web Developer & Designer</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-blue-500 rounded hover:bg-blue-600 transition duration-300"
      >
        View My Work
      </a>
    </div>
  );
};

export default HeroSection;
