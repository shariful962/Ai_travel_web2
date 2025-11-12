import React from "react";
import { FiMapPin } from "react-icons/fi";

const Selected = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search logic here
    console.log("Form submitted!");
  };

  return (
    <div className="max-w-6xl mx-auto">
    <form
      onSubmit={handleSubmit}
      className="bg-[#000000] p-3 rounded-lg flex flex-wrap items-center justify-center gap-3 w-full max-w-5xl "
    >
      {/* Location */}
      <div className="flex items-center gap-2 bg-[#1c1c1c] px-3 py-2 rounded-md w-full sm:w-auto">
        <FiMapPin className="text-gray-400" />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="bg-transparent outline-none text-gray-200 placeholder-gray-500"
        />
      </div>

      {/* Duration */}
      <input
        type="text"
        name="duration"
        placeholder="Write your duration"
        className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 placeholder-gray-500 outline-none w-full sm:w-auto"
      />

      {/* Budget */}
      <select
        name="budget"
        className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none w-full sm:w-auto"
      >
        <option>Budget</option>
        <option>$ - Low</option>
        <option>$$ - Medium</option>
        <option>$$$ - High</option>
      </select>

      {/* Vibe */}
      <select
        name="vibe"
        className="bg-[#1c1c1c] px-3 py-2 rounded-md text-gray-200 outline-none w-full sm:w-auto"
      >
        <option>Vibe</option>
        <option>Relax</option>
        <option>Adventure</option>
        <option>Luxury</option>
      </select>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md font-semibold transition-all duration-200"
      >
        Explore
      </button>
    </form>
    </div>
  );
};

export default Selected;
