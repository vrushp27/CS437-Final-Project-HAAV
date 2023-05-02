import React, { useState } from 'react';
import trashData from './Capture.js';

function HistoryDetails({ trashId }) {
  const trash = trashData.find((trash) => trash.id === trashId);
  const [showCurrentStatus, setShowCurrentStatus] = useState(false);
  const handleCurrentStatusClick = () => setShowCurrentStatus(!showCurrentStatus);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
        <div className="bg-gray-800 py-2 px-4 text-white font-bold text-lg">History Details for {trash.name}</div>
        <div className="p-4">
          <p className="text-sm text-gray-800">Total Capacity: {trash.totalCapacity} kg</p>
          <p className="text-sm text-gray-800">Current Capacity: {trash.currentCapacity} kg</p>
          <p className="text-sm text-gray-800">Last Emptied: {trash.lastEmptied}</p>
          <p className="text-sm text-gray-800">Number of Empties: {trash.numEmpties}</p>
          <button
            className="text-xs text-blue-500 font-bold mt-4"
            onClick={handleCurrentStatusClick}
          >
            {showCurrentStatus ? 'Hide Current Status' : 'View Current Status'}
          </button>
          {showCurrentStatus && (
            <div className="mt-4">
              <p className="text-sm text-gray-800">Current Fill Level: {trash.currentFillLevel}%</p>
              <p className="text-sm text-gray-800">Last Updated: {trash.lastUpdated}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryDetails;
