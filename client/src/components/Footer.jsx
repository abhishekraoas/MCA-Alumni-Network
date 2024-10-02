import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      {/* Container for all sections */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">

        {/* About Us Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 underline">About Us</h3>
          <div className="flex flex-col items-center">
            <a href="#" className="hover:underline">Our Story</a>
            <a href="#" className="hover:underline">Team</a>
            <a href="#" className="hover:underline">Careers</a>
          </div>
        </div>

        {/* Support Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 underline">Support</h3>
          <div className="flex flex-col items-center">
            <a href="#" className="hover:underline">FAQ</a>
            <a href="#" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Privacy Policy</a>
          </div>
        </div>

        {/* Connect With Us Section */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-lg font-semibold mb-4 underline">Connect With Us</h3>
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            <a href="#" className="text-xl hover:text-gray-400"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center py-4 bg-gray-900 mt-8">
        <p>&copy; 2024 MCA Alumni Network. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
