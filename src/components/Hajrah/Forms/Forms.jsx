// import React from "react";
import scholarship from "../../../assets/pdfs/Scholarship.pdf";
import partnership from "../../../assets/pdfs/Partnership.pdf";
export default function Forms() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Get Involved</h2>
          <p className="mt-4 text-lg text-gray-600">
            Download the forms to join the foundation or apply for a scholarship.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Partnership Form Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Join the Foundation</h3>
            <p className="text-gray-600 mb-6">
              Download the partnership form to become a part of our foundation.
            </p>
            <a
              href={partnership} // Path to the Partnership Form PDF
              download
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
            >
              Start Filling Partnership Form
            </a>
          </div>

          {/* Scholarship Form Card */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Apply for Scholarship</h3>
            <p className="text-gray-600 mb-6">
              Download the scholarship form to apply for financial aid.
            </p>
            <a
              href={scholarship} // Path to the Scholarship Form PDF
              download
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors duration-300"
            >
              Start Filling Scholarship Form
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
