// import React from "react";
// import { Heart, MessageCircle, Share2 } from "lucide-react";
// import { RiShareForwardLine } from "react-icons/ri";
// import { IoLocationOutline } from "react-icons/io5";
// import Icons from "../../utils/images";
// import Selected from "../../common/Selected";

// const Expedition = () => {
//   return (
//     <div className="my-20 max-w-6xl mx-auto px-4">
//       <h1 className="text-3xl md:text-[42px]  font-semibold text-Primary mt-28 mb-6 ml-3">
//         Expedition Feed
//       </h1>
//       <Selected />
//       <h1 className="text-2xl text-center text-white font-medium mt-6">
//         Expedition Feed
//       </h1>
//       <div className="mt-10 space-y-10">
//         <div className="  bg-dark2 text-white rounded-2xl  w-full max-w-[730px] mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-3 p-4">
//             <div className="flex items-center gap-3">
//               <img
//                 src={Icons.profile1}
//                 alt="profile"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-medium">Anne Jones</p>
//                 <p className="text-xs text-white/50">25m ago</p>
//               </div>
//             </div>
//             <p className="text-xs text-zinc-400">
//               {" "}
//               <IoLocationOutline size={18} className="inline" /> Italy
//             </p>
//           </div>

//           {/* Caption */}
//           <p className="mb-3 px-4">Hitman Jack planning so easy and convinient</p>

//           {/* Image */}
//           <div className=" overflow-hidden">
//             <img
//               src={Icons.expedition1}
//               alt="Venice bridge"
//               className="w-full h-[350px] object-cover "
//             />
//           </div>

//           {/* Actions */}
//           <div className="flex justify-around py-8  border-zinc-800 ">
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <Heart size={18} /> Like
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <MessageCircle size={18} /> Comment
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <RiShareForwardLine size={24} /> Share
//             </button>
//           </div>
//         </div>

//          <div className="  bg-dark2 text-white rounded-2xl  w-full max-w-[730px] mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 mb-3">
//             <div className="flex items-center gap-3">
//               <img
//                 src={Icons.profile1}
//                 alt="profile"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-medium">Joshef Marlow</p>
//                 <p className="text-xs text-white/50">1h ago</p>
//               </div>
//             </div>
//             <p className="text-xs text-zinc-400">
//               {" "}
//               <IoLocationOutline size={18} className="inline" /> Portugal
//             </p>
//           </div>

//           {/* Caption */}
//           {/* <p className="mb-3 px-4">Hitman Jack planning so easy and convinient</p> */}

//           {/* Image */}
//           <div className="overflow-hidden">
//             <img
//               src={Icons.expedition2}
//               alt="Venice bridge"
//               className="w-full h-[350px] object-cover"
//             />
//           </div>

//           {/* Actions */}
//           <div className="flex justify-around py-8  border-zinc-800 ">
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <Heart size={18} /> Like
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <MessageCircle size={18} /> Comment
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <RiShareForwardLine size={24} /> Share
//             </button>
//           </div>
//         </div>

//         <div className="  bg-dark2 text-white rounded-2xl  w-full max-w-[730px] mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 mb-3">
//             <div className="flex items-center gap-3">
//               <img
//                 src={Icons.profile1}
//                 alt="profile"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-medium">Anne Jones</p>
//                 <p className="text-xs text-white/50">25m ago</p>
//               </div>
//             </div>
//             <p className="text-xs text-zinc-400">
//               {" "}
//               <IoLocationOutline size={18} className="inline" /> Italy
//             </p>
//           </div>

//           {/* Caption */}
//           <p className="mb-3 px-4">The is so damn awosome with Hitman Jack. You should definetely try to make a trip for you. It is very eassy and convenient</p>

//           {/* Image */}
//           {/* <div className="rounded-xl overflow-hidden">
//             <img
//               src={Icons.expedition1}
//               alt="Venice bridge"
//               className="w-full h-[450px] object-cover "
//             />
//           </div> */}

//           {/* Actions */}
//           <div className="flex justify-around py-8  border-zinc-800">
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <Heart size={18} /> Like
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <MessageCircle size={18} /> Comment
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//              <RiShareForwardLine size={24} /> Share
//             </button>
//           </div>
//         </div>

//         <div className="  bg-dark2 text-white rounded-2xl w-full max-w-[730px] mx-auto">
//           {/* Header */}
//           <div className="flex items-center justify-between p-4 mb-3">
//             <div className="flex items-center gap-3">
//               <img
//                 src={Icons.profile1}
//                 alt="profile"
//                 className="w-12 h-12 rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-lg font-medium">Shakib Al Hasan</p>
//                 <p className="text-xs text-white/50">1h ago</p>
//               </div>
//             </div>
//             <p className="text-xs text-zinc-400">
//               {" "}
//               <IoLocationOutline size={18} className="inline" /> Italy
//             </p>
//           </div>

//           {/* Caption */}
//           <p className="mb-3 px-4">The plan was so damn awosome with #HitmanJack</p>

//           {/* Image */}
//           <div className="overflow-hidden">
//             <img
//               src={Icons.expedition3}
//               alt="Venice bridge"
//               className="w-full h-[350px] object-cover "
//             />
//           </div>

//           {/* Actions */}
//           <div className="flex justify-around py-8  border-zinc-800">
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <Heart size={18} /> Like
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <MessageCircle size={18} /> Comment
//             </button>
//             <button className="flex items-center gap-2 text-white cursor-pointer">
//               <RiShareForwardLine size={24} /> Share
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Expedition;

import PostCard from "./PostCard";
import Icons from "../../utils/images";
import Selected from "../../common/Selected";

const Expedition = () => {
  return (
    <div className="my-20 max-w-6xl mx-auto px-4">
      <h1 className="text-3xl md:text-[42px] font-semibold text-Primary mt-28 mb-6 ml-3">
        Expedition Feed
      </h1>

      <Selected />

      <h1 className="text-2xl text-center text-white font-medium mt-6">
        Expedition Feed
      </h1>

      <div className="mt-10">
        <PostCard
          profile={Icons.profile1}
          name="Anne Jones"
          time="25m ago"
          location="Italy"
          caption="Hitman Jack planning so easy and convenient"
          image={Icons.expedition1}
        />

        <PostCard
          profile={Icons.profile1}
          name="Joshef Marlow"
          time="1h ago"
          location="Portugal"
          image={Icons.expedition2}
        />

        <PostCard
          profile={Icons.profile1}
          name="Anne Jones"
          time="25m ago"
          location="Italy"
          caption="The plan was so damn awesome with Hitman Jack!"
        />

        <PostCard
          profile={Icons.profile1}
          name="Shakib Al Hasan"
          time="1h ago"
          location="Italy"
          caption="The plan was so awesome with #HitmanJack"
          image={Icons.expedition3}
        />
      </div>
    </div>
  );
};

export default Expedition;

