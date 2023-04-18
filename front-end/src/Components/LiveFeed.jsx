import React from 'react';
import trashIcon from './trash.svg';

function LiveFeed() {
  return (
    <div className="flex flex-col h-full justify-center items-center">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
      <div className="bg-gray-800 py-2 px-4 text-white font-bold text-lg">Live Feed</div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm text-gray-800">Trash Can 1</p>
              <p className="text-xs text-gray-500">Last updated: 2023-04-17 10:30am</p>
            </div>
          </div>
          <p className="text-xs text-green-500">Safe</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm text-gray-800">Trash Can 2</p>
              <p className="text-xs text-gray-500">Last updated: 2023-04-17 10:25am</p>
            </div>
          </div>
          <p className="text-xs text-red-500">Danger</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm text-gray-800">Trash Can 3</p>
              <p className="text-xs text-gray-500">Last updated: 2023-04-17 10:20am</p>
            </div>
          </div>
          <p className="text-xs text-green-500">Safe</p>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm text-gray-800">Trash Can 4</p>
              <p className="text-xs text-gray-500">Last updated: 2023-04-17 10:15am</p>
            </div>
          </div>
          <p className="text-xs text-yellow-500">Warning</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <p className="text-sm text-gray-800">Trash Can 5</p>
              <p className="text-xs text-gray-500">Last updated: 2023-04-17 10:10am</p>
            </div>
            </div>
            <p className="text-xs text-green-500">Safe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LiveFeed;