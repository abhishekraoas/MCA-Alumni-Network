import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white py-16 px-6 bg-gradient-to-r from-gray-500 to-gray-400">
      {/* Header Section */}
      <div className="container mx-auto text-center py-10 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-transparent bg-clip-text text-white to-pink-500 mb-6">
          About Us
        </h1>
        <p className="text-lg text-gray-800 max-w-xl mx-auto">
          Discover more about our alumni network and the MCA department shaping tomorrow’s tech leaders.
        </p>
      </div>

      {/* About Alumni Section */}
      <section className="container mx-auto my-16 bg-gray-100 rounded-lg shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl animate-slideUp">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">
          About Our Alumni
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Our alumni network is a vibrant and diverse community of professionals who graduated from our MCA program. They are
          leaders in their respective fields, making a positive impact on the world and contributing to various industries.
        </p>
        {/* Animated Gradient Line */}
        <div className="w-24 h-1 mt-6 mx-auto bg-gradient-to-r from-indigo-600 to-pink-500 rounded-full animate-pulse"></div>
      </section>

      {/* About MCA Department Section */}
      <section className="container mx-auto mb-16 bg-gray-100 rounded-lg shadow-xl p-8 text-center transition-transform transform hover:scale-105 hover:shadow-2xl animate-slideUp delay-100">
        <h2 className="text-3xl font-bold text-pink-500 mb-4">
          About MCA Department
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          The MCA department provides a comprehensive education in computer applications. Our curriculum prepares students for 
          success in the tech industry by fostering collaboration, innovation, and critical thinking in a rapidly evolving field.
        </p>
        {/* Animated Gradient Line */}
        <div className="w-24 h-1 mt-6 mx-auto bg-gradient-to-r from-pink-500 to-purple-500 rounded-full animate-pulse"></div>
      </section>
    </div>
  );
};

export default About;