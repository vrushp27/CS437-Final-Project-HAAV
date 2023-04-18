// import logo from './logo.svg';
// import { RiPhoneLine } from 'react-icons/ri';
// import { AiFillFlag } from 'react-icons/ai';
import trashIcon from './trash.svg';


function History() {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <div className="p-4 border-b">
      <h2 className="text-2xl font-bold text-gray-800">Smart Trash Can History Dashboard</h2>
    </div>
    <div className="px-4 py-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
          <div>
            <h3 className="text-gray-600 font-medium">Trash Can 1</h3>
            <p className="text-xs text-gray-500">Last emptied: 2023-04-15 10:30am</p>
          </div>
        </div>
        <p className="text-xs text-green-500">Empty</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
          <div>
            <h3 className="text-gray-600 font-medium">Trash Can 2</h3>
            <p className="text-xs text-gray-500">Last emptied: 2023-04-14 1:45pm</p>
          </div>
        </div>
        <p className="text-xs text-red-500">Full</p>
      </div>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
          <div>
            <h3 className="text-gray-600 font-medium">Trash Can 3</h3>
            <p className="text-xs text-gray-500">Last emptied: 2023-04-12 8:15am</p>
          </div>
        </div>
        <p className="text-xs text-green-500">Empty</p>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src={trashIcon} alt="Trash Can Icon" className="w-6 h-6 mr-2" />
          <div>
            <h3 className="text-gray-600 font-medium">Trash Can 4</h3>
            <p className="text-xs text-gray-500">Last emptied: 2023-04-10 5:30pm</p>
          </div>
        </div>
        <p className="text-xs text-yellow-500">Almost Full</p>
      </div>
    </div>
  </div>
  );
}

export default History;