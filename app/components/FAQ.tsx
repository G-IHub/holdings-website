"use client";
import { useState } from "react";

const FAQ_ITEMS = [
  {
    q: "How can I invest in Genomac Holdings?",
    a: "Please contact our Investor Relations desk at investors@genomacholdings.com to discuss partnership and investment opportunities.",
  },
  {
    q: "Do you offer internship programs?",
    a: "Yes! We offer internships across our subsidiaries, particularly through Genomac Institute. Visit our Careers page or contact careers@genomacholdings.com for current opportunities.",
  },
  {
    q: "How can healthcare institutions partner with you?",
    a: "We welcome partnerships with hospitals, clinics, and healthcare organizations. Please reach out via our contact form or email info@genomacholdings.com with details about your institution.",
  },
];

export default function FAQ() {
  const [openStates, setOpenStates] = useState<boolean[]>(() => FAQ_ITEMS.map(() => true));

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Frequently Asked Questions</h2>
            <p className="text-sm text-gray-600">Can’t able to find answers you’re looking for? Reach out to our <a href="mailto:info@genomacholdings.com" className="text-purple-600 hover:underline">customer support</a> team.</p>
          </div>

          <div>
            <div className="space-y-4">
              {FAQ_ITEMS.map((item, idx) => {
                const open = !!openStates[idx];
                return (
                  <div key={item.q} className="bg-white rounded-md shadow-sm">
                    <button
                      aria-expanded={open}
                      onClick={() =>
                        setOpenStates((prev) => {
                          const next = [...prev];
                          next[idx] = !next[idx];
                          return next;
                        })
                      }
                      className="w-full flex items-center justify-between px-6 py-4 text-left"
                    >
                      <span className="font-medium text-sm">{item.q}</span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${open ? "rotate-180" : "rotate-0"}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                      </svg>
                    </button>

                    {open && (
                      <div className="px-6 pb-4 text-sm text-gray-600 border-t border-gray-100">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
