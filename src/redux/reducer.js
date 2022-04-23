import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';


export const initialState = {
    dishes: DISHES,
    comments: COMMENTS,
    promotions: PROMOTIONS,
    leaders: LEADERS
}


//first reducer function here receive current state and action. The st  ate in Recucerr can not be modifiedd 
//state = initialState defalu parameter value ES6
export const Reducer = (state = initialState, action) => {
    return state;  
}