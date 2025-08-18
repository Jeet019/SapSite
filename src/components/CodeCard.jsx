import React from "react";

const CodeCard = ({ code, desc }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all duration-300">
      <h2 className="text-xl font-bold text-blue-600">{code}</h2>
      <p className="text-gray-700 mt-2">{desc}</p>
    </div>
  );
};

export default CodeCard;
