import React, { useState } from "react";
import {
  FaTrashAlt,
  FaBoxOpen,
  FaClock,
  FaClipboardList,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import trashData from "./Capture.js";

function HistoryDetails({ trashId }) {
  const trash = trashData.find((trash) => trash.id === trashId);
  const [showCurrentStatus, setShowCurrentStatus] = useState(false);
  const handleCurrentStatusClick = () =>
    setShowCurrentStatus(!showCurrentStatus);

  return (
    <div className="flex flex-col h-full justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full md:w-3/4 lg:w-1/2">
        <div className="bg-blue-500 py-3 px-4 text-white font-bold text-2xl flex items-center justify-between">
          <div className="flex items-center">
            <FaTrashAlt className="text-3xl mr-2" />
            <div>{trash.name} Details</div>
          </div>
          <FaBoxOpen className="text-3xl" />
        </div>
        <div className="p-4">
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <FaClipboardList className="text-xl text-gray-600 mr-2" />
              <p className="text-base text-gray-800 font-bold">
                Total Capacity:
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base text-gray-800 font-bold mr-2">
                {trash.totalCapacity} kg
              </p>
              <FaChevronDown className="text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <FaClipboardList className="text-xl text-gray-600 mr-2" />
              <p className="text-base text-gray-800 font-bold">
                Current Capacity:
              </p>
            </div>
            <div className="flex items-center">
              <p className="text-base text-gray-800 font-bold mr-2">
                {trash.currentCapacity} kg
              </p>
              <FaChevronDown className="text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <FaClock className="text-xl text-gray-600 mr-2" />
              <p className="text-base text-gray-800 font-bold">Last Emptied:</p>
            </div>
            <p className="text-base text-gray-800 font-bold">
              {trash.lastEmptied}
            </p>
          </div>
          <div className="flex justify-between mb-2">
            <div className="flex items-center">
              <FaClipboardList className="text-xl text-gray-600 mr-2" />
              <p className="text-base text-gray-800 font-bold">
                Number of Empties:
              </p>
            </div>
            <p className="text-base text-gray-800 font-bold">
              {trash.numEmpties}
            </p>
          </div>
          <button
            className="text-base text-white font-bold mt-4 bg-blue-500 hover:bg-blue-700 rounded-md px-4 py-2"
            onClick={handleCurrentStatusClick}
          >
            {showCurrentStatus ? (
              <>
                <FaChevronUp className="mr-2" /> Hide Current Status
              </>
            ) : (
              <>
                <FaChevronDown className="mr-2" /> Show Current Status
              </>
            )}
          </button>
          {showCurrentStatus && (
            <div className="mt-4">
              {trash.currentCapacity === 0 ? (
                <p className="text-base text-gray-800 font-bold">
                  The trash is currently empty
                </p>
              ) : (
                <>
                  <p className="text-base text-gray-800 font-bold">
                    Current Status:
                  </p>
                  <div className="bg-gray-200 h-8 rounded-full relative">
                    <div
                      className="bg-green-500 absolute h-full rounded-full transition-all duration-500 ease-in-out"
                      style={{
                        width: `${
                          (trash.currentCapacity / trash.totalCapacity) * 100
                        }%`,
                      }}
                    ></div>
                    <p className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 text-xs text-gray-600 font-bold">
                      {`${Math.round(
                        (trash.currentCapacity / trash.totalCapacity) * 100
                      )}% Full`}
                    </p>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HistoryDetails;
