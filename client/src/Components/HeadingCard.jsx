import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
const HeadingCard = () => {
  return (
    <div className="hidden lg:block relative w-full md:w-4/5 lg:w-4/5 mt-7 mx-auto bg-slate-900 shadow-lg rounded-lg overflow-visible">
      <div className="p-2 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 relative">
        {/* Left: Title, Priority, and Due Date */}
        <h2 className="ml-7 font-semibold text-white text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
          Title
        </h2>
        <div className="flex flex-row justify-between w-full sm:w-3/5">
          <div className="font-semibold mt-2 sm:mt-0 px-1 py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white">
            Priority
          </div>
          <div className="font-semibold mt-2 sm:mt-0 px-1 py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white">
            Status
          </div>

          <p className="font-semibold mt-2 sm:mt-0 px-1 py-1 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm text-white">
            Due Date
          </p>

          <div className="relative group">
            {/* <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none text-xl"
            >
              ⋮
            </button> */}
            <span className="absolute right-0 -top-8 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            {/* {showMenu && (
              <div className="absolute top-full mt-2 right-0 w-32 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                <button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 focus:outline-none text-xs sm:text-sx md:text-sm lg:text-sm xl:text-sm"
                  onClick={() => editTask(id)}
                >
                  Edit
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 focus:outline-none text-xs sm:text-sx md:text-sm lg:text-sm xl:text-sm"
                  onClick={() => deleteTask(id)}
                >
                  Delete
                </button>
                <button
                  className="block w-full px-4 py-2 text-left text-gray-800 hover:bg-gray-100 focus:outline-none text-xs sm:text-sx md:text-sm lg:text-sm xl:text-sm"
                  onClick={() =>
                    !completed ? setTaskCompleted(id) : setTaskNotCompleted(id)
                  }
                >
                  {!completed ? "Set Completed " : "Set Not Completed"}
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>

      {/* Description Section */}
    </div>
  );
};

export default HeadingCard;
