import React from "react";
import { Code2, Server, Database, Layout, Smartphone, Zap } from "lucide-react";

function About() {
  // Skill categories for better organization
  const skills = [
    { category: "Frontend", items: ["React", "Tailwind CSS", "Next.js", "TypeScript", "Redux"] },
    { category: "Backend", items: ["Node.js", "Express", "MongoDB", "PostgreSQL", "Firebase"] },
    { category: "Tools & Others", items: ["Git", "Docker", "Figma", "Jest", "AWS"] },
  ];

  // Services / What I do cards
  const services = [
    { title: "Web Development", desc: "Building fast, responsive, and accessible websites.", icon: <Layout /> },
    { title: "API Design", desc: "Creating robust RESTful and GraphQL APIs.", icon: <Server /> },
    { title: "UI/UX Implementation", desc: "Translating designs into pixel-perfect code.", icon: <Smartphone /> },
  ];

  return (
    <section className="min-h-screen bg-[#F8F7F1] dark:bg-gray-950 text-[#1F3E3D] dark:text-gray-200 font-['Poppins'] transition-colors duration-300 py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16">
          <span className="font-['Patrick_Hand'] text-2xl text-[#2C5F58] dark:text-teal-400 block mb-2">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3E3D] dark:text-white">
            About <span className="text-[#F4B956] dark:text-[#fbbf24]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4B956] dark:bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* --- BIO & WHAT I DO GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left: Bio Text */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#1F3E3D] dark:text-white">
              I am a creative developer based in <span className="text-[#2C5F58] dark:text-teal-400">Sri Lanka.</span>
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              I specialize in building modern web applications that are not only functional but also visually appealing. 
              My journey started with a curiosity for how things work on the internet, which quickly turned into a passion for coding.
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open source, or sketching out new ideas for user interfaces.
            </p>
            
            <div className="pt-4">
              <button className="px-8 py-3 bg-[#1F3E3D] dark:bg-teal-600 text-white rounded-lg hover:bg-[#2C5F58] dark:hover:bg-teal-500 transition shadow-lg">
                Download Resume
              </button>
            </div>
          </div>

          {/* Right: What I Do Cards */}
          <div className="grid gap-4">
            {services.map((service, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-md transition flex items-center gap-4 group">
                <div className="p-3 bg-[#F8F7F1] dark:bg-gray-700 rounded-full text-[#F4B956] dark:text-[#fbbf24] group-hover:bg-[#F4B956] group-hover:text-white transition-colors">
                  {React.cloneElement(service.icon, { size: 24 })}
                </div>
                <div>
                  <h4 className="font-bold text-lg dark:text-white">{service.title}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- SKILLS SECTION --- */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
          <div className="text-center mb-10">
            <span className="font-['Patrick_Hand'] text-xl text-gray-500 dark:text-gray-400">My Toolbox</span>
            <h3 className="text-3xl font-bold mt-1 text-[#1F3E3D] dark:text-white">Technical Skills</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="text-xl font-semibold text-[#2C5F58] dark:text-teal-400 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {skillGroup.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, sIdx) => (
                    <span 
                      key={sIdx} 
                      className="px-4 py-2 bg-[#F8F7F1] dark:bg-gray-800 text-[#1F3E3D] dark:text-gray-200 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-[#F4B956] dark:hover:border-[#fbbf24] transition cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;