import React from "react";
import { useAppContext } from "hooks/AppContext";
import styles from "./CreateItemForm.module.scss";

const CreateItemForm = () => {
  const { dispatch } = useAppContext();
  const titleRef = React.createRef();
  const colRef = React.createRef();

  const handleSubmit = e => {
    e.preventDefault();
    const item = {
      title: titleRef.current.value || "ITEM",
      column: Number(colRef.current.value) || 0
    };
    
    async function createItem(item) {
      try {
        const rawResponse = await fetch("http://localhost:8081/api/v1/items", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(item)
        });
        const content = await rawResponse.json();
        return {id: content.data[0], ...item}
      } catch (err) {
        console.error(err);
      }
    }
    dispatch({ type: "ADD_ITEM", payload: createItem(item) });
  };

  return (
    <form className={styles.CreateItemForm} onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter Item" ref={titleRef} />
      <select ref={colRef}>
        <option value="0">Column 0</option>
        <option value="1">Column 1</option>
      </select>
      <button>Add Item</button>
    </form>
  );
};

export default CreateItemForm;
