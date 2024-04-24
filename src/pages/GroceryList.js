// GroceryList.js
import React, { useState } from "react";
import GroceryForm from "../components/groceryList/GroceryForm";
import GroceryItem from "../components/groceryList/GroceryItem";
import GroceryEdit from "../components/groceryList/GroceryEdit";

const GroceryList = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleAddItem = (itemName) => {
    setItems([...items, itemName]);
  };

  const handleDeleteItem = (itemToDelete) => {
    setItems(items.filter((item) => item !== itemToDelete));
    setEditingItem(null);
  };

  const handleEditItem = (itemToEdit) => {
    setEditingItem(itemToEdit);
  };

  const handleSaveEdit = (editedItem) => {
    const updatedItems = items.map((item) =>
      item === editingItem ? editedItem : item
    );
    setItems(updatedItems);
    setEditingItem(null);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  return (
    <div className="section .d-block grocery">
      <GroceryForm onAddItem={handleAddItem} />
      {items.map((item) => (
        <div key={item}>
          {editingItem === item ? (
            <GroceryEdit
              item={item}
              onSaveEdit={handleSaveEdit}
              onCancelEdit={handleCancelEdit}
            />
          ) : (
            <GroceryItem
              item={item}
              onDelete={handleDeleteItem}
              onEdit={handleEditItem}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default GroceryList;
