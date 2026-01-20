import React from "react";
import { Github, ExternalLink, FolderGit2 } from "lucide-react";

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Project 01",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["React", "Tailwind", "Vite"],
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#",
    },
    {
      id: 2,
      title: "Project 02",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Node.js", "MongoDB", "Express", "React"],
      image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#",
    },
    {
      id: 3,
      title: "Project 03",
      desc: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      tags: ["Next.js", "TypeScript", "Prisma"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-[#F8F7F1] dark:bg-gray-950 text-[#1F3E3D] dark:text-gray-200 font-['Poppins'] transition-colors duration-300 py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="font-['Patrick_Hand'] text-2xl text-[#2C5F58] dark:text-teal-400 block mb-2">
            My Creative Works
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3E3D] dark:text-white">
            Featured <span className="text-[#F4B956] dark:text-[#fbbf24]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4B956] dark:bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- PROJECTS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col"
            >
              
              {/* Image Container */}
              <div className="relative h-52 overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Floating Icon */}
                <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-gray-800/90 p-2 rounded-full shadow-md backdrop-blur-sm">
                  <FolderGit2 size={20} className="text-[#2C5F58] dark:text-teal-400" />
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-[#1F3E3D] dark:text-white mb-2 group-hover:text-[#2C5F58] dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium bg-[#F8F7F1] dark:bg-gray-800 text-[#1F3E3D] dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-2 border-t border-gray-100 dark:border-gray-800">
                  <a 
                    href={project.github} 
                    className="flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-[#1F3E3D] dark:hover:text-white transition-colors"
                  >
                    <Github size={18} /> Code
                  </a>
                  <a 
                    href={project.demo} 
                    className="flex items-center gap-2 text-sm font-semibold text-[#2C5F58] dark:text-teal-400 hover:text-[#1F3E3D] dark:hover:text-white transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink size={16} />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* --- SEE MORE BUTTON --- */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-white dark:bg-gray-800 text-[#1F3E3D] dark:text-white font-semibold rounded-full border-2 border-[#1F3E3D] dark:border-gray-600 hover:bg-[#1F3E3D] hover:text-white dark:hover:bg-white dark:hover:text-gray-900 transition-all shadow-md"
          >
            <Github size={20} /> See more on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}

export default Projects;