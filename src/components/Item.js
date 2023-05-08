import React, { useState } from 'react';

function Item(props) {
  const [isInCart, setIsInCart] = useState(false);

  function handleClick() {
    setIsInCart(!isInCart);
  }

  return (
    <li className={isInCart ? 'in-cart' : ''}>
      {props.itemName}
      <button onClick={handleClick}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </li>
  );
}

export default Item;
