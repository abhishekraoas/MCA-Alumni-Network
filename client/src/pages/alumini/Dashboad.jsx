import React from 'react'

const Dashboad = () => {
  return (
    <>
    <h1 className="text-3xl font-semibold mb-6 text-center text-gray-800">
    Welcome to Alumini Dashboard
  </h1>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {[
      { title: "Notifications and Events", value: "21" },
      { title: "Job", value: "213" },
     
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
    </>
    
  )
}

export default Dashboad