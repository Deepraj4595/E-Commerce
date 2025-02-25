import Image, { StaticImageData } from "next/image";
import DentalClinicImg from "@/assets/images/Dental_Clinics_2.png";
import DentalLabImg from "@/assets/images/Dental_Lab_2.png";
import DentalMaterialImg from "@/assets/images/Dental_Material_Trading.png";
import DentalEquipmentImg from "@/assets/images/Dental Equipment Manufacturing.jpeg";

interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  services: string[];
  buttonText: string;
}

export default function DentalServicesSection() {
  return (
    <section className="py-12 bg-gray-100 flex justify-center bg-gradient-to-br from-[#f5f9ff] to-[#b4d1f7] overflow-hidden">
      <div className="max-w-5xl w-full px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 p-4 md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#0068f1] text-transparent bg-clip-text">
          Our Dental Services
        </h1>

        <ServiceCard
          image={DentalClinicImg}
          title="Dental Clinics"
          description="Our clinics are equipped with the latest technology, delivering top-tier dental care for patients of all ages."
          services={[
            "✅ Routine Check-ups & Cleaning",
            "✅ Cosmetic Dentistry (Teeth Whitening, Veneers)",
            "✅ Restorative Dentistry (Crowns, Bridges, Implants)",
            "✅ Orthodontic Services (Braces, Aligners)",
          ]}
          buttonText="Book Now"
        />

        <ServiceCard
          image={DentalLabImg}
          title="Dental Lab"
          description="At GurOm Dental Lab, precision and quality come first. Our lab is equipped with the latest CAD/CAM technology."
          services={[
            "✅ Custom Crowns & Bridges",
            "✅ Denture Fabrication",
            "✅ Implant-Supported Prosthetics",
            "✅ Full-mouth Reconstructions",
          ]}
          buttonText="Partner With Us"
        />

        <ServiceCard
          image={DentalMaterialImg}
          title="Dental Material Trading"
          description="GurOm Dental World offers a wide range of high-quality materials to dental clinics and labs."
          services={[
            "✅ Impression Materials",
            "✅ Dental Cements",
            "✅ Restorative Materials (Composites, Amalgam)",
            "✅ Disposable Consumables",
          ]}
          buttonText="Shop Now"
        />

        <ServiceCard
          image={DentalEquipmentImg}
          title="Dental Equipment Manufacturing"
          description="Our team of engineers works tirelessly to bring cutting-edge dental equipment to the market."
          services={[
            "✅ Dental Chairs and Units",
            "✅ Imaging and Diagnostic Equipment",
            "✅ Sterilization Systems",
            "✅ Handpieces and Tools",
          ]}
          buttonText="Explore Products"
        />
      </div>
    </section>
  );
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, services, buttonText }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden flex flex-col md:flex-row mt-8">
      {/* Left Pane - Image & Description */}
      <div className="md:w-1/2 p-6 flex flex-col items-center">
        <Image src={image} alt={title} width={250} height={250} className="rounded-lg object-cover" />
        <h2 className="text-2xl font-semibold mt-4 text-[#001E80] text-center">{title}</h2>
        <p className="text-gray-700 mt-3 text-center leading-relaxed">{description}</p>
      </div>

      {/* Right Pane - Services & CTA */}
      <div className="md:w-1/2 bg-gray-100 p-6 flex flex-col justify-center items-center">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-4">What We Provide:</h3>
        <ul className="text-gray-700 text-md space-y-2 text-center">
          {services.map((service, index) => (
            <li key={index} className="bg-white px-3 py-2 rounded-md shadow-md">{service}</li>
          ))}
        </ul>
        <a
          href="#"
          className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};
