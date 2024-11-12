import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-lg select-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-5 ml-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq0yMPeS8WMqHagfUXq7ybxtuUBf9ZgF6K4A&s"
            alt="App Logo"
            className="w-10 h-10"
          />
          <span className="text-2xl font-bold ml-3">Task Manager</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
