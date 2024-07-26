import React from 'react';

const facultyMembers = [
  { name: 'John Doe', role: 'Principal', qualifications: 'M.Ed', experience: '20 years' },
  { name: 'Jane Smith', role: 'Vice Principal', qualifications: 'M.Sc. in Physics', experience: '15 years' },
  { name: 'Emily Johnson', role: 'English Teacher', qualifications: 'M.A. in English', experience: '10 years' },
  { name: 'Michael Brown', role: 'Mathematics Teacher', qualifications: 'M.Sc. in Mathematics', experience: '8 years' },
  { name: 'Sophia Davis', role: 'Science Teacher', qualifications: 'M.Sc. in Chemistry', experience: '12 years' },
  { name: 'David Wilson', role: 'Computer Science Teacher', qualifications: 'B.Tech in Computer Science', experience: '5 years' }
];

const Faculty = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Faculty</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facultyMembers.map((member, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h2>
            <p className="text-lg text-gray-600 mb-1"><strong>Role:</strong> {member.role}</p>
            <p className="text-lg text-gray-600 mb-1"><strong>Qualifications:</strong> {member.qualifications}</p>
            <p className="text-lg text-gray-600"><strong>Experience:</strong> {member.experience}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faculty;
