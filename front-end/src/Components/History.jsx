import React from 'react';
import trashData from './Shared/trashData';
import trashIcon from './trash.svg';

function History() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">Smart Trash Can History Dashboard</h2>
      </div>
      <div className="px-4 py-2">
        {trashData.map(trash => (
          <div className="flex items-center justify-between mb-4" key={trash.id}>
            <div className="flex items-center">
              <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
              <div>
                <h3 className="text-gray-600 font-medium">{trash.name}</h3>
                <p className="text-xs text-gray-500">Last emptied: {trash.lastEmptied}</p>
              </div>
            </div>
            <p className={`text-xs ${trash.status === "Empty" ? "text-green-500" : trash.status === "Full" ? "text-red-500" : "text-yellow-500"}`}>{trash.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;
