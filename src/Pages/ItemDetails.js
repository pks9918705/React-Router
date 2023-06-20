import React from 'react';
import { useParams } from 'react-router-dom';
import { ITEMS } from '../data/itemData';

export default function ItemDetails() {
  const { id } = useParams();

  const item = ITEMS.find((item) => item.id === id);

  if (!item) {
    return <div>No item found for ID: {id}</div>;
  }

  console.log('***********', item);

  return (
    <div>
      <h1>Item Details</h1>
      <h2>{id}</h2>
      {/* Render item details here */}
    </div>
  );
}
