'use client';

import { useState } from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Logo from '@/assets/logosaas.png';
import newlogo from '@/assets/Sketchitup-logon.jpg';
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg';
import CloseIcon from '@/assets/close.svg'; // Add a close icon for toggling
import Link from 'next/link';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className='py-5 px-6 md:px-20'>
        <div className='flex items-center justify-between'>
          {/* Logo Section */}
          <div className='flex items-center gap-3'>
            <Image src={newlogo} alt='logo' height={40} width={40} />
            <Link href='/'>
              <h6 className='text-3xl font-bold'>GurOm Dental</h6>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className='md:hidden'>
            {menuOpen ? (
              <CloseIcon className='h-6 w-6' />
            ) : (
              <MenuIcon className='h-6 w-6' />
            )}
          </button>

          {/* Navigation for larger screens */}
          <nav className='hidden md:flex gap-6 text-black items-center font-semibold'>
            <a href='/#home'>Home</a>
            <a href='/#services'>Our Services</a>
            <Link href='/Blog_Page'>Blog</Link>
            <Link href='/AboutUsPage'>About Us</Link>
            <Link href='/GetInTouchPage'>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight'>
                Get in touch
              </button>
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <nav className='md:hidden flex flex-col items-center rounded-lg gap-4 p-5 bg-white shadow-md fixed top-16 right-0 w-[50%] z-10'>
          <a href='/#home' onClick={toggleMenu}>Home</a>
          <a href='/#services' onClick={toggleMenu}>Our Services</a>
          <Link href='/Blog_Page' onClick={toggleMenu}>Blog</Link>
          <Link href='/AboutUsPage' onClick={toggleMenu}>About</Link>
          <Link href='/GetInTouchPage'>
            <button className='bg-black text-white px-4 py-2 rounded-lg font-medium tracking-tight w-full'>
              Get in touch
            </button>
          </Link>
        </nav>
      )}
    </header>
  );
};