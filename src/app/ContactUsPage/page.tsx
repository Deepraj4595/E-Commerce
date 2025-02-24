"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "@/assets/images/about-banner.png";

const ContactUsPage = () => {
  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="pt-8 pb-20 bg-gradient-to-b from-white to-[#87CEEB] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Contact Us
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Have a question? Fill out the form below, and we’ll get back to you as soon as possible!
              </p>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={aboutImage}
                width={1200}
                height={648}
                alt="Contact Us"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[1200px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-4xl font-bold text-[#001E80]">Contact Information</h2>
            <p className="text-lg text-[#020D3E] mt-4">Phone: +91-1234567890</p>
            <p className="text-lg text-[#020D3E] mt-2">
              Email:{" "}
              <a href="mailto:info@guromdental.com" className="text-blue-500 hover:underline">
                info@guromdental.com
              </a>
            </p>
            <div className="flex gap-4 mt-4">
              {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/social-pin.svg" alt="Facebook" width={40} height={40} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <Image src="/assets/social-insta.svg" alt="Instagram" width={40} height={40} />
              </a> */}
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#001E80]">Clinic and Office Locations</h2>
            <p className="text-lg text-[#020D3E] mt-4">
              Visit us at our main office on JM Road, Shivajinagar, Pune. Get directions via Google Maps.
            </p>
            <div className="w-full h-64 mt-4 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://maps.google.com/maps?q=Row%20House%20No.%20D3,%20Ahilyadevi%20society,%20Baner,%20Pune%20-%20411045&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                className="rounded-lg"
                frameBorder="0"
                allowFullScreen
                aria-hidden="false"
                tabIndex={0}
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 bg-gradient-to-b from-[#D2DCFF] to-[#FFFFFF]">
        <div className="container max-w-[800px] mx-auto px-4">
          <h2 className="text-center text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Inquiry Form
          </h2>
          <form className="mt-12 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input type="text" placeholder="Name" className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
              <input type="email" placeholder="Email" className="p-4 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <textarea
              placeholder="Message"
              className="p-4 border border-gray-300 rounded-lg w-full h-40 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button type="submit" className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF]">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Support Section
          </h2>
          <p className="text-lg text-[#020D3E] mt-4">
            For questions related to products, shipping, or orders, visit our{" "}
            <Link href="/support" className="text-blue-500 hover:underline">
              Support page
            </Link>
            .
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
