import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // You can adjust the duration and other settings
  }, []);

  return (
    <div>
      <h1 data-aos="fade-up">About Us</h1>
      <section data-aos="fade-right">
        <h2>About Our Alumni</h2>
        <p>
          Our alumni network is a vibrant and diverse community of professionals who have graduated from our MCA program. They are leaders in their fields, making significant contributions to the industry and society. We are proud of their achievements and the positive impact they have on the world.
        </p>
      </section>
      <section data-aos="fade-left">
        <h2>About MCA Department</h2>
        <p>
          The MCA department is dedicated to providing a comprehensive education in computer applications. Our curriculum is designed to equip students with the skills and knowledge needed to excel in the ever-evolving tech industry. We foster a collaborative and innovative learning environment, preparing our students for successful careers.
        </p>
      </section>
    </div>
  );
};

export default About;
