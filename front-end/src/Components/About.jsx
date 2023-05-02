import React from 'react';
import trashIcon from './trash.svg';

function About() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-2xl font-bold text-gray-800">About HAAV's Smart Trash Can</h2>
      </div>
      <div className="px-4 py-2">
        <p className="text-gray-600 text-lg mb-4">
          At HAAV, we're passionate about using technology to create sustainable solutions for everyday problems. Our Smart Trash Can is a perfect example of that.
        </p>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <h3 className="text-gray-600 font-medium">Built with Raspberry Pi and Ultrasonic Sensor</h3>
              <p className="text-xs text-gray-500">Our Smart Trash Can uses Raspberry Pi and Ultrasonic Sensor to accurately detect the amount of waste in the can.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <h3 className="text-gray-600 font-medium">Designed to Promote Recycling</h3>
              <p className="text-xs text-gray-500">Our Smart Trash Can encourages people to recycle by providing real-time feedback on the amount of recyclable materials in the can.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
            <div>
              <h3 className="text-gray-600 font-medium">Easy to Use and Maintain</h3>
              <p className="text-xs text-gray-500">Our Smart Trash Can is user-friendly and easy to maintain, making it a great addition to any home or business.</p>
            </div>
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-gray-600 font-medium mb-2">Join the Smart Trash Can Revolution Today!</h4>
          <p className="text-xs text-gray-500">Contact us to learn more about our product and how it can help make the world a cleaner and greener place.</p>
          <button className="bg-green-500 text-white rounded-full px-6 py-2 mt-4 hover:bg-green-600">Contact Us</button>
        </div>
      </div>
    </div>
  );
}

export default About;
