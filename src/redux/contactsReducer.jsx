// contactsReducer.js
const initialState = {
  items: [],
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      return { ...state, items: [...state.items, action.payload] };
    default:
      console.error(`Неизвестный тип действия: ${action.type}`);
      return state;
  }
};

export default contactsReducer;
