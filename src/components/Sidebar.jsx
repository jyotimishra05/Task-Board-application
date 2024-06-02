import React, { useState } from "react";
import {
  FaTasks,
  FaFileAlt,
  FaClipboard,
  FaChartLine,
  FaChartBar,
  FaCog,
  FaChevronDown,
  FaChevronRight,
 
} from "react-icons/fa";

const Sidebar = ({open}) => {
  const [activeItem, setActiveItem] = useState("Task");
  const [isDashboardExpanded, setIsDashboardExpanded] = useState(true);

  const menuItems = [
    { name: "Task", icon: <FaTasks /> },
    { name: "Drive File", icon: <FaFileAlt /> },
    { name: "Board", icon: <FaClipboard /> },
    { name: "Update Analytics", icon: <FaChartLine /> },
    { name: "CRM Dashboard", icon: <FaChartBar /> },
    { name: "Setting", icon: <FaCog /> },
  ];

  const handleItemClick = (name) => {
    setActiveItem(name);
  };

  const toggleDashboard = () => {
    setIsDashboardExpanded(!isDashboardExpanded);
  };

  return (
    <div>
      <aside className="h-screen">
        <nav className="h-full flex flex-col bg-white border-r shadow-sm">
          {open && 
            <h1 className={`border-b p-4 font-bold text-xl overflow-hidden`}>
              Dashboard
            </h1>}
          
          <div className="flex items-center justify-between px-4 py-2 ">
            {open && (
              <h1 className="font-semibold text-gray-400 text-xs py-4 overflow-x-hidden">
                DASHBOARDS
              </h1>
            )}

            <button onClick={toggleDashboard} className="focus:outline-none">
              {isDashboardExpanded ? <FaChevronDown /> : <FaChevronRight />}
            </button>
          </div>
          {isDashboardExpanded && (
            <ul className="flex-1 px-4">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleItemClick(item.name)}
                  className={`flex items-center p-2 cursor-pointer ${
                    activeItem === item.name ? "bg-blue-100" : ""
                  }`}
                >
                  <span className="mr-2 p-2" style={{ color: "blue" }}>
                    {item.icon}
                  </span>
                  <span className="overflow-hidden text-sm font-medium ">
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t flex p-4 ">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvJ14anYdkKq4d0LRhRh0a_u_Kh6DUQGHsQ&s"
              className="w-10 h-10 mr-5"
              alt="User"
            />
            <div className="flex justify-between items-center overflow-hidden">
              <div>
                <h4 className="font-semibold text-sm">Naincy Martino</h4>
                <span className="text-sm text-gray-400">Designer</span>
              </div>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROVUo6x1bMzEwP2VpFx4GMlG7oCgUKAphGHg&s"
                className="w-10 h-10"
                alt="Settings"
              />
            </div>
          </div>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
