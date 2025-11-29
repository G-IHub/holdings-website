"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/home/logo.png";
import arrow from "../../assets/icons/arrow.svg";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) => {
    const isActive = pathname === path;
    return `font-medium ${isActive ? 'text-purple-600 underline decoration-purple-600 decoration-2 underline-offset-4' : 'text-black hover:underline'}`;
  };

  return (
    <nav className="fixed inset-x-0 top-4 z-50">
      <div className="container mx-auto px-4">
        <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-full px-4 py-2 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-3">
                <Image src={logo} alt="Genomac" width={100} height={40} className="object-cover" />
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <Link href="/" className={linkClass('/')}>Home</Link>
            <Link href="/about-us" className={linkClass('/about-us')}>About Us</Link>
            <Link href="/investor-relations" className={linkClass('/investor-relations')}>Investor Relations</Link>
            <Link href="/esg" className={linkClass('/esg')}>ESG</Link>
            <Link href="/career" className={linkClass('/career')}>Career</Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="/contact" className="inline-flex items-center gap-3 bg-purple-500 text-white px-4 py-2 rounded-full shadow-sm hover:opacity-95">
              <span>Contact Us</span>
              <span className="flex items-center justify-center">
                <Image src={arrow} alt="arrow" width={25} height={25} />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
