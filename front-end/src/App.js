import React from 'react';
import logo from './logo.svg';
import { RiPhoneLine } from 'react-icons/ri';
import { AiFillFlag } from 'react-icons/ai';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-pink-700 flex flex-col justify-center items-center">
      <img src={logo} className="h-40 mb-8 animate-pulse" alt="logo" />
      <img src={AiFillFlag} className="w-full mb-12" alt="banner" />
      <h1 className="text-white text-5xl font-bold mb-4">Welcome to the Smart Trash Can App</h1>
      <p className="text-white text-2xl mb-8">Built by HAAV </p>
      <button className="bg-white text-purple-900 hover:bg-purple-900 hover:text-white rounded-lg px-8 py-4 font-bold transition duration-300 ease-in-out">Get Started</button>
      <div className="flex justify-center mt-16">
        <img src={RiPhoneLine} className="h-96" alt="phone" />
        <div className="ml-16 text-white">
          <h2 className="text-4xl font-bold mb-4">Introducing Our App</h2>
          <p className="text-xl mb-4">Experience the power of Raspberry Pi and Ultrasonic Sensor</p>
          <ul className="list-disc ml-6">
            <li className="mb-2">Beautifully designed user interface</li>
            <li className="mb-2">Seamless performance and stability for the trash can</li>
            <li>Intuitive and easy to use</li>
          </ul>
          <button className="bg-purple-900 text-white hover:bg-white hover:text-purple-900 rounded-lg px-8 py-4 font-bold mt-8 transition duration-300 ease-in-out">FAQs</button>
        </div>
      </div>
    </div>
  );
}

export default App;
