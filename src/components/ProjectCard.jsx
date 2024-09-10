import PropTypes from "prop-types";

const ProjectCard = ({ project, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden"
      onClick={onClick}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <a
          href={project.link}
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    description: PropTypes.string,
    link: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ProjectCard;
