"use client";

"/assets/images/doctor-1.png"

import Image from "next/image";
import { ShieldCheck, Smile, Stethoscope, Heart, Star  } from "lucide-react"; 


const doctors = [
  {
    name: "Howard Holmes",
    specialty: "Dentist",
    image: "/assets/images/doctor-1.png", // Replace with actual image path
  },
  {
    name: "Ella Thompson",
    specialty: "Dentist",
    image: "/assets/images/doctor-2.png", // Replace with actual image path
  },
  {
    name: "Vincent Cooper",
    specialty: "Dentist",
    image:"/assets/images/doctor-3.png", // Replace with actual image path
  },
  {
    name: "Danielle Bryant",
    specialty: "Dentist",
    image: "/assets/images/doctor-4.png", // Replace with actual image path
  },
];

const expertise = [
    { title: "Preventive Care", description: "Regular check-ups and cleanings to keep your teeth healthy.", icon: ShieldCheck },
    { title: "Cosmetic Dentistry", description: "Enhancing smiles with whitening, veneers, and more.", icon: Smile },
    { title: "Orthodontics", description: "Braces and aligners for perfectly aligned teeth.", icon: Star },
    { title: "Oral Surgery", description: "Expert surgical treatments for complex dental issues.", icon: Stethoscope },
    { title: "Pediatric Dentistry", description: "Specialized care for children's dental health.", icon: Heart },
    { title: "Emergency Care", description: "Immediate attention to urgent dental issues.", icon: Star },
  ];

const DoctorsSection = () => {
  return (
    <section className="py-12 px-6 md:px-12 bg-[radial-gradient(ellipse_200%100%_at_bottom_left,#87CEEB,_#FFFFFF_90%)] overflow-x-clip">
      {/* Section Heading */}
      <div className="text-center">
        <h3 className="text-blue-600 font-bold uppercase">Our Doctor</h3>
        <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Best Expert Dentist
        </h2>
      </div>

      {/* Doctors Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition transform hover:scale-105"
          >
            <Image
              src={doctor.image}
              alt={doctor.name}
              width={200}
              height={200}
              className="rounded-md mx-auto"
            />
            <h3 className="text-xl font-semibold mt-4">{doctor.name}</h3>
            <p className="text-gray-500">{doctor.specialty}</p>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="#" className="text-blue-600 hover:text-blue-800">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-600">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-purple-500 hover:text-purple-700">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        ))}
      </div>

    {/* Our Expertise Section */}
{/* <div className="mt-16 text-center">
  <h3 className="text-blue-600 font-bold uppercase">Our Expertise</h3>
  <h2 className="text-3xl font-bold text-gray-900 mt-2">
    Delivering Excellence in Dental Care
  </h2>
</div> */}

{/* Expertise Grid */}
{/* <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
  {expertise.map((item, index) => (
    <div
      key={index}
      className="bg-white shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
    >
      <item.icon className="w-12 h-12 mx-auto text-blue-600 mb-4" />

      <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>

      <p className="text-gray-600 mt-3">{item.description}</p>
    </div>
  ))}
</div> */}
    </section>
  );
};

export default DoctorsSection;


