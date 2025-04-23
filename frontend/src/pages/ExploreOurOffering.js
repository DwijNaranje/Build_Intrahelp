import React, { useState } from "react";

const offerings = [
  {
    title: "Software development",
    description:
      "A software development company with 35 years of business excellence, we engineer reliable, scalable, and secure software solutions for any OS, browser, and device.",
    links: [
      "Software consulting",
      "Custom software development",
      "Software development outsourcing",
      "Software product development",
      "Team augmentation",
      "Cloud application development",
      "Legacy software modernization",
      "Post-launch support",
    ],
  },
  {
    title: "IT consulting",
    description:
      "Our IT consulting services help businesses optimize their technology strategies, implement cutting-edge solutions, and ensure seamless digital transformation.",
    links: ["Strategy planning", "IT infrastructure consulting", "Technology modernization", "Enterprise solutions"]
  },
  {
    title: "Application services",
    description:
      "We design, develop, and maintain applications that align with your business needs, ensuring high performance and scalability.",
    links: ["Custom app development", "App modernization", "App integration", "Maintenance & support"]
  },
  {
    title: "Testing & QA",
    description:
      "Our QA and testing services help businesses ensure their software operates flawlessly, reducing risks and improving user satisfaction.",
    links: ["Automated testing", "Manual testing", "Performance testing", "Security testing"]
  },
  {
    title: "Data analytics",
    description:
      "Unlock the power of data with our analytics services. We provide insights that drive business decisions and optimize processes.",
    links: ["Big data analytics", "Business intelligence", "Predictive analytics", "Data visualization"]
  },
  {
    title: "Help desk services",
    description:
      "We provide professional help desk support to ensure seamless IT operations and improve user experience.",
    links: ["Technical support", "Remote assistance", "24/7 monitoring", "Issue resolution"]
  },
  {
    title: "Infrastructure services",
    description:
      "Enhance IT performance with our infrastructure services, covering cloud solutions, network management, and security enhancements.",
    links: ["Cloud solutions", "Network management", "Security enhancements", "Disaster recovery"]
  },
  {
    title: "Cybersecurity services",
    description:
      "Protect your business from cyber threats with our comprehensive cybersecurity solutions.",
    links: ["Threat detection", "Risk assessment", "Compliance management", "Security implementation"]
  },
];

const ExploreOurOffering = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full py-16 px-4 bg-white text-center">
      <h2 className="text-3xl md:text-5xl font-bold text-black mb-8">Explore Our Offering</h2>

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Left side navigation */}
        <div className="md:w-1/4 w-full bg-blue-100 p-4 rounded-lg shadow-sm">
          {offerings.map((item, index) => (
            <div
              key={index}
              className={`p-3 font-semibold cursor-pointer rounded transition ${
                index === activeIndex
                  ? "bg-blue-600 text-white"
                  : "text-blue-600 hover:bg-blue-200"
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.title}
            </div>
          ))}
        </div>

        {/* Right side content */}
        <div className="md:w-3/4 w-full p-4 text-left bg-gray-50 rounded-lg shadow-sm">
          <h3 className="text-2xl font-bold text-gray-800">{offerings[activeIndex].title}</h3>
          <p className="mt-4 text-gray-700">{offerings[activeIndex].description}</p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-blue-600">
            {offerings[activeIndex].links.map((link, index) => (
              <button
                key={index}
                onClick={() => console.log(`${link} clicked`)}
                className="text-left hover:underline"
              >
                ▪ {link}
              </button>
            ))}
          </div>

          <button
            onClick={() => console.log("Check details clicked")}
            className="text-blue-600 font-semibold mt-6 inline-block hover:underline"
          >
            Check details →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExploreOurOffering;
