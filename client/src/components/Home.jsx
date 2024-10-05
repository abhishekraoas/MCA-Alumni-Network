import React from "react";
 const Home = () => {
    return (
        <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-800 px-0 text-white py-4 px-4">
            {/* Full-screen container with centered content */}
            <div className="container px-6 py-16 bg-gradient-to-r from-gray-500 to-gray-400 min-h-screen flex items-center justify-center rounded-xl shadow-lg">
                <div className="flex flex-col lg:flex-row items-center justify-between w-full">
                {/* Left Side: Title and Description */}
                <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
                    <h2 className="text-5xl font-bold text-white mb-4 transform transition duration-500 ease-in-out hover:scale-105">
                    Join Our Alumni Network
                    </h2>
                    <p className="text-lg text-gray-200 leading-relaxed transform transition duration-500 ease-in-out hover:translate-x-1">
                    Connect with fellow alumni, discover opportunities, and stay updated with the latest events and news. Be a part of the growing MMMUT MCA Alumni Network today.
                    </p>
                    <button className="mt-6 px-6 py-3 bg-white text-indigo-600 font-bold rounded-md shadow-lg hover:bg-gray-200 hover:text-indigo-700 transform transition duration-500 ease-in-out hover:scale-110">
                    Register As Alumni
                    </button>
                </div>

                {/* Right Side: Image */}
                <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                    <img
                    src="/src/assets/Right.png"
                    alt="Alumni Network"
                    className="max-w-xs lg:max-w-md m-auto rounded-lg  transform transition duration-500 ease-in-out hover:scale-105"
                    />
                </div>
                </div>
            </div>
            </div>

        </div>
    );
}

export default Home;