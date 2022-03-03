const initialState = {
  todos: [
    { id: 0, text: "Learn React", completed: true },
    { id: 0, text: "Learn Redux", completed: false, color: "green" },
    { id: 0, text: "Learn something fun!", completed: false, color: "red" },
  ],
  filter: {
    status: "All",
    color: [],
  },
};

// use the initialState as a default value
// const { type, ...rest} = action;
const rootReducer = (state = initialState, action) => {
  const { type, ...rest } = action;
  // The reducer normally looks at the action type field to decide what happens
  switch (type) {
    // Do something here based on the different types of actions
    case "login":
      console.log(">>>>>>>rootReducer login");
      break;
    case "toast":
      return { ...state, type, ...rest };
    default:
      return state;
  }
};

const reducer = {
  rootReducer,
};

export default reducer;
