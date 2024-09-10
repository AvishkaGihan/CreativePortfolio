import profileImage from "../assets/profile.jpg";

const AboutSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center px-4">
        <img
          src={profileImage}
          alt="John Doe"
          className="w-48 h-48 md:w-64 md:h-64 aspect-square rounded-full shadow-lg mb-8 md:mb-0 md:mr-12 object-cover"
        />
        <div>
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-700 mb-6">
            Hi there! I&apos;m a passionate web developer with a strong
            background in design. I love creating beautiful and functional
            websites that provide an exceptional user experience.
          </p>
          <p className="text-gray-700 mb-6">
            With years of experience in the industry, I&apos;ve honed my skills
            in HTML, CSS, JavaScript, and various front-end frameworks like
            React. I&apos;m always eager to learn new technologies and stay
            up-to-date with the latest trends in web development.
          </p>
          <p className="text-gray-700 mb-6">
            When I&apos;m not coding, you can find me exploring new design
            ideas, reading about the latest advancements in tech, or enjoying
            outdoor activities like hiking and photography.
          </p>
          <a
            href="#contact"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded transition duration-300"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
