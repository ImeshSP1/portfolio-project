import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, ArrowRight } from "lucide-react";

function Contact() {

  // 1️⃣ State to store form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 2️⃣ State to show success / error message
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // 3️⃣ Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // 4️⃣ Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoading(true);
    setStatus("");

    try {
      // Send POST request to backend
      const response = await fetch("http://localhost:5050/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      // Handle backend response
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }

    } catch (error) {
      console.error(error);
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section className="min-h-screen bg-[#F8F7F1] dark:bg-gray-950 text-[#1F3E3D] dark:text-gray-200 font-['Poppins'] transition-colors duration-300 py-16 px-6">
      
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="text-center mb-16">
          <span className="font-['Patrick_Hand'] text-2xl text-[#2C5F58] dark:text-teal-400 block mb-2">
            Say Hello
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1F3E3D] dark:text-white">
            Contact <span className="text-[#F4B956] dark:text-[#fbbf24]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#F4B956] dark:bg-[#fbbf24] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* --- LEFT SIDE: Contact Info --- */}
          <div className="space-y-8 mt-4">
            <h3 className="text-3xl font-bold text-[#1F3E3D] dark:text-white">
              Let's Talk About <br />
              Your <span className="text-[#2C5F58] dark:text-teal-400">Next Project.</span>
            </h3>
            
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-6 pt-4">
              {/* Email */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-[#F4B956] shadow-sm group-hover:bg-[#F4B956] group-hover:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email Me</p>
                  <p className="text-lg font-semibold text-[#1F3E3D] dark:text-white">hello@sashika.com</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-[#F4B956] shadow-sm group-hover:bg-[#F4B956] group-hover:text-white transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Call Me</p>
                  <p className="text-lg font-semibold text-[#1F3E3D] dark:text-white">+94 77 123 4567</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-[#F4B956] shadow-sm group-hover:bg-[#F4B956] group-hover:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</p>
                  <p className="text-lg font-semibold text-[#1F3E3D] dark:text-white">Colombo, Sri Lanka</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: Form --- */}
          <div className="bg-white dark:bg-gray-900 p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
             
             {/* Background Decoration */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-[#F4B956]/10 rounded-bl-full -mr-10 -mt-10"></div>

             <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                
                {/* Name Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1F3E3D] dark:text-gray-300 ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#F8F7F1] dark:bg-gray-800 border-2 border-transparent focus:border-[#2C5F58] dark:focus:border-[#fbbf24] outline-none transition-all placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1F3E3D] dark:text-gray-300 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#F8F7F1] dark:bg-gray-800 border-2 border-transparent focus:border-[#2C5F58] dark:focus:border-[#fbbf24] outline-none transition-all placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-[#1F3E3D] dark:text-gray-300 ml-1">Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project..."
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-4 rounded-xl bg-[#F8F7F1] dark:bg-gray-800 border-2 border-transparent focus:border-[#2C5F58] dark:focus:border-[#fbbf24] outline-none transition-all resize-none placeholder-gray-400 dark:text-white"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#1F3E3D] dark:bg-teal-600 text-white font-bold py-4 rounded-xl hover:bg-[#2C5F58] dark:hover:bg-teal-500 transition-all flex items-center justify-center gap-2 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {loading ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <ArrowRight size={20} />
                    </>
                  )}
                </button>

                {/* Status Message */}
                {status === "success" && (
                  <div className="p-4 bg-green-100 text-green-700 rounded-lg text-center mt-4 border border-green-200">
                    ✅ Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {status === "error" && (
                  <div className="p-4 bg-red-100 text-red-700 rounded-lg text-center mt-4 border border-red-200">
                    ❌ Failed to send message. Please try again.
                  </div>
                )}

             </form>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;