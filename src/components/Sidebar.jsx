import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Menu, Home, Package, Settings, LogOut, X, } from "lucide-react";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };




  return (
    <>
      {isOpen && (
        <div className="fixed h-screen inset-0 bg-black/40 z-40 md:hidden" onClick={toggleSidebar} />)}
      <div className={`fixed md:relative top-0 left-0  flex flex-col h-full flex-shrink-0  w-64 bg-gray-900 text-white z-50 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        md:translate-x-0`}
      >
        <div className="flex items-center justify-between p-6 border-b  border-white">
          <h1 className="text-lg font-semibold ">Shipping Admin</h1>
          <button onClick={toggleSidebar} className="md:hidden block"><X size={20} /></button>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Home className="w-5 h-5" />
            Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Package className="w-5 h-5" />
            Orders
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-2 text-gray-100 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 rounded-lg transition-colors">
            <Settings className="w-5 h-5" />
            Settings
          </a>
        </nav>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <button onClick={handleLogout} className="flex items-center gap-3 bg-white px-4 py-2 text-red-600 dark:text-red-400 rounded-lg w-full transition-colors text-lg" >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
