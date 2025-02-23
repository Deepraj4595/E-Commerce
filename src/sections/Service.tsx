import Image from 'next/image';
import Link from 'next/link';

// Import images/icons
import DentalClinicsImg from '@/assets/images/Dental_Clinics_2.png';
import DentalLabImg from '@/assets/images/Dental_Lab_2.png';
import DentalMaterialImg from '@/assets/images/Dental_Material_Trading.png';
import DentalEquipmentImg from '@/assets/images/Dental Equipment Manufacturing.jpeg';
import CenterImage from '@/assets/images/service-banner.png';

const services = [
  {
    title: "Dental Clinics",
    image: DentalClinicsImg,
    description: "Details on the clinics run by GurOm Dental.",
    pageurl: "/dental-clinics",
  },
  {
    title: "Dental Equipment Manufacturing",
    image: DentalEquipmentImg,
    description: "Description of in-house manufacturing capabilities.",
    pageurl: "/dental-equipment-manufacturing",
  },
  {
    title: "Dental Material Trading",
    image: DentalMaterialImg,
    description: "Overview of materials traded via GurOm Dental World.",
    pageurl: "/dental-material-trading",
  },
  {
    title: "Dental Lab",
    image: DentalLabImg,
    description: "Information about lab services for clinics.",
    pageurl: "/dental-lab",
  },
];

const Service = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="section-heading max-w-[850px] text-center mx-auto">
          <h2 className="section-title">Our Dental Services</h2>
          <p className="section-description mt-4 text-gray-600">
            Experience top-tier dental care, manufacturing, and trading with GurOm Dental.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10 items-center">
          {/* Left Services */}
          <div className="flex flex-col gap-6">
            {services.slice(0, 2).map(({ title, image, description, pageurl }) => (
              <div
                key={title}
                className="p-6 border border-[#F1F1F1] rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center"
              >
                <Image src={image} alt={title} width={80} height={80} />
                <h3 className="text-lg font-semibold text-gray-900 mt-3">{title}</h3>
                <p className="text-gray-500 text-sm mt-1">{description}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <Image src={CenterImage} alt="Central Service Image" width={350} height={350} />
          </div>

          {/* Right Services */}
          <div className="flex flex-col gap-6">
            {services.slice(2, 4).map(({ title, image, description, pageurl }) => (
              <div
                key={title}
                className="p-6 border border-[#F1F1F1] rounded-2xl shadow-md transition-all duration-300 ease-in-out hover:scale-105 flex flex-col items-center text-center"
              >
                <Image src={image} alt={title} width={80} height={80} />
                <h3 className="text-lg font-semibold text-gray-900 mt-3">{title}</h3>
                <p className="text-gray-500 text-sm mt-1">{description}</p>
              </div>
            ))}
          </div>  
        </div>
        <div className="flex justify-center items-center mt-10">
            <Link href="/ServicesPage">
              <button className="btn btn-primary">Our Services</button>
            </Link>
          </div>
      </div>
    </section>
  );
};

export default Service;
