
'use client';

import { useState } from 'react';
import playerData from "./playerdata.json";
import PlayerCard from "./players";

interface PlayerCardsProps {
    coins: number;
    setCoins: (coins: number) => void;
}

export default function PlayerCards({ coins, setCoins }: PlayerCardsProps) {
    const [selectedPlayerIds, setSelectedPlayerIds] = useState<number[]>([]);
    const [showSelected, setShowSelected] = useState(false);

    const handleSelectPlayer = (playerId: number) => {
        const player = playerData.find((p) => p.id === playerId);
        if (!player) return;

        if (selectedPlayerIds.includes(playerId)) {
            setSelectedPlayerIds((prev) => prev.filter((id) => id !== playerId));
            setCoins(coins + player.price);
        } else {
            if (coins >= player.price) {
                setSelectedPlayerIds((prev) => [...prev, playerId]);
                setCoins(coins - player.price);
            }
        }
    };

    const displayedPlayers = showSelected
        ? playerData.filter((player) => selectedPlayerIds.includes(player.id))
        : playerData;

    const totalCost = selectedPlayerIds.reduce((sum, id) => {
        const player = playerData.find((p) => p.id === id);
        return sum + (player?.price || 0);
    }, 0);

    return (
        <section id="players" className="bg-[#f6f4ee] py-18 sm:py-22">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-3">
                            <h2 id="squad" className="text-4xl font-black tracking-[-0.045em] text-[#10251d] md:text-5xl">
                                {showSelected ? 'Your Squad' : 'Available Players'}
                            </h2>
                            <p className="mt-3 max-w-md text-base leading-7 text-[#547061]">
                                {showSelected
                                    ? `You have selected ${selectedPlayerIds.length} player${selectedPlayerIds.length !== 1 ? 's' : ''} • Total: ${totalCost} coins`
                                    : "Choose your best cricketers to build an unbeatable team."
                                }
                            </p>
                        </div>
                        
                        {/* Toggle Buttons */}
                        <div className="flex self-start border border-[#10251d]/15 bg-white p-1 md:self-auto">
                            <button
                                onClick={() => setShowSelected(false)}
                                className={`px-5 py-2.5 text-sm font-bold transition-colors ${
                                    !showSelected
                                        ? 'bg-[#10251d] text-white'
                                        : 'text-[#547061] hover:bg-[#edf0e8]'
                                }`}
                            >
                                Available
                            </button>
                            <button
                                onClick={() => setShowSelected(true)}
                                className={`relative px-5 py-2.5 text-sm font-bold transition-colors ${
                                    showSelected
                                        ? 'bg-[#10251d] text-white'
                                        : 'text-[#547061] hover:bg-[#edf0e8]'
                                }`}
                            >
                                Selected
                                {selectedPlayerIds.length > 0 && (
                                    <span className="absolute -right-2 -top-2 grid h-5 w-5 place-items-center rounded-full bg-[#b7dc55] text-[10px] font-black text-[#10251d]">
                                        {selectedPlayerIds.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Player Grid */}
                <div className="grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {displayedPlayers.length > 0 ? (
                        displayedPlayers.map((player) => (
                            <PlayerCard
                                key={player.id}
                                player={player}
                                isSelected={selectedPlayerIds.includes(player.id)}
                                onSelect={handleSelectPlayer}
                                canAfford={coins >= player.price}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-16">
                            <div className="text-6xl mb-4">-</div>
                            <p className="text-gray-500 text-lg font-medium">No players selected yet</p>
                            <p className="text-gray-400 mt-2">Go to Available tab to start building your dream team!</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
