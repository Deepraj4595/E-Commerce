import Image, { StaticImageData } from "next/image";
import DentalClinicImg from "@/assets/images/Dental_Clinics_2.png";
import DentalLabImg from "@/assets/images/Dental_Lab_2.png";
import DentalMaterialImg from "@/assets/images/Dental_Material_Trading.png";
import DentalEquipmentImg from "@/assets/images/Dental Equipment Manufacturing.jpeg";

// Fix: Change 'image' type from 'string' to 'StaticImageData'
interface ServiceCardProps {
  image: StaticImageData;
  title: string;
  description: string;
  services: string[];
  buttonText: string;
}

export default function DentalServicesSection() {
  return (
    <section className="py-12 bg-gray-100 flex justify-center bg-gradient-to-br from-[#f5f9ff] to-[#b4d1f7] overflow-hidden" >
      <div className="max-w-5xl w-full px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-10 p-4 md:text-6xl tracking-tighter bg-gradient-to-b from-black to-[#0068f1] text-transparent bg-clip-text">
          Our Dental Services
        </h1>

        {/* Dental Clinics Section */}
        <ServiceCard
          image={DentalClinicImg}
          title="Dental Clinics"
          description="Our clinics are equipped with the latest technology, delivering top-tier dental care for patients of all ages. Whether you need preventive care, cosmetic enhancements, or restorative procedures, GurOm Dental Clinics provide personalized, compassionate service that ensures you leave with a smile."
          services={[
            "✅ Routine Check-ups & Cleaning",
            "✅ Cosmetic Dentistry (Teeth Whitening, Veneers)",
            "✅ Restorative Dentistry (Crowns, Bridges, Implants)",
            "✅ Orthodontic Services (Braces, Aligners)"
          ]}
          buttonText="Book Now"
        />

        {/* Dental Lab Section */}
        <ServiceCard
          image={DentalLabImg}
          title="Dental Lab"
          description="At GurOm Dental Lab, precision and quality come first. Our lab is equipped with the latest CAD/CAM technology, allowing us to create custom crowns, bridges, dentures, and more with unparalleled accuracy."
          services={[
            "✅ Custom Crowns & Bridges",
            "✅ Denture Fabrication",
            "✅ Implant-Supported Prosthetics",
            "✅ Full-mouth Reconstructions"
          ]}
          buttonText="Partner With Us"
        />

        {/* Dental Material Trading Section */}
        <ServiceCard
          image={DentalMaterialImg}
          title="Dental Material Trading (GurOm Dental World)"
          description="GurOm Dental World offers a wide range of high-quality materials to dental clinics and labs. From consumables like impression materials to advanced restorative solutions, we provide everything you need to keep your practice running smoothly."
          services={[
            "✅ Impression Materials",
            "✅ Dental Cements",
            "✅ Restorative Materials (Composites, Amalgam)",
            "✅ Disposable Consumables"
          ]}
          buttonText="Shop Now"
        />

        {/* Dental Equipment Manufacturing Section */}
        <ServiceCard
          image={DentalEquipmentImg}
          title="Dental Equipment Manufacturing"
          description="Our team of engineers works tirelessly to bring cutting-edge dental equipment to the market. From ergonomic dental chairs to advanced diagnostic tools, we provide reliable, innovative solutions that empower clinics to deliver the best possible care."
          services={[
            "✅ Dental Chairs and Units",
            "✅ Imaging and Diagnostic Equipment",
            "✅ Sterilization Systems",
            "✅ Handpieces and Tools"
          ]}
          buttonText="Explore Products"
        />
      </div>
    </section>
  );
}

// Reusable Service Card Component with Fixed TypeScript Props
const ServiceCard: React.FC<ServiceCardProps> = ({ image, title, description, services, buttonText }) => {
  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden flex flex-col mt-6">
      <div className="flex flex-col md:flex-row items-stretch">
        {/* Image Section */}
        <div className="md:w-2/5 flex items-center justify-center p-4">
          <Image
            src={image}
            alt={title}
            width={200}
            height={200}
            className="rounded-lg object-cover"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:w-3/5 p-6 flex flex-col justify-between">
          <div>
            <h2 className="text-4xl font-semibold mt-6 text-[#001E80] bg-clip-text">{title}</h2>
            <p className="text-gray-700 mt-3 leading-relaxed text-md">{description}</p>
          </div>
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-gray-200 p-4">
        <h3 className="text-xl font-semibold text-gray-800 text-center mb-3">
          What We Provide:
        </h3>
        <div className="flex flex-wrap justify-center gap-4 text-gray-700 text-sm font-medium">
          {services.map((service, index) => (
            <span key={index}>{service}</span>
          ))}
        </div>

        {/* Call-to-Action Button */}
        <div className="text-center mt-4">
          <a
            href="#"
            className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 text-sm"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};