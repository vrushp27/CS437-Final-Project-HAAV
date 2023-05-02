import React, { useState } from 'react';
import trashIcon from './trash.svg';
import trashData from './Shared/Capture.js';
import HistoryDetails from './Shared/HistoryDetails.jsx';

function LiveFeed() {
  const [selectedTrashId, setSelectedTrashId] = useState(null);

  const handleViewHistory = (trashId) => {
    setSelectedTrashId(trashId);
  };

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
        <div className="bg-gray-800 py-2 px-4 text-white font-bold text-lg">Live Feed</div>
        <div className="p-4">
          {trashData.map((trash) => (
            <div key={trash.id} className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
                <div>
                  <p className="text-sm text-gray-800">{trash.name}</p>
                  <p className="text-xs text-gray-500">Last updated: {trash.lastUpdated}</p>
                </div>
              </div>
              <button className="text-xs text-blue-500 font-bold" onClick={() => handleViewHistory(trash.id)}>View</button>
            </div>
          ))}
        </div>
      </div>
      {selectedTrashId && <HistoryDetails trashId={selectedTrashId} />}
    </div>
  );
}

export default LiveFeed;