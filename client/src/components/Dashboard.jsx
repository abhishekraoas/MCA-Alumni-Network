// Dashboard.js
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row bg-base-200 h-screen">
    

      <main className="flex-grow p-4">
        <h2 className="text-2xl font-semibold mb-4">Welcome to Your Dashboard!</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card shadow-lg bg-base-100">
            <div className="card-body">
              <h3 className="text-lg font-bold">Total Users</h3>
              <p className="text-2xl">1,200</p>
            </div>
          </div>
         
          <div className="card shadow-lg bg-base-100">
            <div className="card-body">
              <h3 className="text-lg font-bold">New Messages</h3>
              <p className="text-2xl">45</p>
            </div>
          </div>
         
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
