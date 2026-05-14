"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/home/logo.png";
import arrow from "../../assets/icons/arrow.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-medium ${isActive ? 'text-purple-600 underline decoration-purple-600 decoration-2 underline-offset-4' : 'text-black hover:underline'}`;
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/70 border border-white/10 rounded-full px-4 py-2 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="Genomac" width={100} height={40} className="object-cover" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about-us" className={linkClass('/about-us')}>About Us</Link>
            <Link href="/portfolio" className={linkClass('/portfolio')}>Portfolio</Link>
            <Link href="/research-winners" className={linkClass('/research-winners')}>Research Winners</Link>
            <Link href="/investor-relations" className={linkClass('/investor-relations')}>Investor Relations</Link>
            <Link href="/governance" className={linkClass('/governance')}>Governance</Link>
            {/* <Link href="/gmic" className={linkClass('/gmic')}>GMIC</Link> */}
          </div>
          <div className="flex items-center gap-3">
            {/* desktop contact button */}
            <div className="hidden md:block">
              <Link href="/contact" className="inline-flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-full shadow-sm hover:opacity-95">
                <span>Contact Us</span>
                <span className="flex items-center justify-center">
                  <Image src={arrow} alt="arrow" width={25} height={25} />
                </span>
              </Link>
            </div>

            {/* mobile menu button */}
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md bg-white/10"
            >
              <span className="sr-only">Open menu</span>
              <svg className="w-6 h-6 text-white" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile modal */}
      {open && (
        <div className="fixed inset-0 z-60">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="absolute inset-0 flex items-start justify-end">
            <div className="w-3/4 max-w-xs bg-white/95 backdrop-blur-md h-full p-6 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <Link href="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <Image src={logo} alt="Genomac" width={90} height={36} className="object-contain" />
                </Link>
                <button aria-label="Close menu" onClick={() => setOpen(false)} className="p-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col gap-4">
                <Link href="/" onClick={() => setOpen(false)} className={linkClass('/') + ' text-lg'}>Home</Link>
                <Link href="/about-us" onClick={() => setOpen(false)} className={linkClass('/about-us') + ' text-lg'}>About Us</Link>
                <Link href="/portfolio" onClick={() => setOpen(false)} className={linkClass('/portfolio') + ' text-lg'}>Portfolio</Link>
                <Link href="/research-winners" onClick={() => setOpen(false)} className={linkClass('/research-winners') + ' text-lg'}>Research Winners</Link>
                <Link href="/investor-relations" onClick={() => setOpen(false)} className={linkClass('/investor-relations') + ' text-lg'}>Investor Relations</Link>
                <Link href="/governance" onClick={() => setOpen(false)} className={linkClass('/governance') + ' text-lg'}>Governance</Link>
                {/* <Link href="/gmic" onClick={() => setOpen(false)} className={linkClass('/gmic') + ' text-lg'}>GMIC</Link> */}

                <Link href="/contact" onClick={() => setOpen(false)} className="mt-4 inline-flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-full w-max">
                  <span>Contact Us</span>
                  <span className="flex items-center justify-center">
                    <Image src={arrow} alt="arrow" width={18} height={18} />
                  </span>
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
