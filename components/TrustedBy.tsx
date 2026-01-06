"use client";

const companies = [
  "Vision",
  "Greenish",
  "Glossy",
  "Ebooks",
  "Proline",
  "Flash",
  "Vision",
  "Greenish",
  "Glossy",
  "Ebooks",
  "Proline",
  "Flash",
];

export const TrustedBy = () => {
  return (
    <section className="relative z-10 py-16 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            TRUSTED BY
          </p>
        </div>

        {/* Scrolling Container */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {companies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 px-12 flex items-center"
              >
                <span className="text-gray-400 text-2xl font-semibold whitespace-nowrap">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
