import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-12">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Welcome to Springdale Public School</h1>
        <p className="text-xl text-gray-700 mb-8">Nurturing young minds for a brighter future.</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#about" className="bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105">Learn More</a>
          <a href="#contact" className="bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105">Contact Us</a>
        </div>
      </header>

      {/* Carousel */}
      <section className="relative mb-12">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay
          infiniteLoop
          className="rounded-lg shadow-lg overflow-hidden"
        >
          <div>
            <img
            src="https://unsplash.com/photos/x_TJKVU1FJA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MzJ8fHNjaG9vbHxlbnwwfHx8fDE3MjE5NzE3MTV8MA&force=true"
              alt="Annual Sports Day"
              className="w-full h-80 object-cover"
            />
            <p className="legend bg-gradient-to-t from-black to-transparent text-white p-4 text-center text-lg font-semibold">
              Annual Sports Day - Celebrating Excellence in Sports
            </p>
          </div>
          <div>
            <img
              src="https://img.freepik.com/free-photo/science-class-with-girls_23-2148581278.jpg?w=996&t=st=1722023748~exp=1722024348~hmac=55f2b68e2829f5d531ddadff7cbd68aa2a2761527209bb5794feffeded6a718d"
              alt="Science Exhibition"
              className="w-full h-80 object-cover"
            />
            <p className="legend bg-gradient-to-t from-black to-transparent text-white p-4 text-center text-lg font-semibold">
              Science Exhibition - Showcasing Student Innovations
            </p>
          </div>
          <div>
            <img
               src="https://img.freepik.com/free-vector/education-pattern-background-doodle-style_53876-115365.jpg?t=st=1722023900~exp=1722027500~hmac=bb13cf267d98db4dbda8ec92f6bec77a796bac709f622d82b3064a4dae9a7478&w=740"
              alt="Cultural Fest"
              className="w-full h-80 object-cover"
            />
            <p className="legend bg-gradient-to-t from-black to-transparent text-white p-4 text-center text-lg font-semibold">
              Cultural Fest - Embracing Diversity and Creativity
            </p>
          </div>
        </Carousel>
      </section>

      {/* Vision and Mission */}
      <section className="bg-gray-50 py-8 rounded-lg shadow-lg mb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-around gap-8">
            <div className="text-center flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
              <p className="text-gray-600">Creating a learning environment that fosters academic excellence, critical thinking, and ethical values.</p>
            </div>
            <div className="text-center flex-1 p-6 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
              <p className="text-gray-600">Empowering students with the knowledge, skills, and values needed to thrive in a dynamic world.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
