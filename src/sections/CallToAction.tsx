import starImage from '@/assets/star.png'
import springimage from '@/assets/spring.png'
import Image from 'next/image';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="bg-white py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">Get in touch Today</h2>
          <p className="section-description mt-5"> 
            Celebrate the joy of accomplishment of the success we will create together with your support
          </p>
          <Image src={starImage} alt='Star Image' width={300} className=' absolute -left-[350px] -top-[137px]'></Image>
        </div>
        
        <div className="flex gap-2 mt-10 justify-center">
          

        </div>
      </div>

      {/* Company Details and Location */}
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
    </section>
  );
};
