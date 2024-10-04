import React from "react";
import { FaHome , FaAddressCard  , FaUser } from "react-icons/fa";
import { MdOutlineNotificationAdd } from "react-icons/md";
import { Link } from "react-router-dom";

const Dashboard = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="flex flex-1">


        {/* Sidebar */}
        <div className="bg-white w-64 p-6 shadow-sm hidden sm:block border-r border-gray-200">
          <h2 className="font-semibold text-xl text-gray-800 mb-6">
            User Dashboard
          </h2>
          <ul>
            {[
              { icon: FaHome , text: "Home" , path: "/user/dashboard" },
              { icon: FaAddressCard , text: "Add Jobs" ,path: "/user/jobs" },
              { icon: MdOutlineNotificationAdd , text: "Events", path: "/user/events"  },
              { icon: FaUser, text: "Profile" , path: "/user/profile" },
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.path}
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                >
                  <item.icon className="mr-3 text-gray-500" />
                  <span className="text-gray-700">{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">

        { children }

        </div>
      </div>



      {/* Bottom Navigation Bar for Small Screens */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-sm border-t border-gray-200">
        <ul className="flex justify-around items-center h-16">
          {[
            { icon: FaHome , text: "Home",path: "/user/dashboard"  },
            { icon: FaAddressCard , text: "Add Jobs", path: "/user/Jobs"  },
            { icon: MdOutlineNotificationAdd , text: "Events" , path: "/user/events"  },
            { icon: FaUser, text: "Profile" , path: "/user/profile"  },
          ].map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <item.icon className="text-xl mb-1" />
                <span className="text-xs">{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

    </div>
  );
};

export default Dashboard;
