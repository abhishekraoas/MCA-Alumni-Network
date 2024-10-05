import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import wave from "../assets/wave.png";
import unlock from "../assets/unlock.svg";
import avatar from "../assets/avatar.svg";

const Contact = () => {
  const form = useRef();


  // used EmailJs
  // npm i @emailjs/browser
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "replace with service id",
        "replace with template id",
        form.current,
        "replace with user id"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="border-2 border-gray-50 shadow shadow-gray-50 mx-auto  w-[1000px] mb-5 relative overflow-hidden mt-10">
      {/* Add a container for the wave image */}
      <div className="absolute bottom-0 w-full h-[700px]">
        <img src={wave} className="w-full h-full object-cover" alt="wave" />
      </div>

      <div className="flex flex-col justify-center items-center lg:grid lg:grid-cols-2 z-10 p-4">
        <img
          src={unlock}
          className="hidden lg:block w-1/2 hover:scale-150 transition-all duration-500 transform mx-auto z-10"
          // Add z-index to bring the unlock image to the front
          style={{ zIndex: 10 }}
        />
        <form
          className="flex flex-col justify-center items-center w-full"
          ref={form}
          onSubmit={sendEmail}
        >
          <img src={avatar} className="w-32" />
          <h1 className="my-8 font-display font-bold text-3xl text-black text-center">
            Contact Us
          </h1>
          <div className="relative">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
            />
          </div>
          <div className="relative mt-8">
            <input
              type="text"
              name="user_email"
              placeholder="Email"
              className=" bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
            />
          </div>
          <div className="relative mt-8">
            <textarea
              name="message"
              placeholder="Message..."
              id=""
              className="resize-none h-[150px] bg-white pl-8 border-2 border-gray-200 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none"
            ></textarea>
          </div>

          <button
            className="z-10 rounded-2xl w-[230px] mt-3 bg-black text-white p-1 font-display focus:outline-none focus:border-primarycolor transition-all duration-500 capitalize text-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
