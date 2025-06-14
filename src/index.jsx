// App.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { useAssets } from './store/useAssets';
import { AssetCard } from './components/AssetCard';

export default function App() {
  const { assets, loadAssets } = useAssets();

  React.useEffect(() => {
    loadAssets();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold mb-4"
      >
        🎨 AI Creative Dashboard
      </motion.h1>

      <button
        onClick={loadAssets}
        className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Refresh Assets
      </button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {assets.map((asset, index) => (
          <AssetCard key={index} asset={asset} />
        ))}
      </div>
    </div>
  );
}

