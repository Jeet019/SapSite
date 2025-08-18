import React, { useState } from "react";
import codes from "../data/codes";
import CodeCard from "../components/CodeCard";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredCodes = codes.filter(
    (item) =>
      item.code.toLowerCase().includes(search.toLowerCase()) ||
      item.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl md:text-5xl font-extrabold text-blue-700 mb-6">
        SAP Transport Codes
      </h1>

      <input
        type="text"
        placeholder="Search code or description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-1/2 p-3 mb-6 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full md:w-4/5">
        {filteredCodes.map((item, idx) => (
          <CodeCard key={idx} code={item.code} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Home;
