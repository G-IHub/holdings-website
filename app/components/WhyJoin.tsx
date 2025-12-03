"use client";

export default function WhyJoin() {
  const items = [
    {
      title: "Innovation",
      desc: "We encourage creative problem-solving and breakthrough thinking.",
    },
    {
      title: "Excellence",
      desc: "We set high standards and strive for quality in everything we do.",
    },
    {
      title: "Collaboration",
      desc: "We work together across disciplines to achieve our goals.",
    },
    {
      title: "Impact",
      desc: "We're driven by the opportunity to improve lives across Africa.",
    },
  ];

  return (
    <section className="py-12 pt-25 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-4xl max-md:text-3xl mt-10 font-semibold">Why Join Genomac Holdings?</h2>
          <p className="mt-3 text-sm text-gray-600">Be part of a multidisciplinary team that's reshaping biotechnology, healthcare, and innovation across Africa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white rounded-lg p-6 shadow-sm">
              <div className="font-medium text-sm mb-3">{it.title}</div>
              <div className="text-xs text-gray-500">{it.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
