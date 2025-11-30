import Image from "next/image";
import dollar from "../../assets/icons/dollar.svg";
import pie from "../../assets/icons/pie-chart.svg";
import growth from "../../assets/icons/growth-arrow.svg";
import handshake from "../../assets/icons/handshake.svg";

const items = [
  {
    icon: dollar,
    title: "Management Fees",
    body: "Strategic oversight and governance services provided to portfolio companies.",
  },
  {
    icon: pie,
    title: "Shared Service Allocation",
    body: "Finance, HR, legal, IT, and marketing support distributed across subsidiaries.",
  },
  {
    icon: growth,
    title: "Dividends & Equity Returns",
    body: "Returns from subsidiary growth and profitability.",
  },
  {
    icon: handshake,
    title: "Growth & Expansion",
    body: "Revenue from licensing, IP, and product commercialization.",
  },
];

export default function RevenueModel() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Revenue Model</h2>
          <p className="text-gray-600 mt-2">Multiple revenue streams create a diversified and sustainable financial foundation.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm">
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-center justify-center">
                  <Image src={it.icon} alt={it.title} width={35} height={35} />
                </div>

                <div>
                  <h4 className="font-semibold">{it.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{it.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
