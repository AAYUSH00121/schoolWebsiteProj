import React from 'react';

const AboutUs = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">About Us</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Our History</h2>
        <p className="text-lg text-gray-600">
          Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
        </p>
      </section>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Vision & Mission</h2>
        <p className="text-lg text-gray-600 mb-4">
          <strong>Vision:</strong> To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
        </p>
        <p className="text-lg text-gray-600">
          <strong>Mission:</strong> To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
        </p>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Infrastructure & Facilities</h2>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-600">
          <li>State-of-the-art science and computer labs</li>
          <li>Spacious and well-equipped classrooms</li>
          <li>Library with a vast collection of books and digital resources</li>
          <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
        </ul>
      </section>
    </div>
  );
};

export default AboutUs;
