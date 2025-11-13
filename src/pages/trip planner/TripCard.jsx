import React, { useState, useRef, useEffect } from "react";

const TripCard = ({ destination }) => {
  return (
    <div className="bg-[#111] text-white rounded-2xl p-3 w-full max-w-sm mx-auto shadow-lg border border-gray-800">
      <img
        src="https://images.unsplash.com/photo-1617196034796-ae84b164cb43?auto=format&fit=crop&w=800&q=60"
        alt={destination}
        className="w-full h-40 object-cover rounded-xl mb-3"
      />

      <h2 className="text-lg font-semibold mb-2">🌴 {destination} 3-Day Getaway</h2>
      <div className="flex items-center text-sm text-gray-300 gap-2 mb-2">
        <span>📅 3 days • 2 nights</span>
        <span>•</span>
        <span>📍 6 Spots</span>
      </div>

      <div className="flex gap-3 mb-3 text-yellow-400 text-sm">
        <span>🏖️ Beach</span>
        <span>🌿 Nature</span>
        <span>🍴 Food</span>
      </div>

      <p className="text-gray-400 text-xs mb-3">
        Explore the longest sea beach, scenic drives and local taste of Bangladesh’s coast,
        ideal for couples or weekend travelers.
      </p>

      <ul className="text-xs space-y-1 mb-4">
        <li>✔️ Day 1: Beach & Chill – Laboni Beach, Sugandha Sunset</li>
        <li>✔️ Day 2: Nature & Adventure – Himchari, Inani, Marine Drive</li>
        <li>✔️ Day 3: Local & Leisure – Fish Market, Burmese Market</li>
      </ul>

      <button className="bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full w-full py-2">
        View Details
      </button>
      <div className="flex justify-between text-xs text-gray-400 mt-2 px-1">
        <span>❤️</span>
        <span>↗️ Share</span>
      </div>
    </div>
  );
};
export default TripCard;