import React from 'react';

const ContactUs = () => {
  return (
    <div className="container mx-auto p-6 lg:p-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Get in Touch</h2>
        <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200 mb-8">
          <p className="text-lg text-gray-600 mb-4">
            <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Phone:</strong> +1 (123) 456-7890
          </p>
          <p className="text-lg text-gray-600 mb-4">
            <strong>Email:</strong> contact@springdale.edu
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 mb-8">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.943470757701!2d-122.084249685542!3d37.421999779825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5a78c1c26b7%3A0xfce8c2fcf75a8d!2sGoogleplex!5e0!3m2!1sen!2sus!4v1606346469187!5m2!1sen!2sus"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>
      
      <section>
        <h2 className="text-3xl font-semibold text-gray-700 mb-6">Send Us a Message</h2>
        <form className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-semibold text-gray-700 mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-semibold text-gray-700 mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-semibold text-gray-700 mb-2">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-blue-800 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
