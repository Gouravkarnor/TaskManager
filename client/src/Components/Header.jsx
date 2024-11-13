import React from "react";

const Header = () => {
  return (
    <header className="bg-slate-800 text-white p-4 shadow-lg select-none">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-5 ml-3">
          <img
            src="https://scontent.fixd1-1.fna.fbcdn.net/v/t39.30808-1/409292722_653922716937566_5277561425050439364_n.jpg?stp=dst-jpg_s200x200&_nc_cat=111&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=PToCGF_AHisQ7kNvgFLqeuK&_nc_zt=24&_nc_ht=scontent.fixd1-1.fna&_nc_gid=ADgzMJ5bvdBtDVC8dLNgVpC&oh=00_AYDrN655QcZ3SmKM7lT1Qm2ZBPmDfKHI-cswlcJoLqE-Pw&oe=673A4304"
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
