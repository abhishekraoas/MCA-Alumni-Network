import React, { useEffect, useState } from "react";
import { FaUserCircle, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import abhi from "../assets/profile.jpg";
import wave from "../assets/wave.png";
import unlock from "../assets/unlock.svg";
import avatar from "../assets/avatar.svg";
import AOS from "aos"; // Import AOS
import "aos/dist/aos.css"; // Import AOS styles

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init(); // Initialize AOS
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage('');
    setError('');

    try {
      const response = await fetch('http://localhost:3000/api/users/contactus', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setResponseMessage(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setError(data.message);
      }
    } catch (error) {
      console.error('Error:', error);
      setError('There was an error sending your message.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border-2 border-gray-50 shadow shadow-gray-50 mx-auto w-[1000px] mb-5 relative overflow-hidden">
      {/* Wave Image */}
      <div className="absolute bottom-0 w-full h-[700px]">
        <img src={wave} className="w-full h-full object-cover" alt="wave" />
      </div>

      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 z-10 p-4">
        <img
          src={unlock}
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto z-10"
          style={{ zIndex: 10 }}
          data-aos="fade-right" // AOS attribute
        />
        <form
          className="flex flex-col justify-center items-center w-full"
          onSubmit={handleSubmit}
          data-aos="fade-left" // AOS attribute
        >
          <img src={avatar} className="w-32" data-aos="zoom-in" /> {/* AOS attribute */}
          <h1 className="my-8 font-display font-bold text-3xl text-black text-center" data-aos="fade-up">
            Contact Us
          </h1>
          {responseMessage && <p className="text-green-500">{responseMessage}</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              data-aos="fade-up"
              required
            />
          </div>
          <div className="relative mt-8">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className="bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              data-aos="fade-up"
              required
            />
          </div>
          <div className="relative mt-8">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message..."
              className="resize-none h-[150px] bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
              data-aos="fade-up"
              required
            ></textarea>
          </div>

          <button
            className="z-10 rounded-2xl w-[230px] mt-3 bg-black text-white p-1 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg"
            type="submit"
            data-aos="fade-up"
          >
            Submit
          </button>
        </form>

        {/* Right Side: Photo and Contact Details */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 p-5">
          <div className="w-[180px] h-[180px] rounded-full overflow-hidden mb-4 shadow-lg">
            <img src={abhi} alt="Your Name" className="w-full h-full object-cover" />
          </div>

          <div className="bg-[#e0e5ec] w-full p-2 text-black flex flex-col items-center">
            <h2 className="text-center text-xl font-bold mb-2 pb-2">Contact Us</h2>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex items-center text-lg font-semibold">
                <a href="mailto:mmmutmca@gmail.com" className="flex items-center text-black hover:underline">
                  <FaEnvelope className="mr-3 text-2xl" />
                  <span>mmmutmca@gmail.com</span>
                </a>
              </div>
              <div className="flex items-center text-lg font-semibold">
                <a href="tel:+1234567890" className="flex items-center text-black hover:underline">
                  <FaPhoneAlt className="mr-3 text-2xl" />
                  <span>+123 456 7890</span>
                </a>
              </div>
              <div className="flex items-center text-lg font-semibold">
                <a href="https://www.linkedin.com/in/abhishekraoas?_l=en_US" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                  <FaLinkedin className="mr-3 text-2xl" />
                  <span>linkedin.com/in/abhi.</span>
                </a>
              </div>
              <div className="flex items-center text-lg font-semibold">
                <a href="https://github.com/abhishekraoas" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
                  <FaGithub className="mr-3 text-2xl" />
                  <span>github.com/abhishek...</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
