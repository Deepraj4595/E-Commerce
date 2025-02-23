"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import aboutImage from "/public/about-banner.png"; // Replace with actual image path

export default function AboutUs() {
  return (
    <div>
    <section className="py-12 px-6 md:px-12 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <motion.div 
            className="border-4 border-blue-500 rounded-xl overflow-hidden shadow-lg"
            animate={{ translateY: [-15, 15] }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 3, ease: "easeInOut" }}
          >
            <Image
              src={aboutImage}
              alt="Dental Care"
              width={350} // Slightly increased size
              height={350}
              className="w-full h-auto"
            />
          </motion.div>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-2/3">
          <h3 className="text-lg uppercase font-semibold text-blue-400 tracking-wide">About Us</h3>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#002D9C] text-transparent bg-clip-text mt-3">
            Precision in Care, Innovation in Smile
          </h2>
          <p className="text-lg text-[#0A1E63] tracking-tight mt-6 leading-relaxed">
            Established in 2019, <strong>GurOm Dental</strong> leads the way in 
            advanced dental solutions across India. We bring innovation and 
            excellence to every aspect of dental care – from clinic services 
            to cutting-edge equipment.
          </p>
          <p className="text-lg text-[#0A1E63] tracking-tight mt-4 leading-relaxed">
            <strong>🌟 Vision:</strong> Revolutionizing the dental industry with world-class care and
            cutting-edge solutions.
          </p>
          <p className="text-lg text-[#0A1E63] tracking-tight mt-4 leading-relaxed">
            <strong>🚀 Mission:</strong> Delivering exceptional services and materials to ensure
            clinics operate at the highest standard.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-6">
            <a href="/AboutUsPage">
              <button className="btn btn-primary px-6 py-3 text-lg font-semibold"> Learn More </button>
            </a>
            
          </div>
        </div>
      </div>

      
    </section>
    

    </div>
  );
}
