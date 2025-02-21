import CheckIcon from '@/assets/check.svg';
import UIUX from '@/assets/newtech/ui-design.png';
import WebDev from '@/assets/newtech/web-development.png';
import Cyber from '@/assets/newtech/cyber-criminal.png';
import Planning from '@/assets/newtech/planning.png';
import AR from '@/assets/newtech/AR-VR.png'
import Image from 'next/image';
import Link from 'next/link';

const pricingTiers = [
  {
    title: "AR VR ",
    monthlyPrice: AR, 
    buttonText: "AR  -  VR Visualization ",
    pageurl: "/ARVRPage",
    features: [
      "Visual Things in Different way."
    ],
  },
  {
    title: "Enterprise Software Solutions ",
    monthlyPrice: UIUX, 
    buttonText: "Enterprise Software Solutions ",
    pageurl: "/EnterPage",
    features: [
      "Transforming ideas into impactful designs."
    ],
  },
  {
    title: "Website Development",
    monthlyPrice: WebDev, 
    buttonText: "Website Development",
    pageurl: "/WEBDEVPage",
    features: [
      "Creating impactful online experiences."
    ],
  },
  {
    title: "Business Planning",
    monthlyPrice: Planning, 
    buttonText: "Business Consultation",
    pageurl: "/BPLANPage",
    features: [
      "Solutions and opportunities for success."
    ],
  },
  
  // {
  //   title: "Cyber Security",
  //   monthlyPrice: Cyber, 
  //   buttonText: "Cyber Security",
  //   features: [
  //     "Protecting your digital assets."
  //   ],
  // },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className='section-heading max-w-[850px]'>
          <h2 className="section-title">Our Services</h2>
          <p className="section-description mt-5 "> 
            Leveraging expertise in corporate finance, branding, and agile project management, SketchItUp combines data-driven insights with creative strategies to enhance brand identity and accelerate growth.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mt-10 '>
          {pricingTiers.map(({ title, monthlyPrice, buttonText, features,pageurl }) => (
            <div 
              key={title} 
              className='p-10 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] flex flex-col items-center text-center'
            >
              <div>
                <Image 
                  src={monthlyPrice} 
                  alt={`${title} image`} 
                  width={100} 
                  height={100} 
                />
              </div>
              <Link href={pageurl}><button className='btn btn-primary w-full mt-[30px] min-w-[150px]'>{buttonText}</button>
              </Link>
              <ul className='flex flex-col gap-5 mt-8'>
                {features.map((feature, index) => (
                  <li key={index} className='text-sm flex items-center gap-4'>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};