// import React, { useState, useRef, useEffect } from "react";
// import { FiPlus, FiSearch } from "react-icons/fi";
// import { FaMicrophone } from "react-icons/fa";

// export default function TripPlanner() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hey there! Tell me where you’d like to go " },
//   ]);
//   const [input, setInput] = useState("");
//   const chatBoxRef = useRef(null);

//   // Auto-scroll chat box only
//   useEffect(() => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   const handleSend = (e) => {
//     if (e.key === "Enter" && input.trim() !== "") {
//       const userMessage = { sender: "user", text: input };
//       setMessages((prev) => [...prev, userMessage]);
//       setInput("");

//       // Simulate bot reply
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           { sender: "bot", text: `Got it! Planning a trip to " ${input} "` },
//         ]);
//       }, 600);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white">
//       {/* Sidebar */}
//       <div className="w-64 bg-[#2a2a2a] border-r border-gray-700 flex flex-col p-4 pt-32">
//         <button className="flex items-center justify-center bg-[#1e1e1e] rounded-md py-2 mb-4 cursor-pointer">
//           <FiPlus className="mr-2" /> New Chat
//         </button>

//         <div className="relative mb-4">
//           <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search chats..."
//             className="bg-[#1e1e1e] w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none placeholder:text-gray-500"
//           />
//         </div>

//         <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
//           <p className="text-xs text-gray-400 mb-1">Recent Chats</p>
//           {["Trip to Japan", "Europe Plan", "Weekend Getaway"].map(
//             (title, i) => (
//               <div
//                 key={i}
//                 className="bg-[#1e1e1e] hover:bg-[#3a3a3a] transition rounded-md px-3 py-2 text-sm cursor-pointer"
//               >
//                 {title}
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       {/* Main Chat Section */}
//       <div className="flex-1 flex flex-col items-center justify-center p-4">
//         <p className="text-sm mb-6 text-gray-300 text-center pt-28 ">
//           Just tell us where you want to go and we will create your perfect trip.
//         </p>

//         <div className="bg-transparent rounded-2xl p-4 w-full max-w-[700px] min-h-[calc(85vh-112px)] flex flex-col shadow-md">
//           {/* Scrollable Chat Box */}
//           <div
//             ref={chatBoxRef}
//             className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-700"
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-2xl text-sm max-w-[80%] break-words ${
//                     msg.sender === "user"
//                       ? "bg-[#090808] text-white rounded-br-none"
//                       : "bg-dark text-gray-100 rounded-bl-none"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div className="flex items-center bg-white rounded-full px-4 py-4">
//             <FiPlus className="text-gray-400 text-lg mr-3 cursor-pointer" />
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleSend}
//               placeholder="Type your destination..."
//               className="bg-transparent outline-none text-sm text-gray-500 flex-grow placeholder:text-gray-500"
//             />
//             <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }





// import React, { useState, useRef, useEffect } from "react";
// import { FiPlus, FiSearch, FiMenu, FiX } from "react-icons/fi";
// import { FaMicrophone } from "react-icons/fa";

// export default function TripPlanner() {
//   const [messages, setMessages] = useState([
//     { sender: "bot", text: "Hey there! Tell me where you’d like to go 🌍" },
//   ]);
//   const [input, setInput] = useState("");
//   const [sidebarOpen, setSidebarOpen] = useState(false);
//   const chatBoxRef = useRef(null);

//   // Auto-scroll chat box (not full screen)
//   useEffect(() => {
//     if (chatBoxRef.current) {
//       chatBoxRef.current.scrollTo({
//         top: chatBoxRef.current.scrollHeight,
//         behavior: "smooth",
//       });
//     }
//   }, [messages]);

//   const handleSend = (e) => {
//     if (e.key === "Enter" && input.trim() !== "") {
//       const userMessage = { sender: "user", text: input };
//       setMessages((prev) => [...prev, userMessage]);
//       setInput("");

//       // Simulate bot reply
//       setTimeout(() => {
//         setMessages((prev) => [
//           ...prev,
//           { sender: "bot", text: `Got it! Planning a trip to "${input}" 😎` },
//         ]);
//       }, 600);
//     }
//   };

//   return (
//     <div className="flex h-screen bg-[#1e1e1e] text-white relative overflow-hidden">
//       {/* Sidebar */}
//       <div
//         className={`fixed md:static pt-32 top-0 left-0 h-full w-64 bg-[#2a2a2a] border-r border-gray-700 flex flex-col p-4 z-20 transform transition-transform duration-300
//         ${sidebarOpen ? "translate-x-0" : "-translate-x-full sm:mt-0  mt-32  md:translate-x-0"}`}
//       >
//         {/* Close button on mobile */}
//         <button
//           className="md:hidden self-end text-gray-400 hover:text-white mb-3"
//           onClick={() => setSidebarOpen(false)}
//         >
//           <FiX size={20} />
//         </button>

//         <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 transition rounded-md py-2 mb-4">
//           <FiPlus className="mr-2" /> New Chat
//         </button>

//         <div className="relative mb-4">
//           <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
//           <input
//             type="text"
//             placeholder="Search chats..."
//             className="bg-[#1e1e1e] w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none placeholder:text-gray-500"
//           />
//         </div>

//         <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
//           <p className="text-xs text-gray-400 mb-1">Recent Chats</p>
//           {["Trip to Japan", "Europe Plan", "Weekend Getaway"].map(
//             (title, i) => (
//               <div
//                 key={i}
//                 className="bg-[#1e1e1e] hover:bg-[#3a3a3a] transition rounded-md px-3 py-2 text-sm cursor-pointer"
//               >
//                 {title}
//               </div>
//             )
//           )}
//         </div>
//       </div>

//       {/* Sidebar overlay for mobile */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
//           onClick={() => setSidebarOpen(false)}
//         ></div>
//       )}

//       {/* Main Chat Section */}
//       <div className="flex-1 flex flex-col items-center justify-center p-4">
//         {/* Mobile menu button */}
//         <button
//           className="absolute top-4 left-4 md:hidden bg-[#2a2a2a] p-2 rounded-md text-gray-300 hover:bg-[#3a3a3a] z-10"
//           onClick={() => setSidebarOpen(true)}
//         >
//           <FiMenu size={20} />
//         </button>

//         <p className="text-sm mb-6 text-gray-300 text-center mt-10 md:mt-0">
//           Just tell us where you want to go and we will create your perfect trip.
//         </p>

//         <div className="bg-[#2c2c2c] rounded-2xl p-4 w-full max-w-md h-[70vh] flex flex-col shadow-md">
//           {/* Scrollable Chat Box */}
//           <div
//             ref={chatBoxRef}
//             className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-thin scrollbar-thumb-gray-700"
//           >
//             {messages.map((msg, index) => (
//               <div
//                 key={index}
//                 className={`flex ${
//                   msg.sender === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`p-3 rounded-2xl text-sm max-w-[80%] break-words ${
//                     msg.sender === "user"
//                       ? "bg-blue-600 text-white rounded-br-none"
//                       : "bg-gray-700 text-gray-100 rounded-bl-none"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Input Box */}
//           <div className="flex items-center bg-[#1e1e1e] rounded-full px-4 py-2">
//             <FiPlus className="text-gray-400 text-lg mr-3" />
//             <input
//               type="text"
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               onKeyDown={handleSend}
//               placeholder="Type your destination..."
//               className="bg-transparent outline-none text-sm text-gray-300 flex-grow placeholder:text-gray-500"
//             />
//             <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







import React, { useState, useRef, useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import TripCard from "./TripCard"

export default function TripPlanner() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hey there! Tell me where you’d like to go " },
  ]);
  const [input, setInput] = useState("");
  const chatBoxRef = useRef(null);

  // Auto-scroll chat box only
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top: chatBoxRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  const handleSend = (e) => {
    if (e.key === "Enter" && input.trim() !== "") {
      const userMessage = { sender: "user", text: input };
      setMessages((prev) => [...prev, userMessage]);
      const userInput = input;
      setInput("");

      // Simulate bot reply
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { sender: "bot", type: "tripCard", destination: userInput },
        ]);
      }, 600);
    }
  };

  return (
    <div className="flex h-screen bg-[#1e1e1e] text-white">
      {/* Sidebar */}
      <div className="w-64 bg-[#2a2a2a] border-r border-gray-700 flex flex-col p-4 pt-32">
        <button className="flex items-center justify-center bg-[#1e1e1e] rounded-md py-2 mb-4 cursor-pointer">
          <FiPlus className="mr-2" /> New Chat
        </button>

        <div className="relative mb-4">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search chats..."
            className="bg-[#1e1e1e] w-full rounded-md pl-9 pr-3 py-2 text-sm text-gray-300 outline-none placeholder:text-gray-500"
          />
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 scrollbar-thin scrollbar-thumb-gray-700">
          <p className="text-xs text-gray-400 mb-1">Recent Chats</p>
          {["Trip to Japan", "Europe Plan", "Weekend Getaway"].map(
            (title, i) => (
              <div
                key={i}
                className="bg-[#1e1e1e] hover:bg-[#3a3a3a] transition rounded-md px-3 py-2 text-sm cursor-pointer"
              >
                {title}
              </div>
            )
          )}
        </div>
      </div>

      {/* Main Chat Section */}
      <div className="flex-1 flex flex-col items-center justify-center p-4">
        <p className="text-sm mb-6 text-gray-300 text-center pt-28 ">
          Just tell us where you want to go and we will create your perfect trip.
        </p>

        <div className="bg-transparent rounded-2xl p-4 w-full max-w-[700px] min-h-[calc(85vh-112px)] flex flex-col overflow-y-auto shadow-md">
          {/* Scrollable Chat Box */}
          <div
            ref={chatBoxRef}
            className="flex-1 overflow-y-auto mb-3 space-y-3 scrollbar-hide"
          >
             {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div className="max-w-[80%]">
                  {msg.type === "tripCard" ? (
                    <TripCard destination={msg.destination} />
                  ) : (
                    <div
                      className={`p-3 rounded-2xl text-sm break-words ${
                        msg.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-gray-700 text-gray-100 rounded-bl-none"
                      }`}
                    >
                      {msg.text}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Box */}
          <div className="flex items-center bg-white rounded-full px-4 py-4">
            <FiPlus className="text-gray-400 text-lg mr-3 cursor-pointer" />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleSend}
              placeholder="Type your destination..."
              className="bg-transparent outline-none text-sm text-gray-500 flex-grow placeholder:text-gray-500"
            />
            <FaMicrophone className="text-gray-400 text-lg ml-3 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
