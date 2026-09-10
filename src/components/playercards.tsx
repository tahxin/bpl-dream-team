
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
        <section className="min-h-screen bg-white py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-12">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
        <div className="space-y-3">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                                {showSelected ? 'Your Squad' : 'Available Players'}
                            </h2>
                            <p className="text-lg text-gray-600 max-w-md">
                                {showSelected
                                    ? `You have selected ${selectedPlayerIds.length} player${selectedPlayerIds.length !== 1 ? 's' : ''} • Total: ${totalCost} coins`
                                    : "Choose your best cricketers to build an unbeatable team."
                                }
                            </p>
                        </div>
                        
                        {/* Toggle Buttons */}
                        <div className="flex gap-3 self-start md:self-auto">
                            <button
                                onClick={() => setShowSelected(false)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg ${
                                    !showSelected
                                        ? 'bg-gray-900 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Available
                            </button>
                            <button
                                onClick={() => setShowSelected(true)}
                                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg relative ${
                                    showSelected
                                        ? 'bg-green-600 text-white'
                                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                                }`}
                            >
                                Selected
                                {selectedPlayerIds.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
                                        {selectedPlayerIds.length}
                                    </span>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Player Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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