import React, { useContext } from 'react'
import { Menu } from "lucide-react";
import { AuthContext } from '../context/AuthContext'

const Header = ({ toggleSidebar }) => {

  const { user } = useContext(AuthContext);


  return (
    <>

      <div className='bg-white border-b border-gray-200 px-6  h-20 flex items-center justify-between'>
        <button onClick={toggleSidebar} className="md:hidden text-gray-700">
          <Menu size={24} />
        </button>
        <h2 className='text-xl font-semibold hidden md:block '>
          Shipping Management Dashboard
        </h2>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full bg-blue-600 text-white hidden sm:flex items-center justify-center text-sm">
            {user?.email?.charAt(0).toUpperCase()}
          </div>
          <span className="text-sm font-medium">
            {user?.email}
          </span>

        </div>
      </div>

    </>

  )
}

export default Header;
