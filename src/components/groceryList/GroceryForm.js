// import React, {useState} from "react";

// export default function GroceryForm({addGrocery}){
//     const [value, setValue] = useState("")
//     const handleSubmit = e => {
//         e.preventDefault();

//         addGrocery(value);

//         setValue("")
//     }

//     return(
//         <form className="grocery-form" onSubmit={handleSubmit}>
//             <input type="text" className="grocery-input" value={value} placeholder="Grocery Item" onChange={(e) => setValue(e.target.value)} />
//             <button type="submit" className="grocery-btn btn">Add Item</button>
//         </form>
//     )
// }

// GroceryForm.js
import React, { useState } from 'react';

const GroceryForm = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');

  const handleInputChange = (e) => {
    setItemName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemName.trim()) {
      onAddItem(itemName);
      setItemName('');
    }
  };

  return (
    <form className='section' onSubmit={handleSubmit}>
      <input
        className='grocery-input'
        type="text"
        placeholder="Enter item"
        value={itemName}
        onChange={handleInputChange}
      />
      <button className='btn grocery-btn' type="submit">Add Item</button>
    </form>
  );
};

export default GroceryForm;
