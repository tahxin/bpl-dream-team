'use client';

import type { IPlayerCards } from "./types";

interface PlayerCardProps {
  player: IPlayerCards;
  isSelected: boolean;
  onSelect: (playerId: number) => void;
  canAfford: boolean;
}

export default function PlayerCard({ player, isSelected, onSelect, canAfford }: PlayerCardProps) {
  return (
    <article className={`group relative card bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 overflow-hidden ${
      isSelected ? 'ring-2 ring-green-400' : ''
    }`}>
      {/* Rating Badge */}
      <div className="absolute top-3 right-3 z-10">
        <span className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-bold text-white shadow-lg ${
          player.rating >= 95 ? 'bg-purple-600' :
          player.rating >= 93 ? 'bg-blue-600' :
          player.rating >= 90 ? 'bg-amber-500' :
          'bg-gray-600'
        }`}>
          {player.rating}
        </span>
      </div>

      {/* Image */}
      <figure className="h-48 overflow-hidden bg-gray-300">
        <img 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={player.image} 
          alt={player.name} 
        />
      </figure>

      {/* Content */}
      <div className="card-body p-5 space-y-4">
        {/* Name and Country */}
        <div className="space-y-1">
          <h2 className="card-title text-lg font-bold text-gray-900 line-clamp-2">
            {player.name}
          </h2>
          <p className="text-sm text-gray-500 font-medium">{player.country}</p>
        </div>

        {/* Role */}
        <div className="inline-block">
          <p className="text-xs font-bold text-gray-700 bg-gray-100 px-3 py-1 rounded-full">
            {player.role}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <p className="text-gray-500 font-semibold">Position</p>
            <p className="text-gray-800 font-bold">{player.position}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200">
            <p className="text-gray-500 font-semibold">Batting</p>
            <p className="text-gray-800 font-bold">{player.battingStyle.replace('-Hand Bat', '')}</p>
          </div>
          <div className="bg-gray-50 p-2 rounded border border-gray-200 col-span-2">
            <p className="text-gray-500 font-semibold">Bowling</p>
            <p className="text-gray-800 font-bold truncate">{player.bowlingStyle}</p>
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-gray-200 pt-3">
          <p className={`text-2xl font-bold ${
            isSelected ? 'text-green-600' : 'text-gray-900'
          }`}>
            ₳{player.price}
          </p>
        </div>

        {/* Button */}
        <button 
          type="button" 
          onClick={() => onSelect(player.id)}
          disabled={!isSelected && !canAfford}
          className={`w-full btn btn-sm font-bold text-white border-0 transition-all duration-300 ${
            isSelected 
              ? 'bg-green-600 hover:bg-green-700 shadow-lg' 
              : canAfford
              ? 'bg-gray-800 hover:bg-gray-900 shadow-lg hover:shadow-xl'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSelected ? 'Selected' : canAfford ? 'Select' : 'Not Enough Coins'}
        </button>
      </div>
    </article>
  );
}