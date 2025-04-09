import React from "react";


const Consultation = () => {
  return (
    <div className="w-full bg-blue-100 py-16 flex justify-center">
      <div className="bg-white p-10 shadow-lg rounded-lg w-[80%] flex">
        {/* Left Side - Form */}
        <div className="w-2/3 pr-10">
          <h2 className="text-3xl font-bold text-gray-900">Need a Consultation?</h2>
          <p className="text-gray-600 mt-2">Drop us a line! We are here to answer your questions 24/7.</p>

          <textarea 
            className="w-full border p-3 mt-4 rounded-lg focus:outline-none" 
            rows="3" 
            placeholder="How can we help you?"
          ></textarea>

          <div className="text-sm text-blue-600 mt-2">
            <span className="cursor-pointer">📎 Drag and drop</span> or <span className="underline cursor-pointer">browse</span> to upload your file(s)
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input type="text" placeholder="Full name" className="border p-3 rounded-lg w-full focus:outline-none" />
            <input type="text" placeholder="Company" className="border p-3 rounded-lg w-full focus:outline-none" />
          </div>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <input type="email" placeholder="Work email" className="border p-3 rounded-lg w-full focus:outline-none" />
            <div className="flex border rounded-lg p-3 items-center">
              <span className="mr-2">🇮🇳</span> <input type="text" placeholder="+91 00000 00000" className="focus:outline-none w-full" />
            </div>
          </div>

          <button className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg mt-4 hover:bg-yellow-500 w-full">
            Send
          </button>
        </div>

        {/* Right Side - Contact Options */}
        <div className="w-1/3 border-l pl-10">
          <h3 className="text-lg font-semibold text-gray-900">Get in touch instantly</h3>
          <div className="mt-2 space-y-2 text-blue-600">
            <p className="cursor-pointer">📞 Call us</p>
            <p className="cursor-pointer">📧 Email us</p>
            <p className="cursor-pointer">💬 WhatsApp</p>
            <p className="cursor-pointer">📡 Live chat</p>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">For journalists</h3>
          <p className="text-blue-600 cursor-pointer mt-2">📰 Get unique insights</p>

          <h3 className="text-lg font-semibold text-gray-900 mt-6">Join our team</h3>
          <p className="text-blue-600 cursor-pointer mt-2">📂 Upload your CV</p>

          {/* Illustration */}
          <div className="mt-8 flex justify-end">
          <img src="/assets/Hello_Image.svg" alt="Illustration" className="w-32" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
