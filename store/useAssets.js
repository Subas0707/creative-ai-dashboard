// store/useAssets.js
import { useState } from 'react';

export function useAssets() {
  const [assets, setAssets] = useState([]);

  function loadAssets() {
    // Simulate fetching from API
    setAssets([
      {
        title: 'AI-Generated Video',
        image: 'https://placehold.co/400x300',
        description: 'A promotional video created using AI.'
      },
      {
        title: 'Product Image',
        image: 'https://placehold.co/400x300',
        description: 'High-resolution image generated from text prompt.'
      },
      {
        title: 'Ad Creative',
        image: 'https://placehold.co/400x300',
        description: 'Dynamic ad creative designed with automation.'
      }
    ]);
  }

  return { assets, loadAssets };
}

