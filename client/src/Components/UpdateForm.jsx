import React, { useState } from "react";
import toast from "react-hot-toast";

const UpdateForm = ({ closeForm, data }) => {
  const [title, setTitle] = useState(data.title);
  const [description, setDescription] = useState(data.description);
  const [dueDate, setDueDate] = useState(data.dueDate);
  const [priority, setPriority] = useState(data.priority);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Retrieve and parse data from localStorage
    let storedData = JSON.parse(localStorage.getItem("taskData")) || [];

    // Find the index of the item to update by matching data.id
    const itemIndex = storedData.findIndex((item, index) => index === data.id);

    if (itemIndex !== -1) {
      // Update the item with the new values from the state variables
      storedData[itemIndex] = {
        ...storedData[itemIndex],
        title: title,
        description: description,
        dueDate: dueDate,
        priority: priority,
      };

      // Save the updated data array back to localStorage
      localStorage.setItem("taskData", JSON.stringify(storedData));
      console.log("Updated data:", storedData[itemIndex]);
    } else {
      console.log("Item not found in localStorage");
    }

    // Close the form
    closeForm(false);
  };

  return (
    <div className="bg-white p-3 border-gray-500  border rounded-lg shadow-lg w-full max-w-md mx-auto mt-5">
      <form onSubmit={handleSubmit}>
        {/* Title Field */}
        <div className="mb-3">
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Title"
          />
        </div>

        {/* Description Field */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            rows="2"
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter Description"
          />
        </div>

        {/* Due Date Field */}
        <div className="mb-4">
          <label
            htmlFor="dueDate"
            className="block text-sm font-medium text-gray-700"
          >
            Due Date
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          />
        </div>

        {/* Priority Level Field */}
        <div className="mb-4">
          <label
            htmlFor="priority"
            className="block text-sm font-medium text-gray-700"
          >
            Priority Level
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>

        {/* Submit Button */}
        <div className="flex justify-evenly mt-6 w-full">
          <button
            type="submit"
            className="w-2/5 bg-blue-900 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none transition-colors"
          >
            Update Task
          </button>
          <button
            className="w-2/5 bg-blue-900 text-white py-2 rounded-lg hover:bg-green-600 focus:outline-none transition-colors"
            onClick={() => closeForm(false)}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
