import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ecommerceProject from "../assets/ecommerce-project.png";
import taskManagementApp from "../assets/task-management-app.png";
import weatherDashboard from "../assets/weather-dashboard.png";

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      description:
        "A fully functional online store with product listings, shopping cart, and secure checkout.",
      image: ecommerceProject,
      link: "/ecommerce",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "An intuitive app for organizing tasks, setting priorities, and tracking progress.",
      image: taskManagementApp,
      link: "/task-management",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application providing real-time forecasts and interactive maps.",
      image: weatherDashboard,
      link: "/weather-dashboard",
    },
  ];

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => openModal(project)}
            />
          ))}
        </div>

        <ProjectModal
          project={selectedProject || {}}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
