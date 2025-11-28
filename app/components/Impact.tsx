import Image from "next/image";
import holdings from "../../assets/home/genomac-holdings.png";
import downloadIcon from "../../assets/icons/download.svg";
import groupIcon from "../../assets/icons/group.svg";
import folderIcon from "../../assets/icons/folder.svg";
import worldIcon from "../../assets/icons/world.svg";

export default function Impact() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-stretch gap-6">
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Our Global Impact</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Transforming Africa's biotechnology landscape through education,
              innovation, and strategic investment across multiple continents.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6">
              <StatCard
                icon={groupIcon}
                title="150,000+"
                subtitle="Life scientists Impacted"
              />

              <StatCard
                icon={folderIcon}
                title="100+"
                subtitle="Countries Impacted"
              />

              <StatCard icon={downloadIcon} title="5" subtitle="Subsidiaries" />

              <StatCard icon={worldIcon} title="5" subtitle="Continents Reached" />

              <StatCard icon={downloadIcon} title="5" subtitle="Subsidiaries" />

              <StatCard icon={worldIcon} title="5" subtitle="Continents Reached" />
            </div>
          </div>

          <div className="md:w-1/2 rounded-lg overflow-hidden relative w-full h-64 md:h-auto">
            <Image
              src={holdings}
              alt="Genomac Holdings"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ icon, title, subtitle }: { icon: any; title: string; subtitle: string }) {
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 sm:p-4 rounded-lg">
      <div className="flex items-center justify-center flex-shrink-0">
        <Image src={icon} alt="icon" width={40} height={40} />
      </div>
      <div>
        <div className="text-lg md:text-xl font-semibold">{title}</div>
        <div className="text-sm md:text-base text-gray-500">{subtitle}</div>
      </div>
    </div>
  );
}
