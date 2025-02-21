import starImage from '@/assets/star.png'
import springimage from '@/assets/spring.png'
import Image from 'next/image';
import Link from 'next/link';

export const CallToAction = () => {
  return (
    <section className="bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className='section-heading relative'>
          <h2 className="section-title">Get in touch Today</h2>
          <p className="section-description mt-5"> 
            Celebrate the joy of accomplishment of the success we will create together with your support
          </p>
          <Image src={starImage} alt='Star Image' width={300} className=' absolute -left-[350px] -top-[137px]'></Image>
        </div>
        
        <div className="flex gap-2 mt-10 justify-center">
        <Link href="/GetInTouchPage"><button className="btn btn-primary">Learn more</button></Link>
          

        </div>
      </div>
    </section>
  );
};
