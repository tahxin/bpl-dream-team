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
    <article className={`group relative overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(16,37,29,.12)] ${
      isSelected ? 'border-[#4b7a24] ring-2 ring-[#b7dc55]' : 'border-[#10251d]/15'
    }`}>
      {/* Rating Badge */}
      <div className="absolute right-3 top-3 z-10">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#10251d] text-sm font-black text-[#b7dc55] shadow-lg">
          {player.rating}
        </span>
      </div>

      {/* Image */}
      <figure className="h-52 overflow-hidden bg-[#d8ded2]">
        <img 
          className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
          src={player.image} 
          alt={player.name} 
        />
      </figure>

      {/* Content */}
      <div className="space-y-4 p-5">
        {/* Name and Country */}
        <div className="space-y-1">
          <h3 className="text-lg font-black tracking-[-0.02em] text-[#10251d] line-clamp-2">
            {player.name}
          </h3>
          <p className="text-sm font-medium text-[#638070]">{player.country}</p>
        </div>

        {/* Role */}
        <div className="inline-block">
          <p className="inline-block border border-[#10251d]/15 bg-[#edf0e8] px-2.5 py-1 text-[11px] font-bold text-[#345142]">
            {player.role}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-px bg-[#10251d]/15 text-xs">
          <div className="bg-[#f6f4ee] p-2.5">
            <p className="font-semibold text-[#638070]">Position</p>
            <p className="mt-0.5 font-bold text-[#10251d]">{player.position}</p>
          </div>
          <div className="bg-[#f6f4ee] p-2.5">
            <p className="font-semibold text-[#638070]">Batting</p>
            <p className="mt-0.5 font-bold text-[#10251d]">{player.battingStyle.replace('-Hand Bat', '')}</p>
          </div>
          <div className="col-span-2 bg-[#f6f4ee] p-2.5">
            <p className="font-semibold text-[#638070]">Bowling</p>
            <p className="mt-0.5 truncate font-bold text-[#10251d]">{player.bowlingStyle}</p>
          </div>
        </div>

        {/* Price */}
        <div className="border-t border-[#10251d]/12 pt-3">
          <p className={`text-2xl font-bold ${
            isSelected ? 'text-[#4b7a24]' : 'text-[#10251d]'
          }`}>
            {player.price} <span className="text-sm font-semibold">coins</span>
          </p>
        </div>

        {/* Button */}
        <button 
          type="button" 
          onClick={() => onSelect(player.id)}
          disabled={!isSelected && !canAfford}
          className={`min-h-11 w-full font-bold transition-colors ${
            isSelected 
              ? 'bg-[#4b7a24] text-white hover:bg-[#365d17]'
              : canAfford
              ? 'bg-[#10251d] text-white hover:bg-[#1a3a2d]'
              : 'cursor-not-allowed bg-[#e1e5dc] text-[#829085]'
          }`}
        >
          {isSelected ? 'Selected' : canAfford ? 'Select' : 'Not Enough Coins'}
        </button>
      </div>
    </article>
  );
}
