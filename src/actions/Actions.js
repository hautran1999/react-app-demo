export const addItem = (text) => {
  return {
    type: "ADD",
    text,
  };
};

export const deleteItem = (text) => {
  return {
    type: "DELETE",
    text,
  };
};

export const editItem = (text) => {
  return {
    type: "EDIT",
    text,
  };
};
