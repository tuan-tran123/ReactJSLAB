import { createStore, combineReducers, applyMiddleware} from "redux"; // createStore allow to creat Redux store
import { Dishes } from "./dishes";
import { createForms } from "react-redux-form";
import { Comments } from "./comments";
import { Promotions } from "./promotions";
import { Leaders } from "./leaders";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { InitialFeedback } from "./forms";

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}

//Go to App.js file to update store to it 
//applyMiddleware là tham số thử 2 của ConfigureStore để tạo ra enhancer