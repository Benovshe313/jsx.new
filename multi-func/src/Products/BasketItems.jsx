
import React from 'react'

function BasketItems({ basket }) {
  if (basket.length === 0) {
    return (
      <div>
        <h1>Basket</h1>
        <p>Basket is empty</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Basket</h1>
          {basket.map((item) => (
            <li key={item.id}>
              {item.ProductName} --- 
              {item.ProductDesc} --- 
              {item.ProductPrice} AZN
            </li>
          ))}
      </div>
    );
  }
}

export default BasketItems

