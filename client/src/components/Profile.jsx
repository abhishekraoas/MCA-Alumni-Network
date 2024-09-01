import React from "react";

const Profile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="bg-cover bg-center h-32" style={{ backgroundImage: "url('https://source.unsplash.com/random')" }}></div>
      <div className="p-6">
        <div className="flex items-center justify-center">
          <img
            className="w-24 h-24 rounded-full border-2 border-gray-300"
            src="https://randomuser.me/api/portraits/men/41.jpg"
            alt="User Profile"
          />
        </div>
        <div className="mt-4 text-center">
          <h2 className="text-xl font-semibold text-gray-800">John Doe</h2>
          <p className="text-sm text-gray-600">Software Engineer</p>
        </div>
        <div className="mt-4 flex justify-center space-x-4">
          <a href="#" className="text-blue-500 hover:text-blue-700">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.225 0H1.775C.793 0 0 .8 0 1.778v20.444C0 23.2.793 24 1.775 24h20.451C23.206 24 24 23.2 24 22.222V1.778C24 .8 23.206 0 22.225 0zm-13.99 20.454H5.337V9.043h2.897v11.411zm-1.448-13.01c-.937 0-1.699-.769-1.699-1.714 0-.945.762-1.714 1.699-1.714.938 0 1.699.769 1.699 1.714-.001.945-.762 1.714-1.699 1.714zm13.468 13.01h-2.896v-5.517c0-1.314-.025-3.006-1.833-3.006-1.834 0-2.116 1.431-2.116 2.91v5.613h-2.897V9.043h2.779v1.553h.04c.387-.733 1.332-1.507 2.745-1.507 2.937 0 3.476 1.934 3.476 4.447v6.918h-.001z" />
            </svg>
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-600">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.918 9.918 0 0 1-2.828.775A4.93 4.93 0 0 0 23.337 3.1c-.95.563-2.005.973-3.127 1.195A4.92 4.92 0 0 0 16.615 3a4.92 4.92 0 0 0-4.924 4.923c0 .386.044.76.128 1.12-4.093-.205-7.723-2.165-10.15-5.143-.424.725-.666 1.562-.666 2.457 0 1.697.866 3.194 2.178 4.074-.803-.025-1.56-.247-2.224-.615v.061c0 2.368 1.684 4.342 3.919 4.789-.41.111-.843.17-1.287.17-.315 0-.616-.031-.917-.087.617 1.926 2.408 3.328 4.526 3.365-1.662 1.305-3.758 2.083-6.037 2.083-.392 0-.779-.023-1.159-.067 2.152 1.382 4.709 2.188 7.459 2.188 8.947 0 13.839-7.407 13.839-13.838 0-.211-.015-.423-.044-.633A9.893 9.893 0 0 0 24 4.557z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-900 hover:text-gray-700">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 2.162c-5.455 0-9.87 4.415-9.87 9.87s4.415 9.87 9.87 9.87 9.87-4.415 9.87-9.87S17.455 2.162 12 2.162zm0 17.721c-4.344 0-7.851-3.507-7.851-7.851S7.656 4.181 12 4.181s7.851 3.507 7.851 7.851-3.507 7.851-7.851 7.851zm0-11.311c-1.91 0-3.459 1.549-3.459 3.46s1.549 3.46 3.459 3.46 3.46-1.549 3.46-3.46-1.549-3.46-3.46-3.46z" />
            </svg>
          </a>
          <a href="#" className="text-neutral-700 hover:text-gray-500">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.373 0 0 5.373 0 12c0 4.991 3.654 9.136 8.438 10.445.615.113.844-.266.844-.592V18.4c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.419-1.305.762-1.604-2.665-.305-5.467-1.335-5.467-5.931 0-1.311.469-2.382 1.236-3.222-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.4 3.003-.404 1.02.005 2.046.138 3.006.404 2.291-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.609-2.807 5.624-5.479 5.921.43.373.824 1.102.824 2.222v3.293c0 .319.192.694.801.576C20.344 21.137 24 16.992 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <div className="mt-6 flex justify-center space-x-2">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600">
            Follow
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-900 rounded-full hover:bg-gray-400">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
