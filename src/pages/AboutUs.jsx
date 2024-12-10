import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-white to-blue-50 min-h-screen">
      {/* Header Section */}
      <div className="container mx-auto px-6 py-12 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 drop-shadow-lg">
          About Us
        </h1>
        <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
          Empowering communities with tools and knowledge to stay safe during flood emergencies.
        </p>
        <div className="mt-6">
          <hr className="border-t-2 border-blue-300 mx-auto w-24" />
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {/* Our Mission */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg">
            We aim to create a platform that raises awareness about flood risks
            while providing real-time detection and preparedness resources to
            help communities stay safe.
          </p>
        </div>

        {/* What We Offer */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">What We Offer</h2>
          <ul className="list-disc list-inside text-gray-700 text-lg space-y-3">
            <li>
              <strong>Flood Detection Tools:</strong> Real-time monitoring to
              identify risks.
            </li>
            <li>
              <strong>Educational Resources:</strong> Guidance for preparation,
              emergencies, and recovery.
            </li>
            <li>
              <strong>Community Support:</strong> Connect with resources and
              organizations.
            </li>
          </ul>
        </div>

        {/* Our Vision */}
        <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1 p-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Our Vision</h2>
          <p className="text-gray-700 text-lg">
            A world where no one is caught unprepared for a flood. We strive to
            reduce the loss of life and property through collaboration,
            technology, and education.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
