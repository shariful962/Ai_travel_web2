import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

export default function EditProfile() {
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setProfileImage(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //   submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-[#1e1e1e] flex items-center justify-center pt-20">
      <div className="bg-black text-white p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-gray-200">Edit Profile</h2>

        {/* Profile Image */}
        <div className="flex justify-center mb-6 relative">
          <label className="cursor-pointer">
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-600 relative">
              <img
                src={
                  profileImage ||
                  "https://via.placeholder.com/150x150.png?text=Profile"
                }
                alt="Profile"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition">
                <span className="text-sm">Change</span>
              </div>
            </div>
          </label>
        </div>

        {/* Form Start */}
        <form onSubmit={handleSubmit}>
          {/* Full Name */}
          <div className="mb-4">
            <label className="block text-sm mb-1 text-gray-400">Full Name</label>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
              required
            />
          </div>

          {/* Old Password */}
          <div className="mb-4 relative">
            <label className="block text-sm mb-1 text-gray-400">Old Password</label>
            <input
              type={showOldPassword ? "text" : "password"}
              placeholder="********"
              className="w-full p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowOldPassword(!showOldPassword)}
              className="absolute right-2 top-8 text-gray-400"
            >
              {showOldPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* New Password */}
          <div className="mb-6 relative">
            <label className="block text-sm mb-1 text-gray-400">New Password</label>
            <input
              type={showNewPassword ? "text" : "password"}
              placeholder="********"
              className="w-full p-2 bg-transparent border border-gray-600 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500 pr-10"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-2 top-8 text-gray-400"
            >
              {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded-md transition"
          >
            Save & Change
          </button>
        </form>
        {/* Form End */}
      </div>
    </div>
  );
}
