import { createStore, combineReducers, applyMiddleware} from "redux"; // createStore allow to creat Redux store
import { Dishes } from "./dishes";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}

//Go to App.js file to update store to it 
//applyMiddleware là tham số thử 2 của ConfigureStore để tạo ra enhancer