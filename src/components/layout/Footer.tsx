import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// import Twitter from '@/assets/icons/x-fill.svg';
// import Instagram from '@/assets/icons/instagram-fill.svg';
// import YouTube from '@/assets/icons/youtube-fill.svg';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = {
    product: {
      title: 'Product',
      links: [
        { name: 'Features', href: '/' },
        { name: 'Integration', href: '/' },
        { name: 'Updates', href: '/' },
        { name: 'FAQ', href: '/' },
        { name: 'Pricing', href: '/' }
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About', href: '/' },
        { name: 'Blog', href: '/' },
        { name: 'Careers', href: 'https://app.dover.com/jobs/cognifyanalytics' },
        { name: 'Manifesto', href: '/' },
        { name: 'Press', href: '/' },
        { name: 'Contract', href: '/' }
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Examples', href: '/' },
        { name: 'Community', href: '/' },
        { name: 'Guides', href: '/' },
        { name: 'Docs', href: '/' },
        { name: 'Press', href: '/' }
      ],
    },
    legal: {
      title: 'Legal',
      links: [
        { name: 'Privacy', href: '/' },
        { name: 'Terms', href: '/' },
        { name: 'Security', href: '/' }
      ],
    }
  };

  const socialLinks = [
    {
      name: 'Twitter',
      href: '',
      // icon: (
      //   <Twitter className="w-5 h-5 text-white" />
      // )
    },
    {
      name: 'Instagram',
      href: '',
      // icon: (
      //   <Instagram className="w-5 h-5 text-white" />
      // )
    },
    {
      name: 'YouTube',
      href: '',
      // icon: (
      //   <YouTube className="w-5 h-5 text-white" />
      // )
    }
  ];

  return (
    <footer className='w-full px-[80px] py-[40px] bg-black border-t-[1px] border-t-white/15'>
      <div className='w-full h-full flex flex-col desktop:flex-row gap-[30px] justify-between items-center desktop:items-stretch'>
        <div className='w-full flex flex-row gap-[30px] desktop:flex-col items-start justify-between'>
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
              className='w-[140px] h-auto'
            />
          </Link>

          {/* Social links */}
          <div className='flex gap-[10px] justify-between'>
            {/* {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className=''
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <YouTube className="w-5 h-5 text-white" />
                  </Link>
                ))} */}
            <Image
              src='/images/icons/x-twitter.png'
              alt='x logo'
              width={160}
              height={48}
              priority
              className='w-[24px] h-auto'
            />
            <Image
              src='/images/icons/instagram.png'
              alt='instagram logo'
              width={160}
              height={48}
              priority
              className='w-[24px] h-auto'
            />
            <Image
              src='/images/icons/youtube.png'
              alt='youtube logo'
              width={160}
              height={48}
              priority
              className='w-[24px] h-auto'
            />
          </div>

        </div>
        <div className='w-full flex flex-row flex-wrap justify-between desktop:justify-evenly items-start gap-[30px] desktop:gap-[80px]'>
          {/* Navigation sections */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key} className='flex flex-col justify-center items-start gap-[20px]'>
              <h3 className='text-white font-neue-regrade font-semibold text-[20px] leading-none'>
                {section.title}
              </h3>
              <ul role='list' className='hidden desktop:flex flex-col justify-center items-start gap-[20px]'>
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className='text-white/50 font-montserrat font-normal text-[16px] leading-none'
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
