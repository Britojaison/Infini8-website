"use client";

const companies = [
  "Brainleap",
  "Synapse",
  "MMwear",
  "Zenvista",
  "Milky Mist Diary",
  "Gulf Radiant",
  "Vs holding",
];

export const TrustedBy = () => {
  return (
    <section className="relative z-10 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 glass-panel py-12 px-12 rounded-[2.5rem] overflow-hidden border-white/5 bg-white/[0.01]">
          <div className="flex-shrink-0 text-center md:text-left">
            <p className="text-primary/60 font-mono text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">
              Global Infrastructure
            </p>
            <h4 className="text-white font-display font-medium text-2xl tracking-tight">Active Nodes</h4>
          </div>

          <div className="flex-1 w-full relative overflow-hidden flex items-center">
            {/* Gradient masks for smooth fade */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#030305] to-transparent z-10 opacity-80" />
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#030305] to-transparent z-10 opacity-80" />

            <div className="flex animate-scroll whitespace-nowrap">
              {companies.concat(companies).map((company, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 px-16 flex items-center"
                >
                  <span className="text-white/20 text-xl md:text-2xl font-display font-light hover:text-primary transition-colors duration-700 cursor-default tracking-wider">
                    {company}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
