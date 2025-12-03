"use client";
import Image from "next/image";
import buildingIcon from "../../assets/icons/buildings.svg";
import peopleIcon from "../../assets/icons/people.svg";

export default function Contact() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4 pt-20">
        {/* Top contact cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z"></path></svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Email</h4>
            <div className="text-sm text-purple-600">info@genomacholdings.com</div>
            <p className="text-xs text-gray-400 mt-2">General inquiries and information</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a2 2 0 011.89 1.35l.7 2.1a2 2 0 01-.45 2.04L8.91 10.91a16 16 0 006.18 6.18l1.41-1.41a2 2 0 012.04-.45l2.1.7A2 2 0 0121 17.72V21a2 2 0 01-2 2A19 19 0 013 5z"></path></svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Phone</h4>
            <div className="text-sm text-purple-600">+234-XXX-XXX-XXXX</div>
            <p className="text-xs text-gray-400 mt-2">Monday to Friday, 9am to 5pm WAT</p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-sm flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12v6M8 6h8M6 12h.01M6 18h.01M6 6h.01"></path></svg>
            </div>
            <h4 className="font-semibold text-sm mb-1">Investor Relations</h4>
            <div className="text-sm text-purple-600">investors@genomacholdings.com</div>
            <p className="text-xs text-gray-400 mt-2">For partnership and investment inquiries</p>
          </div>
        </div>

        {/* Main two-column area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Contact form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Send Us a Message</h3>

            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-gray-600">Full Name *</label>
                  <input className="mt-1 w-full bg-gray-100 rounded-md px-3 py-2 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Your name" />
                </div>

                <div>
                  <label className="text-xs text-gray-600">Organization</label>
                  <input className="mt-1 w-full bg-gray-100 rounded-md px-3 py-2 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Your organization" />
                </div>
              </div>

              <div>
                <label className="text-xs text-gray-600">Email Address *</label>
                <input type="email" className="mt-1 w-full bg-gray-100 rounded-md px-3 py-2 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="your.email@example.com" />
              </div>

              <div>
                <label className="text-xs text-gray-600">Reason for Contact *</label>
                <select className="mt-1 w-full bg-gray-100 rounded-md px-3 py-2 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200">
                  <option>Select a reason</option>
                  <option>Partnership</option>
                  <option>Investor Relations</option>
                  <option>Media</option>
                </select>
              </div>

              <div>
                <label className="text-xs text-gray-600">Message *</label>
                <textarea rows={5} className="mt-1 w-full bg-gray-100 rounded-md px-3 py-2 text-sm border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-200" placeholder="Tell us more about your inquiry..."></textarea>
              </div>

              <div>
                <button type="button" className="inline-flex items-center gap-3 bg-purple-600 text-white px-5 py-2 rounded-md shadow-md">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>

          {/* Right: Locations and Business hours */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="font-semibold mb-4">Our Locations</h4>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Image src={buildingIcon} alt="headquarters" width={36} height={36} />
                  </div>
                  <div>
                    <div className="font-semibold">Headquarters</div>
                    <div className="text-sm text-purple-600">Primary Office</div>
                    <div className="text-xs text-gray-400">Ogbomoso, Oyo State, Nigeria</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <Image src={peopleIcon} alt="lagos branch" width={36} height={36} />
                  </div>
                  <div>
                    <div className="font-semibold">Lagos Branch</div>
                    <div className="text-sm text-pink-500">Precision Medicine Center</div>
                    <div className="text-xs text-gray-400">Lagos, Nigeria</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#180617] text-white rounded-xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-3">
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.657 0 3-1.567 3-3.5S13.657 1 12 1 9 2.567 9 4.5 10.343 8 12 8zM21 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"></path></svg>
                <div className="font-semibold">Business Hours</div>
              </div>

              <div className="text-sm text-white/80">
                <div>Monday - Friday: 9:00 AM - 5:00 PM WAT</div>
                <div>Saturday: By Appointment</div>
                <div>Sunday: Closed</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}
