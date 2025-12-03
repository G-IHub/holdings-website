"use client";
import Link from "next/link";

export default function DepartmentContacts() {
  const contacts = [
    {
      title: "Investor Relations",
      email: "investors@genomacholdings.com",
      note: "For partnerships and investments",
    },
    {
      title: "Press & Media",
      email: "press@genomacholdings.com",
      note: "For media inquiries",
    },
    {
      title: "Careers",
      email: "careers@genomacholdings.com",
      note: "For job applications",
    },
    {
      title: "General Inquiries",
      email: "info@genomacholdings.com",
      note: "For all other questions",
    },
  ];

  return (
    <section className="mt-12 py-10">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-2 text-sm text-gray-500">Department-Specific Contacts</div>
        <h3 className="text-xl md:text-2xl font-semibold mb-6">Reach out to the right team for your specific needs</h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contacts.map((c) => (
            <div key={c.email} className="bg-white rounded-lg p-6 shadow-sm text-left">
              <div className="text-sm font-medium mb-2">{c.title}</div>
              <div className="mb-2">
                <Link href={`mailto:${c.email}`} className="text-purple-600 text-sm hover:underline">
                  {c.email}
                </Link>
              </div>
              <div className="text-xs text-gray-400">{c.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
