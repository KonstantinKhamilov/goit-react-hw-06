import { createStore, combineReducers } from "redux";
import contactsReducer from "./contactsReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer);

export default store;
