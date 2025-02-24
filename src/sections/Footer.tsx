import logo from"@/assets/logosaas.png"
import SocialX from '@/assets/social-x.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialPin from '@/assets/social-pin.svg';
import SocialYoutube from '@/assets/social-youtube.svg';
import Image from "next/image";
// import { Link } from "lucide-react";


export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">

      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Column */}
          <div className="mb-6 lg:mb-0 sm:mt-10">
            <h2 className="text-white font-semibold text-2xl">GurOm Dental</h2>
            <p className="mt-2">Empowering Businesses</p>
            {/* <div className="mt-4 flex">
              <input
                type="email"
                placeholder="Enter your Email"
                className="px-4 py-2 rounded-l-lg bg-white text-black focus:outline-none"
              />
              <button className="px-4 py-2 rounded-r-lg bg-black text-white font-semibold">
                Subscribe
              </button>
            </div> */}
          </div>

          {/* Center Columns */}
          <div className="flex flex-col gap-24 lg:flex-row">
            <div>
              <h3 className="text-white font-semibold mb-2 text-xl">Information</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/AboutUsPage" className="hover:underline">
                    About Us
                  </a>
                </li>
                
                <li>
                  <a href="#" className="hover:underline">
                    Testimonials
                  </a>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2 text-xl">Helpful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/#services" className="hover:underline">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="/ContactUsPage" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                
                
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white sm:mt-10 font-semibold mb-2 text-xl">Contact Us</h3>
            <ul className="space-y-2">
              <li>Phone: +91 124567890</li>
              <li>
                Email:{" "}
                <a
                  href="mailto: info@guromdental.com"
                  className="hover:underline text-blue-400"
                >
                   info@guromdental.com
                </a>
              </li>
            </ul>
          </div>
        </div>

      </div>

        
        {/* <nav className="flex flex-col gap-6 mt-6 md:flex-row md:justify-center">
          <a href="#">About</a>
          <a href="#">Features</a>
          <a href="#">Customers</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
        </nav> */}

        <div className="flex justify-center gap-6 mt-16">
          <SocialX  />   
          <SocialInsta />  
          <SocialLinkedIn/>
          <SocialPin />    
          <SocialYoutube />
        </div>
        <p className="mt-6">&copy; 2024 SketchitUp, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
};
