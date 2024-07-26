import React from 'react';

const Admissions = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Admissions</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Admission Process</h2>
        <p className="text-lg text-gray-600 mb-4">
          Admission forms are available for download. Submit the completed form along with required documents at the school office.
        </p>
        <p className="text-lg text-gray-600">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Important Dates</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>Admission Form Availability: March 1st</li>
          <li>Last Date for Submission: March 31st</li>
          <li>Entrance Test: April 15th</li>
          <li>Announcement of Results: April 30th</li>
        </ul>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Download Admission Forms</h2>
        <a 
          href="/path/to/admission_form.pdf" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
          download
        >
          Download Form
        </a>
      </section>
    </div>
  );
};

export default Admissions;
