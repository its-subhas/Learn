export const showItemsFromServer = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/items/show", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};


export const addItemToServer = async (tasks, date) => {
  try {
    const response = await fetch("http://localhost:3000/api/items/save", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tasks, date }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error adding item:", error);
    throw error;
  }
};



export const deleteItemFromServer = async (id) => {
  try {
    const response = await fetch(`http://localhost:3000/api/items/delete/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error deleting item:", error);
    throw error;
  }
};


export const updateItemOnServer = async (id, tasks, date) => {
  try {
    const response = await fetch(`http://localhost:3000/api/items/update/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tasks, date }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error updating item:", error);
    throw error;
  }
};



