import React, { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
const TaskCard = ({
  title,
  priority,
  description,
  dueDate,
  id,
  updatecards,
  completed,
  showform,
  formdata,
}) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  const toggleDescription = () => setShowDescription(!showDescription);
  const toggleMenu = () => setShowMenu(!showMenu);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const editTask = (id, updatedData) => {
    // Retrieve existing tasks from localStorage
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

    // Find index of the task to be updated
    // const taskIndex = existingTasks.findIndex((task) => task.id === id);
    const data = {
      id,
      title,
      description,
      dueDate,
      iscompleted: completed,
      priority,
    };
    formdata(data);
    showform((prev) => !prev);
  };

  const deleteTask = (id) => {
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];
    console.log(existingTasks);
    const updatedTasks = existingTasks.filter((task, index) => index !== id);
    // Save the updated tasks array back to localStorage
    console.log(updatedTasks);
    localStorage.setItem("taskData", JSON.stringify(updatedTasks));
    updatecards((prev) => !prev);
    setShowMenu(false);
    toast.success("Task Deleted Successfully !");
  };

  const setTaskCompleted = (id) => {
    // Retrieve existing tasks from localStorage
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

    // Find the task and mark it as completed
    const taskIndex = existingTasks.findIndex((task, index) => index === id);

    if (taskIndex !== -1) {
      // Set the iscompleted flag to true
      existingTasks[taskIndex].iscompleted = true;
      // Save the updated tasks array back to localStorage
      localStorage.setItem("taskData", JSON.stringify(existingTasks));
      updatecards((prev) => !prev);
      setShowMenu(false);
      toast.success("Task Completed !");
    }
  };
  const setTaskNotCompleted = (id) => {
    // Retrieve existing tasks from localStorage
    const existingTasks = JSON.parse(localStorage.getItem("taskData")) || [];

    // Find the task and mark it as completed
    const taskIndex = existingTasks.findIndex((task, index) => index === id);

    if (taskIndex !== -1) {
      // Set the iscompleted flag to true
      existingTasks[taskIndex].iscompleted = false;
      // Save the updated tasks array back to localStorage
      localStorage.setItem("taskData", JSON.stringify(existingTasks));
      updatecards((prev) => !prev);
      setShowMenu(false);
      toast.success("Task Updated !");
    }
  };

  return (
    <div className="relative w-full md:w-4/5 lg:w-4/5 mt-7 mx-auto bg-white shadow-lg rounded-lg overflow-visible">
      <div className="p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 relative">
        {/* Left: Title, Priority, and Due Date */}
        <h2 className="font-semibold text-gray-800 sm:text-sx md:text-sm lg:text-base xl:text-xl">
          {title}
        </h2>
        <div className="flex flex-row justify-between w-full sm:w-3/5">
          <div
            className={`mt-2 sm:mt-0 px-1 py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ${
              priority === "high"
                ? "text-red-600"
                : priority === "medium"
                ? "text-yellow-400"
                : "text-green-600"
            }`}
          >
            {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
          </div>
          <div
            className={`mt-2 sm:mt-0 px-1 py-1 rounded-full text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm ${
              completed === true ? "text-green-600" : "text-yellow-600"
            }`}
          >
            {completed ? <span>Completed ✅</span> : <span>Pending ⚠️</span>}
          </div>

          <p className="mt-2 sm:mt-0 px-1 py-1 text-xs sm:text-sm md:text-sm lg:text-sm xl:text-sm">
            {dueDate}
          </p>

          {/* Three Dots Menu */}
          <div className="relative group" ref={menuRef}>
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-700 focus:outline-none text-xl"
            >
              ⋮
            </button>
            <span className="absolute right-0 -top-8 px-2 py-1 text-xs text-white bg-gray-700 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Menu
            </span>
            {showMenu && (
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
            )}
          </div>
        </div>
      </div>

      {/* Description Section */}
      {showDescription && (
        <>
          <hr />
          <p className="text-gray-600 mt-0 px-4 text-sm sm:text-sm md:text-sm lg:text-sm xl:text-lg">
            {description}
          </p>
        </>
      )}

      {/* Toggle View More / Less Button */}
      <div className="px-4">
        <button
          onClick={toggleDescription}
          className="text-blue-500 hover:underline focus:outline-none text-sm"
        >
          {showDescription ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
