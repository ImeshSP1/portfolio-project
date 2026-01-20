import { FaGithub, FaLinkedin, FaTwitter, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    // We force a dark background here for dramatic effect, even in light mode
    <footer className="bg-[#1F3E3D] dark:bg-black text-[#F8F7F1] font-['Poppins'] py-16 px-6 transition-colors duration-300">
      
      <div className="max-w-7xl mx-auto flex flex-col justify-between min-h-[400px]">
        
        {/* --- TOP SECTION: Big CTA --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20">
          <div>
            <span className="font-['Patrick_Hand'] text-2xl text-[#F4B956] mb-4 block">
              What's Next?
            </span>
            <h2 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Let's work <br />
              <span className="text-gray-400">together.</span>
            </h2>
          </div>

          <Link 
            to="/contact"
            className="group flex items-center gap-4 text-2xl font-bold border-b-2 border-[#F4B956] pb-2 hover:text-[#F4B956] transition-all"
          >
            Get in touch
            <span className="bg-[#F4B956] text-[#1F3E3D] rounded-full p-3 group-hover:rotate-45 transition-transform duration-300">
              <FaArrowRight size={20} />
            </span>
          </Link>
        </div>

        {/* --- MIDDLE SECTION: Divider --- */}
        <div className="w-full h-px bg-white/10 mb-12"></div>

        {/* --- BOTTOM SECTION: Links & Info --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-400">
          
          {/* Address / Contact Info */}
          <div className="space-y-2">
            <h3 className="text-white font-semibold mb-2">Drop by</h3>
            <p>Colombo, Sri Lanka</p>
            <a href="mailto:hello@sashika.com" className="hover:text-white transition">hello@sashika.com</a>
          </div>

          {/* Site Links */}
          <div className="space-y-2 flex flex-col">
            <h3 className="text-white font-semibold mb-2">Menu</h3>
            <Link to="/projects" className="hover:text-white transition w-fit">Work</Link>
            <Link to="/about" className="hover:text-white transition w-fit">About</Link>
            <Link to="/contact" className="hover:text-white transition w-fit">Contact</Link>
          </div>

          {/* Socials & Copyright */}
          <div className="flex flex-col justify-between gap-4 md:items-end">
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition transform hover:-translate-y-1"><FaGithub size={24} /></a>
              <a href="#" className="hover:text-white transition transform hover:-translate-y-1"><FaLinkedin size={24} /></a>
              <a href="#" className="hover:text-white transition transform hover:-translate-y-1"><FaTwitter size={24} /></a>
            </div>
            <p className="mt-4 md:mt-0">
              © {currentYear} Sashika Imesh.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;