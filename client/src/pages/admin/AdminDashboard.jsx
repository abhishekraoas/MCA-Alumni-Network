import React from "react";
import { FaUserPlus, FaUserEdit, FaUserTimes, FaSearch } from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="bg-white w-64 p-6 shadow-sm hidden sm:block border-r border-gray-200">
          <h2 className="font-semibold text-xl text-gray-800 mb-6">
            Admin Panel
          </h2>
          <ul>
            {[
              { icon: FaUserPlus, text: "Add User" },
              { icon: FaUserEdit, text: "Edit User" },
              { icon: FaUserTimes, text: "Delete User" },
              { icon: FaSearch, text: "Search User" },
            ].map((item, index) => (
              <li key={index} className="mb-4">
                <a
                  href="#"
                  className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors duration-150"
                >
                  <item.icon className="mr-3 text-gray-500" />
                  <span className="text-gray-700">{item.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Dashboard Content */}
        <div className="flex-1 p-6">
          <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
            Admin Dashboard
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Total Users", value: "0000" },
              { title: "Total Placed", value: "0000" },
              { title: "Another Metric", value: "0000" },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <h2 className="font-medium text-lg text-gray-700">
                  {card.title}
                </h2>
                <p className="text-4xl mt-2 text-gray-900">{card.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Navigation Bar for Small Screens */}
      <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white shadow-sm border-t border-gray-200">
        <ul className="flex justify-around items-center h-16">
          {[
            { icon: FaUserPlus, text: "Add" },
            { icon: FaUserEdit, text: "Edit" },
            { icon: FaUserTimes, text: "Delete" },
            { icon: FaSearch, text: "Search" },
          ].map((item, index) => (
            <li key={index}>
              <a
                href="#"
                className="flex flex-col items-center text-gray-600 hover:text-gray-900"
              >
                <item.icon className="text-xl mb-1" />
                <span className="text-xs">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default AdminDashboard;
