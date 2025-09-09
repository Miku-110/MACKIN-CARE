// src/components/dokter/StatCard.jsx
import React from 'react';

const StatCard = ({ icon, value, label, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md flex items-center">
      <div className={`p-4 rounded-lg ${color}`}>
        {icon}
      </div>
      <div className="ml-4">
        <p className="text-2xl font-bold text-halodoc-dark">{value}</p>
        <p className="text-sm text-halodoc-gray">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;