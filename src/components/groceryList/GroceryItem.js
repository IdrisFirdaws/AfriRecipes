// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";



// export default function Grocery({task}){
//     return(
//         <div className="Grocery">
//             <p>{task.task}</p>
//             <div>
//                 <FontAwesomeIcon 
//                 icon={faPenToSquare} />
//                 <FontAwesomeIcon 
//                 icon={faTrash} />
//             </div>
//         </div>
//     )
// }

// GroceryItem.js
// GroceryItem.js


import React from 'react';


const GroceryItem = ({ item, onDelete, onEdit }) => {
  return (
    <div className="section grocery-item">
      <span>{item}</span>
      <div className="props">
        <FontAwesomeIcon 
        className='icon'
        icon={faPenToSquare} onClick={() => onEdit(item)} />
        <FontAwesomeIcon 
        className='icon'
        icon={faTrash} onClick={() => onDelete(item)} />
      </div>
    </div>
  )
}

export default GroceryItem;



