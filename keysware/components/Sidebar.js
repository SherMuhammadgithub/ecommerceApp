import React , { useState } from 'react'

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

const toggleSidebar = () => {
  setIsSidebarOpen(!isSidebarOpen);
};
  return (
    <div
      className={`bg-gray-800 text-white z-10 fixed top-0 right-0 h-full w-64 transition-transform duration-300 transform ${
        isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button onClick={toggleSidebar} className="absolute top-4 right-4 z-10">
        Toggle Sidebar
      </button>
      {/* Sidebar content */}
      <h2 className='font-bold text-xl'>Shopping cart</h2>
         <span  className="absolute top-5 right-2 cursor-pointer text-2xl text-purple-700"> sdsdsd </span>
         <ol>
          <li>
            <div>Tshirts - Keysware</div>
          </li>
          </ol>
    </div>
   
   
   
  )
}

export default Sidebar
