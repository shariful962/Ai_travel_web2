import React from 'react'
import { Heart, MessageCircle, Share2 } from "lucide-react";
import Icons from '../../utils/images';
import Selected from '../../common/Selected';

const Expedition = () => {

  return (
    <div className='my-20'>
      <Selected />
     <div className="  bg-zinc-900 text-white rounded-2xl p-4 w-full max-w-md mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <img
            src="https://via.placeholder.com/40"
            alt="profile"
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">Anne Jones</p>
            <p className="text-xs text-zinc-400">25m ago</p>
          </div>
        </div>
        <p className="text-xs text-zinc-400">📍 Italy</p>
      </div>

      {/* Caption */}
      <p className="mb-3">
        Hitman Jack planning so easy and convinient
      </p>

      {/* Image */}
      <div className="rounded-xl overflow-hidden">
        <img
          src={Icons.expedition1}
          alt="Venice bridge"
          className="w-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-around mt-3 pt-3 border-t border-zinc-800">
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
          <Heart size={18} /> Like
        </button>
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
          <MessageCircle size={18} /> Comment
        </button>
        <button className="flex items-center gap-2 text-zinc-400 hover:text-white transition">
          <Share2 size={18} /> Share
        </button>
      </div>
    </div>
    </div>
  )
}

export default Expedition
