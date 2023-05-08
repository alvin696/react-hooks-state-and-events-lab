import React, { useState } from 'react';
import Item from './Item';

function ShoppingList(props) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const filteredItems = selectedCategory === 'all'
    ? props.items
    : props.items.filter(item => item.category === selectedCategory);

  return (
    <div>
      <label htmlFor="category-filter">Filter by category:</label>
      <select id="category-filter" onChange={handleCategoryChange} value={selectedCategory}>
        <option value="all">All</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="household">Household</option>
      </select>
      <ul>
        {filteredItems.map(item => (
          <Item key={item.id} itemName={item.name} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
