import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordRecovery = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!email) {
      setError("Please enter your email.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `http://localhost:3000/alumni/forgot-password`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage(
          "Password recovery instructions have been sent to your email."
        );
      } else {
        setError(data.message || "Password recovery failed.");
      }
    } catch (err) {
      setError("An error occurred during password recovery.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#e0e5ec] font-['Roboto',sans-serif]">
      <div className='bg-[#e0e5ec] rounded-[20px] p-[40px_30px] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] max-w-[350px] w-full text-center'>
        <h2 className='text-[1.8rem] font-bold text-[#333] mb-[30px]'>
          Forgot Password
        </h2>

        {error && <div className='text-red-500 text-center'>{error}</div>}
        {message && <div className='text-green-500 text-center'>{message}</div>}

        <form onSubmit={handlePasswordRecovery}>
          <div className='mb-[20px] text-left'>
            <label
              htmlFor='email'
              className='text-[0.9rem] font-bold text-[#333] block'
            >
              EMAIL
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={handleInputChange}
              placeholder='Enter Your Email'
              className='w-full p-[12px] mt-[8px] text-[1rem] border-none rounded-[30px] bg-[#e0e5ec] shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff] outline-none focus:shadow-[inset_8px_8px_16px_#b3b9c5,inset_-8px_-8px_16px_#ffffff,0_0_5px_rgba(81,203,238,1)]'
              required
            />
          </div>

          <button
            type='submit'
            className={`w-full p-[12px] border-none rounded-[30px] bg-[#e0e5ec] shadow-[8px_8px_16px_#b3b9c5,-8px_-8px_16px_#ffffff] text-[#333] text-[1rem] font-bold cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#d1d9e6] ${
              isLoading ? "opacity-70 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? (
              <FaSpinner className='animate-spin mx-auto' />
            ) : (
              "RECOVER PASSWORD"
            )}
          </button>
        </form>

        <div className='mt-[20px]'>
          <button
            onClick={() => navigate("/login")}
            className='text-[0.9rem] text-blue-500 hover:underline'
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
