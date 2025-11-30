export default function AboutJourney() {
  const items = [
    {
      year: "2022",
      title: "Foundation",
      body: "Founded with one laptop; began training scientists globally in genomics and bioinformatics.",
      side: "left",
    },
    {
      year: "2023",
      title: "Subsidiary Framework",
      body: "Consolidated subsidiary structure and international expansion of Genomac Institute.",
      side: "right",
    },
    {
      year: "2024",
      title: "Flagship Initiatives",
      body: "Formalized Omicsboard, AMRwatch Africa, and Ideaspora as flagship initiatives.",
      side: "left",
    },
    {
      year: "2025",
      title: "Geographic Expansion",
      body: "Lagos branch rollout for precision medicine; Morocco node planning for North Africa.",
      side: "right",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Journey</h2>
          <p className="max-w-2xl mx-auto text-gray-600 mt-3">Key milestones in building Africa's biotechnology future</p>
        </div>
        <div className="relative">
          {/* center line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-pink-200 z-0"></div>

          <div className="flex flex-col">
            {items.map((it, idx) => {
              const isLeft = it.side === "left";
              return (
                <div key={idx} className="relative py-8">
                  {/* marker on center line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-10">
                    <span className="inline-block w-3 h-3 rounded-full bg-pink-500 ring-4 ring-white shadow-md"></span>
                  </div>

                  <div className="md:flex items-center justify-between">
                    {isLeft ? (
                      <>
                        <div className="w-full md:w-5/12">
                          <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-sm text-pink-600 font-semibold">{it.year}</div>
                            </div>
                            <h4 className="font-semibold mb-2">{it.title}</h4>
                            <p className="text-sm text-gray-600">{it.body}</p>
                          </div>
                        </div>

                        <div className="hidden md:block md:w-5/12" />
                      </>
                    ) : (
                      <>
                        <div className="hidden md:block md:w-5/12" />

                        <div className="w-full md:w-5/12 md:ml-0 md:text-left">
                          <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 shadow-sm">
                            <div className="flex items-start justify-between mb-2">
                              <div className="text-sm text-pink-600 font-semibold">{it.year}</div>
                            </div>
                            <h4 className="font-semibold mb-2">{it.title}</h4>
                            <p className="text-sm text-gray-600">{it.body}</p>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
