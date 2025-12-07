import React from 'react';

const ContributorsSection = () => {
  const contributors = [
    { name: "Naman", role: "Core Contributor" },
    { name: "Namrata", role: "Core Contributor" },
    { name: "Sahil", role: "Core Contributor" },
    { name: "Surbhi", role: "Core Contributor" }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#D6D2CD]">
          Major Contributors
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {contributors.map((contributor, index) => (
            <div
              key={index}
              className="
            bg-gradient-to-r from-black to-[#371D0F]
            rounded-md p-6
            border-0
            transition-all transform hover:scale-105
            text-center
            min-h-[280px]
            flex flex-col items-center
          "
            >
              {/* Icon at top */}
              <div className="w-20 h-20 bg-black/30 rounded-full flex items-center justify-center">
                <img src="https://avatar.iran.liara.run/public/36" alt="random-avatar" />
              </div>

              {/* Push name & role to bottom */}
              <div className="mt-auto">
                <h4 className="text-lg font-bold mb-1 text-[#D6D2CD]">{contributor.name}</h4>
                <p className="text-gray-300 text-sm text-[#D6D2CD]">{contributor.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContributorsSection;

