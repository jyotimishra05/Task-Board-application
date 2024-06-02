import React, { useState } from "react";
import { FaSearch, FaPen } from "react-icons/fa";
import Board from "../components/Board";

const BoardPage = ({ open }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center">
        <div className="p-7 text-xl font-semibold flex flex-row space-x-4">
          <h1>Task Boards</h1>
          <span className="text-gray-400 cursor-pointer">
            <FaPen />
          </span>
        </div>
        <div className="relative mr-10 right-3">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <span className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400">
            <FaSearch />
          </span>
        </div>
      </div>
      <Board open={open} searchText={searchText} />
    </div>
  );
};

export default BoardPage;
