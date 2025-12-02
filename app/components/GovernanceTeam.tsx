import Image from "next/image";
import { team as TEAM } from "../constants/team";

import olawale from "../../assets/team/olawale.png";
import oluwaseun from "../../assets/team/oluwaseun.png";
import abraham from "../../assets/team/abraham.png";
import gnature from "../../assets/team/gnature.png";
import blessing from "../../assets/team/blessing.png";
import boluwatife from "../../assets/team/boluwatife.png";
import victor from "../../assets/team/victor.png";
import yetunde from "../../assets/team/yetunde.png";
import missb from "../../assets/team/MissB.png";
import jd from "../../assets/team/JD.png";
import contentBg from "../../assets/investor-rel/Content.png";

const IMAGES = [olawale, oluwaseun, abraham, gnature, blessing, boluwatife, victor, yetunde, missb, jd];

export default function GovernanceTeam() {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto pt-25 px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold">Leadership Structure</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-2">Our leadership team brings together expertise from genomics, biotechnology, business, and innovation to drive strategic growth.</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {TEAM.map((member, idx) => {
            const img = IMAGES[idx];
            return (
              <div key={member.id} className="flex flex-col items-center text-center">
                <div
                  className="shadow-md"
                  style={{
                    backgroundImage: `url(${contentBg.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="w-44 h-44 md:w-48 md:h-48 rounded-xl overflow-hidden">
                    <Image src={img} alt={member.name} width={600} height={600} className="object-cover w-full h-full" />
                  </div>
                </div>

                <div className="mt-3">
                  <div className="text-base md:text-lg font-semibold">{member.role}</div>
                  <div className="text-sm md:text-base text-gray-500 mt-1">{member.name}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
