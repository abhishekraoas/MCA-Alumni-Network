import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion"
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import profilePic from "../assets/profilePic.png"

const About = () => {
  return (
    <>
      {/* Founder message */}
      <div className='w-full h-20 flex items-center justify-center'>
        <h1 className='text-2xl font-bold text-orange-600'>Welcome to MCA Alumni Network</h1>
      </div>
      <section className='flex justify-center'>
        <div className='card w-[400px] lg:w-1/2 bg-base-200 hover:shadow-2xl'>
          <div className='card-body '>
            <div className='flex flex-col justify-center items-center'>
              <h1 className='card-title text-orange-600 font-bold'>Founder's Message</h1>

              <img src={profilePic} className=' w-40 h-40 rounded-full' />
              <h1 className='text-xl font-semibold text-neutral-500'>Abhishek Kumar</h1>

            </div>
            <p className='font-semibold leading-relaxed'>
              It is with immense pride and joy that I welcome you to the MCA Alumni Network—a platform that celebrates the achievements, connections, and lifelong relationships forged during your time in our MCA program. As our alumni community grows, so too does the impact of your contributions across industries and regions.
            </p>
            <p className='font-semibold leading-relaxed'>
              This platform is not just about staying in touch with the past; it’s about creating new possibilities for the future. Whether you are looking to mentor the next generation, find new avenues for collaboration, or simply reconnect with old friends, this network is here to support and inspire you. We believe that our greatest strength lies in our unity, and that by leveraging our collective expertise and experiences, we can continue to make a positive impact on the tech industry and society.
            </p>
            <p className='font-semibold'>
              Regards <br />
              Abhishek Kumar
            </p>
          </div>
          <div className='card-actions justify-end p-6'>
            <a href='https://www.linkedin.com/in/abhishekraoas/'>
              <FaLinkedin className=' text-blue-700 text-3xl' />
            </a>
            <a href='https://github.com/abhishekraoas'>
              <BsGithub className=' text-gray-700 text-3xl' />
            </a>
            <a href='https://x.com/abhishekraoas'>
              <BsTwitterX className=' text-neutral-700 text-3xl' />
            </a>
            <a href='https://www.facebook.com/abhishekraoas'>
              <ImFacebook2 className=' text-blue-700 text-3xl' />
            </a>
          </div>
        </div>
      </section>
      {/* about mca department */}
      <section>
        <h1 className='text-3xl font-bold text-orange-600 py-20 text-center'>ABOUT THE MCA DEPARTMENT</h1>
        <div className='flex flex-wrap gap-5 lg:flex-row justify-around items-center'>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 min-h-96 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl font-bold'>Mission</h1>
              <p className='font-semibold leading-relaxed'>
                The MCA department is dedicated to providing a comprehensive education in computer applications. Our curriculum is designed to equip students with the skills and knowledge needed to excel in the ever-evolving tech industry. We foster a collaborative and innovative learning environment, preparing our students for successful careers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.7 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 max-h-96 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl font-bold'>Experienced Faculty</h1>
              <p className='font-semibold leading-relaxed'>
                The strength of the MCA department lies in its dedicated and experienced faculty members, who bring a blend of academic expertise and industry experience. They are committed to providing a supportive and engaging learning environment, guiding students through complex concepts and fostering a spirit of innovation. Faculty members actively engage in research, contributing to the fields of software engineering, AI, data science, and more, while also mentoring students in their research endeavors.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 min-h-96 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl font-bold'>Why Choose Us?</h1>
              <p className='font-semibold leading-relaxed'>
                The MCA department is not just about earning a degree; it’s about embarking on a journey of learning, discovery, and growth. Our graduates are known for their ability to adapt to the ever-changing landscape of the tech industry, making a meaningful impact wherever they go. By choosing the MCA department, students become part of a community that values knowledge, curiosity, and the drive to create a better tomorrow through technology.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* Famous Alumni */}
      <section>
        <h1 className='text-3xl text-orange-600 text-center my-20 font-bold'>NOTABLE ALUMNI</h1>
        <div className='flex flex-wrap justify-center  items-center gap-5 lg:flex-row lg:justify-around '>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl'>Abhishek </h1>
              <div className='flex justify-center'>
                <img src={profilePic} className=' w-40 h-40 rounded-xl' />
              </div>
            </div>
            <div className='card-actions justify-center py-4'>
              <a href='https://www.linkedin.com/in/abhishekraoas/'>
                <FaLinkedin className=' text-blue-700 text-3xl' />
              </a>
              <a href='https://github.com/abhishekraoas'>
                <BsGithub className=' text-gray-700 text-3xl' />
              </a>
              <a href='https://x.com/abhishekraoas'>
                <BsTwitterX className=' text-neutral-700 text-3xl' />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl'>Abhishek </h1>
              <div className='flex justify-center'>
                <img src={profilePic} className=' w-40 h-40 rounded-xl' />
              </div>
            </div>
            <div className='card-actions justify-center py-4'>
              <a href='https://www.linkedin.com/in/abhishekraoas/'>
                <FaLinkedin className=' text-blue-700 text-3xl' />
              </a>
              <a href='https://github.com/abhishekraoas'>
                <BsGithub className=' text-gray-700 text-3xl' />
              </a>
              <a href='https://x.com/abhishekraoas'>
                <BsTwitterX className=' text-neutral-700 text-3xl' />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            whileInView={{ opacity: 1, y: 0 }}
            className='card w-96 bg-base-100 hover:shadow-2xl'>
            <div className='card-body'>
              <h1 className='card-title text-2xl'>Abhishek </h1>
              <div className='flex justify-center'>
                <img src={profilePic} className=' w-40 h-40 rounded-xl' />
              </div>
            </div>
            <div className='card-actions justify-center py-4'>
              <a href='https://www.linkedin.com/in/abhishekraoas/'>
                <FaLinkedin className=' text-blue-700 text-3xl' />
              </a>
              <a href='https://github.com/abhishekraoas'>
                <BsGithub className=' text-gray-700 text-3xl' />
              </a>
              <a href='https://x.com/abhishekraoas'>
                <BsTwitterX className=' text-neutral-700 text-3xl' />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <div className=' bg-base-200 my'>
        <div className='hero min-h-[50vh] '>
          <div className='hero-content flex-col lg:flex-row'>
            <div className='lg:w-2/3 p-6'>
              <motion.p
                initial={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='text-lg text-justify lg:text-left font-semibold leading-relaxed'>
                Our alumni network is a vibrant and diverse community of professionals who have graduated from our MCA program. They are leaders in their fields, making significant contributions to the industry and society. We are proud of their achievements and the positive impact they have on the world.
              </motion.p>
            </div>
            <div className='lg:w-1/3 flex flex-col items-center lg:items-start'>
              <motion.h2
                initial={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.7 }}
                whileInView={{ opacity: 1, x: 0 }}
                className='text-xl lg:text-2xl font-semibold text-center lg:text-left mb-4'>
                Want to connect with our <span className='text-orange-600'>Alumni</span> Network?
              </motion.h2>
              <Link
                to='/register'
                className='btn btn-success px-6 py-2 text-lg shadow-lg transform transition-transform duration-200 hover:scale-105'>
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default About;
