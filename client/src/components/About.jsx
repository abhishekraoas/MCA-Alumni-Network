import React from "react";
import "./about.css";
import { FaGraduationCap } from "react-icons/fa6";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#e0e5ec] font-['Roboto',sans-serif]">
      <div className="bg-[#e0e5ec] rounded-[20px] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] w-auto m-8 h-[700px] text-center">
        <h1 className="text-5xl font-semibold text-[#000] mb-4">About Us</h1>
        <section>
          <div className="flex items-center space-x-4">
            <FaGraduationCap />
            <h2
              className="text-2xl font-semibold text-[#000] mb-2 text-left font-sans [animation:8s_typewriter_infinite_steps(50,end)] w-0 overflow-x-hidden inline-flex whitespace-nowrap"
              style={{ direction: "ltr" }}
            >
              {`About Our Alumni :`}
            </h2>
          </div>

          <p className="text-lg text-[#333] mb-4 ml-7 text-left">
            Our alumni network is a vibrant and diverse community of
            professionals who have graduated from our MCA program. They are
            leaders in their fields, making significant contributions to the
            industry and society. We are proud of their achievements and the
            positive impact they have on the world. Our alumni have gone on to
            achieve great things, from starting their own companies to working
            for top tech firms. They are a testament to the quality of our
            program and the potential of our students.
          </p>
        </section>

        <section>
          <div className="flex items-center space-x-4">
            <FaGraduationCap />
            <h2
              className="text-2xl font-semibold text-[#000] mb-2 text-left font-sans [animation:8s_typewriter_infinite_steps(50,end)] w-0 overflow-x-hidden inline-flex whitespace-nowrap"
              style={{ direction: "ltr" }}
            >
              {`About MCA Department :`}
            </h2>
          </div>

          <p className="text-lg text-[#333] mb-4 ml-7 text-left">
            The MCA department is dedicated to providing a comprehensive
            education in computer applications. Our curriculum is designed to
            equip students with the skills and knowledge needed to excel in the
            ever-evolving tech industry. We foster a collaborative and
            innovative learning environment, preparing our students for
            successful careers. Our faculty members are experienced
            professionals with a strong background in computer applications,
            ensuring that our students receive the best possible guidance and
            mentorship. We also invite industry experts to share their insights
            and experiences, providing our students with a well-rounded
            education that prepares them for the challenges of the real world.
            Additionally, our state-of-the-art infrastructure and cutting-edge
            technology enable our students to gain hands-on experience with the
            latest tools and technologies, making them industry-ready from day
            one.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
