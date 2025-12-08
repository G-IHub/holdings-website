import Image from "next/image";
import contentImg from "../../assets/investor-rel/investment.png";

export default function InvestorHeader() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 pt-15">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold mb-4">Investor Relations</h1>
            <p className="text-gray-700 mb-6">
              Genomac Holdings operates on a strategic equity and holdings model that creates
              sustainable value through diversified investments in high-growth sectors of
              biotechnology, healthcare, and innovation.
            </p>

            <p className="text-gray-700 mb-6">
              Our approach combines direct equity ownership in subsidiaries with active
              governance, shared service provision, and strategic guidance to maximize
              returns while driving social impact across Africa.
            </p>

            <hr className="border-t border-gray-200 my-6" />

            <div className="mt-4 border-l-4 border-pink-200 bg-pink-50 px-4 py-3 rounded">
              <p className="text-sm text-gray-700 italic">"Long-term value creation through strategic innovation, operational excellence, and sustainable growth in Africa's biotechnology ecosystem."</p>
            </div>
          </div>

          <div className="flex justify-center max-md:justify-end">
            <div className="w-full max-md:w-96 max-h-120 max-md:h-96 rounded-lg overflow-hidden">
              <Image src={contentImg} alt="Investor visual" width={1000} height={1000} className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
