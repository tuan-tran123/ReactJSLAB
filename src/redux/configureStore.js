import { createStore } from "redux"; // createStore allow to creat Redux store
import { Reducer, initialState } from "./reducer";

export const ConfigureStore = () => {
    const store = createStore(Reducer, initialState) //creat store here
    return store;
}

//Go to App.js file to update store to it