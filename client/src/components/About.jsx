import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>

      <div className='hero bg-base-200 min-h-screen border-b-8'>
        <div className='hero-content flex-col lg:flex-row '>
          <div className= 'px-6 '>
            <h1 className=' text-2xl lg:text-3xl font-bold text-center lg:text-left text-green-500'>About Us</h1>
            <p className='py-4 lg:min-w-72 w-[400px] text-left lg:text-left font-semibold leading-8'>
              Our alumni network is a vibrant and diverse community of professionals who have graduated from our MCA program. They are leaders in their fields, making significant contributions to the industry and society. We are proud of their achievements and the positive impact they have on the world.

            </p>
          </div>
          <div>
            <h1 className=''>Want to connect with <span className='text-orange-600 font-bold'>Alumni</span> Network</h1>
            <Link to={`/register`} className='btn btn-success'>Register Here..</Link>
          </div>


        </div>
      </div>

      <section className='hero bg-base-200 h-[50vh]'>
        <div className='hero-content lg:flex-row  flex-col'>
          <div className=' lg:w-1/3'>
            <h2>About <span className='text-orange-600 font-bold'>MCA </span>Department</h2>

          </div>
          <div className=' lg:w-7/12'>
            <p className='font-semibold leading-8'>
              The MCA department is dedicated to providing a comprehensive education in computer applications. Our curriculum is designed to equip students with the skills and knowledge needed to excel in the ever-evolving tech industry. We foster a collaborative and innovative learning environment, preparing our students for successful careers.
            </p>
          </div>

        </div>

      </section>
    </div>

  );
};

export default About;