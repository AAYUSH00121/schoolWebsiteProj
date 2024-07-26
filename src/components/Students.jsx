import React from 'react';

const studentLife = {
  activities: [
    'Music',
    'Dance',
    'Drama',
    'Art',
    'Sports',
    'Robotics',
    'Debate Club',
    'Science Club'
  ],
  clubs: [
    'Literary Society',
    'Environmental Club',
    'Astronomy Club',
    'Coding Club'
  ],
  achievements: [
    { name: 'John Smith', award: 'National Level Math Olympiad Winner' },
    { name: 'Sarah Lee', award: 'Gold Medalist in State Swimming Championship' },
    { name: 'Tech Innovators Club', award: 'Winners of Inter-School Robotics Competition' }
  ],
  council: [
    { role: 'President', name: 'Amy Parker', grade: 'Grade 12' },
    { role: 'Vice President', name: 'Rajiv Mehta', grade: 'Grade 11' },
    { role: 'Secretary', name: 'Lisa Wong', grade: 'Grade 10' }
  ]
};

const Students = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Students</h1>
      
      {/* Student Life Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Student Life</h2>
        
        <div className="mb-8">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Extracurricular Activities</h3>
          <ul className="list-disc pl-6 space-y-2">
            {studentLife.activities.map((activity, index) => (
              <li key={index} className="text-lg text-gray-700">{activity}</li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-2xl font-medium text-gray-800 mb-4">Clubs and Societies</h3>
          <ul className="list-disc pl-6 space-y-2">
            {studentLife.clubs.map((club, index) => (
              <li key={index} className="text-lg text-gray-700">{club}</li>
            ))}
          </ul>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Achievements</h2>
        <div className="space-y-4">
          {studentLife.achievements.map((achievement, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <p className="text-xl font-semibold text-gray-800 mb-1">{achievement.name}</p>
              <p className="text-lg text-gray-600">{achievement.award}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Student Council Section */}
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Student Council</h2>
        <div className="space-y-4">
          {studentLife.council.map((member, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <p className="text-xl font-semibold text-gray-800 mb-1">{member.role}: {member.name}</p>
              <p className="text-lg text-gray-600">Grade: {member.grade}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Students;
