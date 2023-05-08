import React, { useState } from 'react';

import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode);
  }

  const appClass = isDarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <h1>My Shopping List</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      {/* Add the rest of your app code here */}
    </div>
  );
}

export default App;