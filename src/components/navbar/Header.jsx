

// import React  from "react";
// import Icons from '../../utils/images'
// import { useNavigate } from "react-router";

// const Header = () => {
//   const navigate = useNavigate();
//   return (
//    <div className="w-full fixed top-0 left-0 right-0 z-60  bg-white backdrop-blur-md border-b border-white/10">
//     <div className="containerBox">
//      <header className="w-full z-50">
//       <div className="flex items-center justify-between px-4 sm:px-[120px] py-4">
//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src={Icons.navLogo} alt="Hitman Track" className="w-10 h-10" />
//           {/* <span className="text-xl font-bold">Hitman Track</span> */}
//         </div>

//         {/* Nav */}
//         <nav className="hidden md:flex gap-6 text-sm">
//           <a href="#" className="hover:text-red-400">Home</a>
//           <a href="#" className="hover:text-red-400">AI Trip Planner</a>
//           <a href="#" className="hover:text-red-400">Expedition Feed</a>
//           <a href="#" className="hover:text-red-400">Hitlists</a>
//           <a href="#" className="hover:text-red-400">Pricing</a>
//           <a href="#" className="hover:text-red-400">About</a>
//         </nav>

//         {/* Buttons */}
//         <div className="flex items-center gap-3">
//           <button onClick={()=>navigate('/signin')} className="px-4 py-1.5 border border-white rounded-full hover:bg-white hover:text-black transition">
//             Login
//           </button>
//           <button className="px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition">
//             Get Started
//           </button>
//         </div>
//       </div>
//     </header>
//    </div>
//    </div>
//   );
// };

// export default Header;


import React, { useState } from "react";
import Icons from "../../utils/images";
import { NavLink, useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const linkClass = "hover:text-red-400 transition";

  const navItems = [
    { label: "Home", path: "/" },
    { label: "AI Trip Planner", path: "/trip-planner" },
    { label: "Expedition Feed", path: "/expedition-feed" },
    { label: "Hitlists", path: "/hitlists" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "/about" },
  ];

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-white/10">
      <div className="containerBox">
        <header className="w-full">
          <div className="flex items-center justify-between px-4 sm:px-[120px] py-4">

            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <img src={Icons.navLogo} alt="Hitman Track" className="w-10 h-10" />
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex gap-6 text-sm">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? "text-red-500 font-semibold" : linkClass
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => navigate("/signin")}
                className="px-4 py-1.5 border border-black rounded-full hover:bg-black hover:text-white transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/signup")}
                className="px-4 py-1.5 bg-red-500 rounded-full hover:bg-red-600 transition"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden z-50 flex flex-col gap-1.5"
            >
              {/* 3 bars → animated */}
              <span
                className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                  open ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`h-0.5 w-6 bg-black transition-all duration-300 ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              ></span>
            </button>

          </div>
        </header>
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm md:hidden z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl z-50 p-6 pt-24
        transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col gap-6 text-lg">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 font-semibold"
                  : "text-gray-700 hover:text-red-400"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Buttons */}
        <div className="mt-10 flex flex-col gap-3">
       

          <button
            onClick={() => {
              navigate("/signup");
              setOpen(false);
            }}
            className="w-full py-2 bg-red-500 rounded-full hover:bg-red-600 transition"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

