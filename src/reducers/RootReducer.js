const initialState = {
  list: [
    { todo: "Hello, how are you today." },
    { todo: "I'm fine. Thank you." },
  ],
};
function RootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return Object.assign({}, state, {
        list: state.list.concat({ todo: action.text }),
      });

    case "DELETE":
      return Object.assign({}, state, {
        list: state.list.filter((i) => i.todo !== action.text),
      });

    default:
      return state;
  }
}

export default RootReducer;
