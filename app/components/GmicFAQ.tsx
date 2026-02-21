import React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

const FAQ = () => {
  return (
    <div className="md:py-16 p-10 md:px-20">
      <div className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div className="space-y-4">
          <h2 className="font-extrabold text-2xl md:text-4xl tracking-tight text-[#021C3A]">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-start text-sm md:text-base">
            Can&apos;t able to find answers you&apos;re looking for? <br />
            Reach out to our{" "}
            <a href="" className="text-blue-500 cursor-pointer">customer support</a> team.
          </p>
        </div>

        {/* FAQs */}
        <div className="w-full">
          <div className="mx-auto w-full max-w-lg divide-y divide-gray-300 rounded-xl">
            <Disclosure as="div" className="p-6" defaultOpen={false}>
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="font-medium">Is the competition paid?</span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  Yes. Registration requires a ₦5,000 fee to reserve your slot.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  What does the registration fee cover?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  It covers your competition slot (Competition ID), eligibility for rewards, access to evaluation, and certificate eligibility.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  Who can apply?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  GMIC is open to graduate and undergraduate students, early-career researchers, clinicians, lab scientists, public health professionals, and data-curious life scientists.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  Can I submit as a team?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  (Option A: if team is allowed) Yes. Team submissions are allowed, but one person must be designated as the lead author.(Option B: if not allowed) No. This competition is strictly for individual submissions.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  Can I submit more than one article?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  Participants may submit only one entry to ensure fairness in evaluation. (Adjust if you want multiple allowed.)
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  How do I submit my article?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  Submission will be done online. Full submission instructions are available after confirmed registration.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  Will everyone receive a certificate?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  Yes. All participants who successfully register and submit before the deadline will receive a Certificate of Participation.
                </DisclosurePanel>
              </div>
            </Disclosure>
            <Disclosure as="div" className="p-6">
              <DisclosureButton className="group flex w-full items-center justify-between cursor-pointer">
                <span className="text-sm/6 font-medium">
                  When will winners be announced?
                </span>
                <MdKeyboardArrowDown className="size-5 group-data-open:rotate-180" />
              </DisclosureButton>
              <div className="overflow-hidden">
                <DisclosurePanel
                  transition
                  className="origin-top transition duration-300 ease-out data-closed:-translate-y-2 data-closed:opacity-0 mt-2 text-sm/5 text-gray-500"
                >
                  Winners will be announced after the review period. The official date will be communicated via email and Genomac platforms.
                </DisclosurePanel>
              </div>
            </Disclosure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;