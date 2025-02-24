'use client';

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import newlogo from '@/assets/images/logo11.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg'; 
import Link from 'next/link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="sticky top-0 z-20 w-full backdrop-blur-lg bg-transparent">
      <div className="py-5 px-6 md:px-20">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <Image src={newlogo} alt="logo" height={50} width={50} />
            <Link href="/">
              <h6 className="text-3xl font-bold">GurOm Dental</h6>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden">
            {menuOpen ? (
              <Image src={CloseIcon} alt="Close Menu" width={24} height={24} />
            ) : (
              <Image src={MenuIcon} alt="Menu" width={24} height={24} />
            )}
          </button>

          {/* Navigation for larger screens */}
          <nav className="hidden md:flex gap-6 text-black items-center font-semibold">
            <a href="/#home">Home</a>
            <a href="/#service">Our Services</a>
            <Link href="/AboutUsPage">About Us</Link>
            <Link href="/ContactUsPage">Contact</Link>
            <Link href="/#">
              <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight">
                Shop Now
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className="md:hidden flex flex-col items-center rounded-lg gap-4 p-5 bg-white shadow-md fixed top-16 right-0 w-[50%] z-10">
          <a href="/#home" onClick={toggleMenu}>Home</a>
          <a href="/#service" onClick={toggleMenu}>Our Services</a>
          <Link href="/AboutUsPage" onClick={toggleMenu}>About Us</Link>
          <Link href="/ContactUsPage" onClick={toggleMenu}>Contact</Link>
          <Link href="/#">
            <button className="bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight w-full">
            Shop Now
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};
