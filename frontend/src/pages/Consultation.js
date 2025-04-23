import React, { useState } from "react";
import axios from "axios";

const Consultation = () => {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://localhost:5000/consultation", formData);
      setSubmitted(true);
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="w-full bg-blue-100 py-16 flex justify-center px-4">
      <div className="bg-white p-6 md:p-10 shadow-lg rounded-lg w-full max-w-6xl flex flex-col md:flex-row">
        {/* Left Side - Form */}
        <div className="md:w-2/3 w-full md:pr-10">
          {submitted ? (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-green-600">
                Thank you for reaching out!
              </h2>
              <p className="text-gray-600 mt-2">
                We’ll get back to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Need a Consultation?
              </h2>
              <p className="text-gray-600 mt-2">
                Drop us a line! We are here to answer your questions 24/7.
              </p>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border p-3 mt-4 rounded-lg focus:outline-none"
                rows="3"
                placeholder="How can we help you?"
              ></textarea>

              

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="border p-3 rounded-lg w-full focus:outline-none"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="border p-3 rounded-lg w-full focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Work email"
                  className="border p-3 rounded-lg w-full focus:outline-none"
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000"
                  className="border p-3 rounded-lg w-full focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="bg-yellow-400 text-black font-bold px-6 py-3 rounded-lg mt-4 hover:bg-yellow-500 w-full"
              >
                Send
              </button>
            </form>
          )}
        </div>

        {/* Right Side - Contact Options */}
        <div className="md:w-1/3 w-full mt-10 md:mt-0 border-t md:border-t-0 md:border-l md:pl-10 pt-6 md:pt-0">
          <h3 className="text-lg font-semibold text-gray-900">
            Get in touch instantly
          </h3>
          <div className="mt-2 space-y-2 text-blue-600">
            <p className="cursor-pointer">📞 Call us</p>
            <p className="cursor-pointer">📧 Email us</p>
            <p className="cursor-pointer">💬 WhatsApp</p>
            <p className="cursor-pointer">📡 Live chat</p>
          </div>


          <h3 className="text-lg font-semibold text-gray-900 mt-6">
            Join our team
          </h3>
          <p className="text-blue-600 cursor-pointer mt-2">Email: team@intrahelp.space</p>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
