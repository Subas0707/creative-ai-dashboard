// components/AssetCard.jsx
import React from 'react';

export function AssetCard({ asset }) {
  return (
    <div className="bg-white text-black rounded p-4 shadow">
      <h2 className="font-bold text-lg mb-2">{asset.title}</h2>
      <img src={asset.image} alt={asset.title} className="w-full rounded" />
      <p className="text-sm mt-2">{asset.description}</p>
    </div>
  );
}

