"use client";

import React from "react";
import { Header } from "@/sections/Header";
import { Footer } from "@/sections/Footer";
import { motion } from "framer-motion";
import Image from "next/image";
import DentalClinicsImg from "@/assets/images/Dental_Clinics_2.png";
import DentalLabImg from "@/assets/images/Dental_Lab_2.png";
import DentalMaterialImg from "@/assets/images/Dental_Material_Trading.png";
import DentalEquipmentImg from "@/assets/images/Dental Equipment Manufacturing.jpeg";

const ServicesPage = () => {
  return (
    <div>
      <Header />

      <section className="pt-8 pb-20 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <div className="md:flex items-center">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
                Our Dental Services
              </h1>
              <p className="text-xl text-[#010D3E] tracking-tight mt-6">
                Experience top-tier dental care, manufacturing, and trading with GurOm Dental.
              </p>
            </div>
            <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
              <Image
                src={DentalClinicsImg}
                alt="Dental Clinics"
                className="md:absolute md:h-[65%] md:w-auto md:max-w-none md:left-6 md:top-16 lg:left-0"
              />
            </div>
          </div>
          <div className="flex gap-1 items-center ">
            <a href="#services"><button className="btn btn-primary"> Our Services </button></a>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip">
        <div className="container max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Our Services
          </h2>

          <div className="space-y-12 mt-12">
            {[
                {
                    title: "Dental Equipment Manufacturing",
                    image: DentalEquipmentImg,
                    description: [
                      "Our team of engineers works tirelessly to bring cutting-edge dental equipment to the market. From ergonomic dental chairs to advanced diagnostic tools, we provide reliable, innovative solutions that empower clinics to deliver the best possible care.",
                      "Our Products:",
                      "Dental Chairs and Units",
                      "Imaging and Diagnostic Equipment",
                      "Sterilization Systems",
                      "Handpieces and Tools",
                    ],
                  },
              {
                title: "Dental Clinics",
                image: DentalClinicsImg,
                description: [
                  "Our clinics are equipped with the latest technology, delivering top-tier dental care for patients of all ages. Whether you need preventive care, cosmetic enhancements, or restorative procedures, GurOm Dental Clinics provide personalized, compassionate service that ensures you leave with a smile.",
                  "Services Offered:",
                  "Routine Check-ups and Cleaning",
                  "Cosmetic Dentistry (Teeth Whitening, Veneers)",
                  "Restorative Dentistry (Crowns, Bridges, Implants)",
                  "Orthodontic Services (Braces, Aligners)",
                ],
                cta: "Book Now",
              },
              {
                title: "Dental Lab",
                image: DentalLabImg,
                description: [
                  "At GurOm Dental Lab, precision and quality come first. Our lab is equipped with the latest CAD/CAM technology, allowing us to create custom crowns, bridges, dentures, and more with unparalleled accuracy. Partner with us to ensure your patients receive the best prosthetic care.",
                  "Our Services:",
                  "Custom Crowns & Bridges",
                  "Denture Fabrication",
                  "Implant-Supported Prosthetics",
                  "Full-mouth Reconstructions",
                ],
              },
              {
                title: "Dental Material Trading",
                image: DentalMaterialImg,
                description: [
                  "GurOm Dental World offers a wide range of high-quality materials to dental clinics and labs. From consumables like impression materials to advanced restorative solutions, we provide everything you need to keep your practice running smoothly.",
                  "Materials Available:",
                  "Impression Materials",
                  "Dental Cements",
                  "Restorative Materials (Composites, Amalgam)",
                  "Disposable Consumables",
                ],
                cta: "Shop Now",
              },
              
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className={`md:flex items-center p-6 bg-transparent rounded-2xl ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2">
                  <Image src={service.image} alt={service.title} className="w-3/4 h-auto rounded-md mx-auto" />
                </div>
                <div className="md:w-1/2 md:pl-8">
                <h2 className="text-center text-xl p-4 md:text-6xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">{service.title}</h2>
                  <ul className="mt-4 space-y-2 text-[#020D3E]">
                    {service.description.map((point, i) => (
                      <li key={i} className="p-4 bg-white shadow-lg rounded-2xl">• {point}</li>
                    ))}
                  </ul>
                  {service.cta && (
                    <div className="mt-6">
                      <a href="#" className="btn btn-primary">{service.cta}</a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;