// import React from "react";

// export default function GroceryEdit(){
//     return(
//         <div>Grocery Edit</div>
//     )
// }

// GroceryEdit.js
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faSave } from "@fortawesome/free-solid-svg-icons";

const GroceryEdit = ({ item, onSaveEdit, onCancelEdit }) => {
  const [editedItem, setEditedItem] = useState(item);

  const handleInputChange = (e) => {
    setEditedItem(e.target.value);
  };

  const handleSaveEdit = () => {
    onSaveEdit(editedItem);
  };

  return (
    <div className="section grocery-item">
      <input type="text" value={editedItem} onChange={handleInputChange} />
      <div className="props">
        <FontAwesomeIcon
          className="icon"
          icon={faPenToSquare}
          onClick={onCancelEdit}
        />
        <FontAwesomeIcon
          className="icon"
          icon={faSave}
          onClick={handleSaveEdit}
        />
      </div>
    </div>
  );
};

export default GroceryEdit;
