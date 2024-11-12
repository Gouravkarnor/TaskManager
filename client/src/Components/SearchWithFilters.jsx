import React, { useState } from "react";

const SearchWithFilters = ({ setfilter, setPriority, setsearch }) => {
  const [selectedFilter, setSelectedFilter] = useState("Upcoming Tasks");
  const [selectedPriority, setselectedPriority] = useState("");

  const handleFilterChange = (event) => {
    const filter = event.target.value;
    setSelectedFilter(filter);
    setfilter(filter);
  };
  const handlePriorityChanged = (event) => {
    const filter = event.target.value;
    setselectedPriority(filter);
    setPriority(filter);
  };

  return (
    <div className="w-10/12 flex flex-col sm:flex-row items-center justify-center mx-auto mt-4 sm:space-y-0 sm:space-x-0">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search tasks..."
        className="xl:w-7/12 w-60 lg:w-7/12 border h-11 pl-3 rounded-md focus:outline-none border-gray-500"
        onChange={(e) => setsearch(e.target.value)}
      />
      {/* Filters Dropdown */}
      <div className="lg:w-4/12 xl:w-4/12 w-60 flex flex-row justify-between sm:justify-around mt-2">
        <select
          onChange={handleFilterChange}
          value={selectedFilter}
          className="xl:w-4/12 w-28 mt-0 border h-11 rounded-md border-gray-500 text-gray-700 bg-white text-xs lg:text-lg xl:text-lg "
        >
          <option value="" disabled>
            Select Filter
          </option>
          <option value="completed">Completed</option>
          <option value="Missed Tasks">Missed Tasks</option>
          <option value="Upcoming Tasks" selected>
            Upcoming Tasks
          </option>
          <option value="Upcoming Tasks">Clear Filter</option>
        </select>
        <select
          onChange={handlePriorityChanged}
          value={selectedPriority}
          className="xl:w-4/12 w-28 mt-0 border h-11 ml-2 rounded-md border-gray-500 text-gray-700 bg-white text-xs lg:text-lg xl:text-lg "
        >
          <option value="" disabled>
            Select Priority
          </option>
          <option value="High Priority">High Priority</option>
          <option value="Medium Priority">Medium Priority</option>
          <option value="Low Priority">Low Priority</option>
          <option value="">Clear Filter</option>
        </select>
      </div>
    </div>
  );
};

export default SearchWithFilters;
