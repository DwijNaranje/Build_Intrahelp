import React from "react";

const IntrahelpNumbers = () => {
  const stats = [
    { value: "100%", text: "Delivered on time", icon: "⏳" },
    { value: "400+", text: "Projects", icon: "📊" },
    { value: "50+", text: "Developers", icon: "👨‍💻" },
  ];

  return (
    <div className="relative w-full py-48 text-white">
      {/* Background Section */}
      <div 
        className="absolute inset-0 bg-cover bg-center filter blur-xl" 
        style={{ backgroundImage: "url('/assets/image.png')" }} 
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-8">
        <h2 className="text-5xl md:text-6xl font-bold mb-32">
          <span className="text-blue-600">INTRAHELP</span> in numbers
        </h2>

        {/* Stats Section */}
        <div className="flex flex-wrap justify-center gap-40">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-8">
              <span className="text-8xl">{stat.icon}</span>
              <h3 className="text-7xl font-bold">{stat.value}</h3>
              <p className="text-2xl">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IntrahelpNumbers;
