import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/home/logo.png";
import CopyrightYear from "./CopyrightYear";

export default function Footer() {
  return (
    <footer className="bg-[#1a0716] text-gray-200">
      <div className="container mx-auto max-w-6xl py-17 px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
                <Image src={logo} alt="Genomac" className="object-contain" />
            </div>
            <p className="text-sm text-gray-300">
              Building Africa's future in biotechnology, healthcare, and technology through strategic
              innovation and development.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/about-us" className="text-gray-300 hover:text-white">About Holdings</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white">Portfolio</Link></li>
              <li><Link href="/governance" className="text-gray-300 hover:text-white">Governance & ESG</Link></li>
              <li><Link href="/investor-relations" className="text-gray-300 hover:text-white">Investor Relation</Link></li>
              <li><Link href="/gmic" className="text-gray-300 hover:text-white">GMIC</Link></li>
              <li><Link href="/career" className="text-gray-300 hover:text-white">Careers</Link></li>
              <li><Link href="https://tour.genomacholdings.com" className="text-gray-300 hover:text-white">Tour</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Portfolio</h4>
            <ul className="text-sm space-y-2">
              <li><Link href="/portfolio#genomac-institute" className="text-gray-300 hover:text-white">Genomac Institute</Link></li>
              <li><Link href="/portfolio#gsc" className="text-gray-300 hover:text-white">GSC</Link></li>
              <li><Link href="/portfolio#g-ihub" className="text-gray-300 hover:text-white">G-iHub</Link></li>
              <li><Link href="/portfolio#g-natures" className="text-gray-300 hover:text-white">G-NATURES</Link></li>
              <li><Link href="/portfolio#genomac-labs" className="text-gray-300 hover:text-white">Genomac Labs</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-3">Contact</h4>
            <ul className="text-sm space-y-2 text-gray-300">
              <li>HQ: Ogbomoso, Oyo State, Nigeria</li>
              <li>Branch: Lagos, Nigeria</li>
              <li>
                <a href="mailto:info@genomacholdings.com" className="hover:text-white">info@genomacholdings.com</a>
              </li>
              <li>+234-XXX-XXX-XXXX</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
          <div>© <CopyrightYear /> Genomac Holdings. All rights reserved.</div>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="/" className="hover:text-white">Privacy Policy</Link>
            <Link href="/" className="hover:text-white">Terms of Service</Link>
            <Link href="/" className="hover:text-white">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
