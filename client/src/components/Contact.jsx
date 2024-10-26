import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import abhi from "../assets/profile.jpg";
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="flex justify-center items-center h-screen bg-[#e0e5ec] font-['Roboto', sans-serif]" style={{ paddingTop: '-10px' }}>
  <div className="bg-[#e0e5ec] rounded-[20px] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] max-w-[900px] w-full flex flex-col md:flex-row">

    {/* Left Side: Contact Form */}
    <div className="flex-1 p-1">
      <h1 className="text-left text-3xl md:text-4xl mb-2" style={{ fontSize: '2.2rem', fontWeight: 600, fontFamily: "Georgia, serif" }}>
        Get in Touch
      </h1>

      <p className="mb-5 text-base" style={{ fontSize: '1.2rem', fontWeight: 500, fontFamily: "Georgia, serif" }}>We are here for you. How can we help?</p>

      {responseMessage && <p className="text-green-500">{responseMessage}</p>}
      {error && <p className="text-red-500">{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="mb-[20px] text-left">
          <label htmlFor="name" className="text-[0.9rem] font-bold text-[#333] block">
            NAME
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
            required
          />
        </div>

        <div className="mb-[20px] text-left">
          <label htmlFor="email" className="text-[0.9rem] font-bold text-[#333] block">
            EMAIL
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
            required
          />
        </div>

        <div className="mb-[20px] text-left">
          <label htmlFor="message" className="text-[0.9rem] font-bold text-[#333] block">
            MESSAGE
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Go ahead! We are listening..."
            className="w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full p-[12px] border-none rounded-[30px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] hover:shadow-[4px_4px_8px_#b3b9c5,-4px_-4px_8px_#ffffff]"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>

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
            <a href="https://www.linkedin.com/abhishekraoas?_l=en_US" target="_blank" rel="noopener noreferrer" className="flex items-center text-black hover:underline">
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
