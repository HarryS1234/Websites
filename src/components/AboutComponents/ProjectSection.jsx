import React from "react";
import refrigerationImg from "../../assets/Refrigeration.jpg"; // Ensure this path is correct

const ProjectsSection = () => {
  // Sample project data (replace with your actual data)
  const projects = [
    {
      id: 1,
      title: "Project 1",
      image: refrigerationImg, // Use the imported image directly
      
    },
    {
      id: 2,
      title: "Project 2",
      image: refrigerationImg, // Use the imported image directly
      
    },
    {
      id: 3,
      title: "Project 3",
      image: refrigerationImg, // Use the imported image directly
      
    },
    {
      id: 4,
      title: "Project 4",
      image: refrigerationImg, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: refrigerationImg, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: refrigerationImg, // Use the imported image directly
    
    },
    {
      id: 4,
      title: "Project 4",
      image: refrigerationImg, // Use the imported image directly
    
    },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
        {
        id: 4,
        title: "Project 4",
        image: refrigerationImg, // Use the imported image directly
        
        },
  ];

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-center text-[#1dbbec] mb-12">
          Our Projects
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative overflow-hidden rounded-lg shadow-lg border-4 border-[#1dbbec] group"
            >
              {/* Image with Zoom Effect */}
              <img
                src={project.image} // Use project.image directly
                alt={project.title}
                className="w-full h-64 object-cover transform transition-transform duration-500 hover:scale-110"
              />

        
    
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;