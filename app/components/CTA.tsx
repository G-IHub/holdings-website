"use client";
import Image from "next/image";
import users from "../../assets/home/users.png";
import arrow from "../../assets/icons/arrow.svg";

export default function CTA() {
  return (
    <section className="py-12 bg-purple-600 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Ready to Build the Future?</h2>
        <p className="max-w-3xl mx-auto text-sm md:text-base text-white/90 mb-6">
          Join us in advancing biotechnology, education, and healthcare solutions for Africa and the world through strategic collaboration
          and innovation — driving lasting impact and building a healthier, more prosperous Africa together.
        </p>

        <div className="flex items-center justify-center gap-4 mb-6 flex-col sm:flex-row">
              <Image src={users} alt="users" className="object-cover" />
          <div className="text-sm text-white/80">Trusted by 50k+ members</div>
        </div>

        <a href="/contact" className="inline-flex items-center gap-3 bg-white text-purple-600 px-5 py-2 rounded-full shadow-md">
          <span>Contact Us</span>
          <span className="w-8 h-8 bg-purple-50 rounded-full flex items-center justify-center">
            <Image src={arrow} alt="arrow" width={35} height={35} />
          </span>
        </a>
      </div>
    </section>
  );
}
