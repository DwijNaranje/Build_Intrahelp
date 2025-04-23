import React from "react";
import heroBg from "../assets/image2.png"; // Adjust the path based on your folder structure
import Consultation from "./Consultation"; // Import Consultation Component

const Pricing = () => {
  return (
    <>
      {/* === Hero Section === */}
      <div
        className="relative w-full h-screen flex items-end justify-center text-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>

        <div className="relative z-10 max-w-3xl px-6 text-white mb-24">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
            How much will your <br/>Project Costs??
          </h1>
          <p className="text-lg md:text-xl mb-10">
          Intrahelp provides flexible pricing models and reliable cost assessments to help you determine if our services align with your budget.
          </p>
          <button className="bg-red-600 hover:bg-red-700 transition px-6 py-3 text-lg font-semibold rounded">
            Get a free consultation
          </button>
        </div>
      </div>

      {/* === Pricing Section === */}
      <div className="p-10 text-center bg-white">
        <h1 className="text-3xl font-bold">Check Our Sample Estimates</h1>
        <p className="mt-4 text-gray-600">The estimates provided here are not Intrahelp's official pricing. We assess the cost of each project individually, based on our clients' specific situations and needs.</p>

        <div className="mt-10 space-y-6 text-left max-w-4xl mx-auto">
          {/* Repeat this for each section */}
          <details className="border border-gray-300 rounded-md p-5 bg-gray-50">
            <summary className="font-semibold text-blue-700 cursor-pointer text-lg">
              Software development cost ranges
            </summary>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li><strong>$30,000–$70,000</strong> A cross-platform mobile app of moderate complexity.</li>
              <li><strong>$150,000–$250,000</strong> A native mobile app for a regulated sector (e.g., m-banking, telehealth).</li>
              <li><strong>$200,000–$600,000</strong> A specialized business solution (accounting, inventory, ecommerce).</li>
              <li><strong>$800,000–$4,000,000</strong> Large-scale automation powered by AI/ML, big data, IoT, etc.</li>
            </ul>
          </details>

          <details className="border border-gray-300 rounded-md p-5 bg-gray-50">
            <summary className="font-semibold text-blue-700 cursor-pointer text-lg">
              Managed IT service prices
            </summary>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li><strong>$14–$40 per ticket</strong> L1–L2 IT support.</li>
              <li><strong>$3,000–$16,000+/month</strong> Software maintenance and L3 support.</li>
            </ul>
          </details>

          <details className="border border-gray-300 rounded-md p-5 bg-gray-50">
            <summary className="font-semibold text-blue-700 cursor-pointer text-lg">
              QA and testing cost estimates
            </summary>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li><strong>$5,000</strong> One-time performance testing.</li>
              <li><strong>$30,000–$80,000+</strong> QA process audits.</li>
              <li><strong>$20,000/month</strong> Ongoing managed testing for evolving apps.</li>
            </ul>
          </details>

          <details className="border border-gray-300 rounded-md p-5 bg-gray-50">
            <summary className="font-semibold text-blue-700 cursor-pointer text-lg">
              Security and compliance costs
            </summary>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li><strong>$5,000–$10,000</strong> Penetration testing.</li>
              <li><strong>$8,000–$16,000</strong> Code review.</li>
              <li><strong>$5,000–$20,000</strong> Compliance pre-audit (HIPAA, PCI DSS, GDPR).</li>
              <li><strong>$20,000</strong> Infrastructure security for midsized orgs.</li>
              <li><strong>$40,000+</strong> Phishing + white box testing.</li>
            </ul>
          </details>

          <details className="border border-gray-300 rounded-md p-5 bg-gray-50">
            <summary className="font-semibold text-blue-700 cursor-pointer text-lg">
              Data analytics service costs
            </summary>
            <ul className="list-disc ml-6 mt-4 text-gray-700">
              <li><strong>$30,000–$200,000</strong> Data science component (forecasting, anomaly detection).</li>
              <li><strong>$70,000–$200,000</strong> Basic analytics solution.</li>
              <li><strong>$200,000–$400,000</strong> BI solution with predictive analytics.</li>
              <li><strong>$600,000–$1,500,000+</strong> Enterprise analytics powered by AI/ML.</li>
            </ul>
          </details>
        </div>


        



      </div>
      <Consultation />
    </>
  );
};

export default Pricing;
