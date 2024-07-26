import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Gallery</h1>
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Photos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1574169208497-f4b43b58f70b" alt="Sports Day" className="w-full h-64 object-cover"/>
            <p className="p-4 text-center">Students participating in various sports events.</p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1533656666368-9f66dbe2c5b3" alt="Science Exhibition" className="w-full h-64 object-cover"/>
            <p className="p-4 text-center">Students presenting their science projects.</p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <img src="https://images.unsplash.com/photo-1525772256108-cd34f3e0d6dc" alt="Cultural Fest" className="w-full h-64 object-cover"/>
            <p className="p-4 text-center">Students performing in the cultural fest.</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Videos</h2>
        <div className="flex flex-col space-y-6">
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <video width="100%" height="auto" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <p className="p-4 text-center">Virtual tour of Springdale Public School.</p>
          </div>
          <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
            <video width="100%" height="auto" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4"/>
              Your browser does not support the video tag.
            </video>
            <p className="p-4 text-center">Highlights from the Annual Function 2023.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
