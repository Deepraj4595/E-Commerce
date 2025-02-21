"use client"

import ArrowIcon from "@/assets/arrow-right.svg";
import cogImage from "@/assets/cog.png" ;
import cylinderImage from "@/assets/cylinder.png";
import noodleImage from"@/assets/noodle.png";
import {motion, useScroll} from 'framer-motion';
import Link from 'next/link';


import Image from "next/image";
import { useRef } from "react";

export const Hero = () => {
  const heroRef = useRef(null);
  const { scrollYProgress} = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  return (
    <section 
      ref={heroRef} 
      className="pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_90%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex items-center">
          <div className="md:w-[478px]">
            <div className="tag"> 
              Empowered By AI
            </div>
            <h1 className="text-5xl md:text-7xl py-2 font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
              Think Big, We make IT, possible! 
            </h1>
            <p className="text-xl text-[#010D3E] tracking-tight mt-6">
            From innovative web solutions to immersive AR/VR experiences and Startup Consultancy, we help businesses thrive in the digital age. 
            </p>
            <div className="flex gap-1 items-center mt-[30px]">
              <a href="#services" ><button className="btn btn-primary" > Our Services </button></a>
              <button className="btn btn-text gap-1">
              <Link href="/AboutUsPage"><span>Learn more</span></Link>
                
                <ArrowIcon className="h-5 w-5"></ArrowIcon>
              </button>
            </div>
          </div>
          <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1 relative">
            <motion.img 
              src={cogImage.src} 
              alt="Cog Image" 
              className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6  lg:left-0"
              animate={{
                translateY:[-30,30]
              }}
              transition={{
                repeat: Infinity,
                repeatType:"mirror",
                duration: 3,
                ease: "easeInOut",
              }}
              ></motion.img>
            {/* <Image 
            src={cylinderImage}
            alt="cylinder image"
            width={220}
            height={220}
            className="hidden md:block -top-8 -left-32 md:absolute"
            ></Image> */}
            {/* <Image
            src={noodleImage}
            width={220}
            alt="noodleImage"
            className=" hidden lg:block absolute top-[524px] left-[440px] rotate-[30deg]"
            ></Image> */}
          </div>
        </div>
      </div>
    </section>
  );
};
