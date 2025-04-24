import React, { useState } from "react";
import { Mail, Phone, Linkedin, Youtube, Facebook } from "lucide-react";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    message: "",
    nda: false,
    name: "",
    company: "",
    email: "",
    phone: ""
  });

  const [submitted, setSubmitted] = useState(false); // ✅ Add state to track submission

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/contact`, formData);
      setSubmitted(true); // ✅ Set to true after successful submit
    } catch (err) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="pt-[160px] bg-gradient-to-br from-blue-50 via-white to-blue-100 min-h-screen px-4 xl:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Left Info Section */}
        <div className="space-y-6 text-sm">
          <div>
            <h3 className="text-base font-semibold">Quick response</h3>
            <p className="text-gray-600">We usually reply within 1 hour on business days to sign an NDA and arrange a discussion.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold">Personalized approach</h3>
            <p className="text-gray-600">You will engage directly with specialists experienced in your domain.</p>
          </div>
          <div>
            <h3 className="text-base font-semibold">No pressure</h3>
            <p className="text-gray-600">We’re here to explore your needs and provide guidance — whenever you're ready.</p>
          </div>
        </div>

        {/* Conditional rendering: show thank you or form */}
        <div className="bg-white shadow-xl rounded-xl p-6 xl:col-span-2 min-h-[300px] flex items-center justify-center">
          {submitted ? (
            <div className="text-center space-y-4">
              <h2 className="text-2xl font-bold text-gray-800">Thank you for reaching us!</h2>
              <p className="text-sm text-gray-600">We’ll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <h2 className="text-xl font-bold text-gray-800">Let's discuss your needs!</h2>
              <p className="text-sm text-gray-600">Have a question, want to discuss a project, or learn more about our expertise?</p>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md resize-none text-sm"
                rows={4}
                placeholder="Kindly describe your request."
              />
              

              <div className="flex items-center gap-2 text-sm">
                <input type="checkbox" id="nda" name="nda" checked={formData.nda} onChange={handleChange} />
                <label htmlFor="nda" className="text-gray-700">I'd like to sign an NDA</label>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="border border-gray-300 p-3 rounded-md text-sm"
                />
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Company"
                  className="border border-gray-300 p-3 rounded-md text-sm"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Work email"
                className="w-full border border-gray-300 p-3 rounded-md text-sm"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 00000 00000"
                className="w-full border border-gray-300 p-3 rounded-md text-sm"
              />

              <button
                type="submit"
                className="bg-yellow-400 text-black px-6 py-3 font-bold w-full border border-black rounded-none hover:bg-yellow-500 transition text-sm"
              >
                Send
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Contact Info + Socials (unchanged) */}
      <div className="max-w-7xl mx-auto mt-16 px-4 xl:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border rounded-lg p-6 shadow-md bg-white">
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-800">Our Contacts</h3>
            <p className="flex items-center text-gray-700 gap-2"><Phone size={16} /> +91 98813 69017</p>
            <p className="flex items-center text-gray-700 gap-2"><Mail size={16} /> contact@intrahelp.space</p>
            <a
  href="https://wa.me/9881369017"
  target="_blank"
  rel="noopener noreferrer"
  className="text-blue-600 hover:underline cursor-pointerflex items-center gap-2"
>
  WhatsApp
</a>
          </div>
          
          <div className="space-y-3">
            <h3 className="font-semibold text-lg text-gray-800">Join Our Team</h3>
            <p className="text-blue-600 hover:underline cursor-pointer">Email:- team@intrahelp.space</p>
          </div>
        </div>
        <div className="mt-10 border rounded-lg p-6 shadow-md bg-white">
          <h3 className="font-semibold text-lg text-gray-800 mb-4">Follow us on Social Media</h3>
          <div className="flex space-x-6 text-blue-600">
            <Linkedin className="cursor-pointer hover:scale-110 transition" />
            <Youtube className="cursor-pointer hover:scale-110 transition" />
            <Facebook className="cursor-pointer hover:scale-110 transition" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
