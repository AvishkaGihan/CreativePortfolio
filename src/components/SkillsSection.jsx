const SkillsSection = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Git",
    "API Development",
    "TypeScript",
    "Redux",
    "GraphQL",
    "Next.js",
    "Express.js",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Kubernetes",
    "AWS",
    "Firebase",
    "Jest",
    "Mocha",
    "Chai",
    "Webpack",
    "Babel",
    "Sass",
    "Less",
    "Bootstrap",
    "Material-UI",
  ];
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Skills</h2>
        <div className="flex flex-wrap justify-center">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="m-2 px-4 py-2 bg-blue-500 text-white rounded-full shadow-md transition duration-300 hover:bg-blue-600"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
