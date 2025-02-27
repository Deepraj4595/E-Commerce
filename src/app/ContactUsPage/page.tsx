"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import aboutImage from "@/assets/images/about-banner.png";
import contact from "@/assets/images/contact-1.png";
import ArrowIcon from "@/assets/arrow-right.svg";

const ContactUsPage = () => {
  return (
    <div>
      <Header />
      <section className="pt-8 pb-0 md:-mt-28 bg-gradient-to-b from-white to-[#87CEEB] overflow-x-clip">
        <div className="container  max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Contact Us
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
              Have a question? Fill out the form below, and we will get back to you as soon as possible! Our team is here to assist you with any inquiries or concerns you may have. Whether you need information about our services or expert guidance, we are just a message away.
              </p>
              <div className="flex gap-1 items-center mt-[30px]">
              <a href="/#"><button className="btn btn-primary"> Shop Now </button></a>
              <button className="btn btn-text gap-1">
                <Link href="/#service"><span>Our Services</span></Link>
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>

            </div>
            
            <div className="mt-20 md:mt-0 md:h-[800px] md:flex-1 relative md:left-10 top-10">
              <Image
                src={contact}
                width={1400}
                height={800}
                alt="Contact Us"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-0"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      

      {/* Inquiry Form */}
      <section className="py-4 bg-gradient-to-b from-[#87CEEB] to-[#FFFFFF]">
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
      <section className="py-20 bg-gradient-to-b from-[#FFFFFF] to-[#d5eaf2]">
        <div className="container max-w-[800px] mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Support Section
          </h2>
          <p className="text-lg text-[#020D3E] mt-4">
            For questions related to products, shipping, or orders, visit our{" "}
            <Link href="/#" className="text-blue-500 hover:underline">
              Support page
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="md:flex items-start">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
              GurOm Dental
              </h2>
              <p className="text-lg text-gray-700 mb-2">
              Visit us at our main office on JM Road, <br></br>  Shivajinagar, Pune - 411045
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Contact No: +91 12345 67890 
              </p>
              <p className="text-lg text-gray-700 mb-2">
                Email: <a href="mailto:sketchitup.official@gmail.com" className="text-blue-500">info@guromdental.com </a>
              </p>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-black mb-4">
                Our Location
              </h2>
              <div className="w-[80%] h-64 rounded-md">
                <iframe
                  src="https://maps.google.com/maps?q=Row%20House%20No.%20D3,%20Ahilyadevi%20society,%20Baner,%20Pune%20-%20411045&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex={0}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
