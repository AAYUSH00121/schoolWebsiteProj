import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Academics</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Curriculum</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Primary (Grades 1-5)</h3>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science</li>
              <li>Social Studies</li>
              <li>Art</li>
              <li>Physical Education</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Secondary (Grades 6-10)</h3>
            <ul className="list-disc pl-6 text-lg text-gray-600">
              <li>English</li>
              <li>Mathematics</li>
              <li>Science (Physics, Chemistry, Biology)</li>
              <li>Social Studies</li>
              <li>Computer Science</li>
              <li>Physical Education</li>
              <li>Art</li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Senior Secondary (Grades 11-12)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Science Stream</h4>
                <ul className="list-disc pl-6 text-lg text-gray-600">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>English</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">Commerce Stream</h4>
                <ul className="list-disc pl-6 text-lg text-gray-600">
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>English</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Teaching Methodologies</h2>
        <p className="text-lg text-gray-600">
          We use a blend of traditional and modern teaching techniques to cater to different learning styles.
        </p>
        <h3 className="text-2xl font-semibold text-gray-700 mt-6 mb-4">Educational Resources</h3>
        <p className="text-lg text-gray-600">
          Digital classrooms, interactive learning modules, and access to online educational platforms.
        </p>
      </section>
    </div>
  );
};

export default Academics;
