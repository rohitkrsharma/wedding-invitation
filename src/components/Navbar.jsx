import React from "react";

const Navbar = () => {
  return (
    <header className="relative bg-pink-100 py-3 md:py-6">
      <section
        className="relative bg-contain bg-no-repeat h-screen"
        style={{ backgroundImage: "url('./Images/Wedding-pana.png')" }}
      >
        <div className="absolute inset-0 z-10 text-center flex flex-col justify-center items-center mt-52 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-chivo font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500">ROHIT weds SUDHA</h1>
          <p className="text-lg md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-700 via-purple-500 to-pink-500 mt-4">
            March 6, 2025 | Let’s Celebrate Together
          </p>
          <img
            src="./Images/Welcome.png"
            alt="Welcome Illustration"
            className="block md:hidden mt-6 w-3/4"
          />
        </div>
      </section>
    </header>
  );
};

export default Navbar;
