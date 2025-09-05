'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import Button from '@/components/ui/Button';

import styles from '@/components/style.module.css';
import ContactModal from '@/components/ui/ContactModal';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navigation = [
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/' },
    { name: 'Industries', href: '/' },
    { name: 'Resources', href: '/' },
    { name: 'Careers', href: 'https://app.dover.com/jobs/cognifyanalytics' },
  ];

  const isActiveLink = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(href);
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={`w-full fixed top-0 px-[24px] py-[24px] tablet:px-[80px] desktop:px-[100px] desktop:py-[24px] z-50 transition-all duration-300`}>
      <nav className='w-full flex flex-row items-center justify-between bg-white/5 rounded-[16px] px-[12px] py-[22px] desktop:px-[100px] desktop:py-[24px] backdrop-blur-lg'>
        {/* Logo */}
        <Link
          href='/'
          className='focus:outline-none'
          aria-label='Cogniify - Home'
        >
          <Image
            src='/images/logo-white.png'
            alt='Cogniify Logo'
            width={160}
            height={48}
            priority
            className='w-120px h-auto'
          />
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden desktop:flex items-center'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`${styles.nav_link} ${isActiveLink(item.href) ? 'nav-link-active' : ''
                }`}
              aria-current={isActiveLink(item.href) ? 'page' : undefined}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <div className='hidden desktop:block'>
          <Button onClick={() => setIsModalOpen(true)} variant='secondary'>Let&apos;s Talk Impact</Button>
        </div>

        {/* Mobile menu button */}
        <button
          type='button'
          className='desktop:hidden p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls='mobile-menu'
          aria-label='Toggle navigation menu'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className={`h-6 w-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-45' : ''
              }`}
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            aria-hidden='true'
          >
            {isMenuOpen ? (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
            ) : (
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="desktop:hidden w-full flex flex-row items-center justify-between bg-white/5 rounded-[16px] mt-[5px] px-[12px] py-[22px] backdrop-blur-lg">
            <div className='w-full flex flex-col gap-[10px] items-center justify-center'>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`w-full block px-[12px] py-[18px] font-montserrat font-normal transition-colors rounded-[16px] ${isActiveLink(item.href)
                    ? 'text-white'
                    : 'text-white/50 hover:text-white hover:bg-symbol-purple hover:text-white'
                    }`}
                  aria-current={isActiveLink(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
        </div>)}
        <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
