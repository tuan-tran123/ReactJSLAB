import { COMMENTS } from '../shared/comments'; 
import * as ActionTypes from './ActionTypes';

export const Comments = (state = COMMENTS, action) => {
    switch (action.type) { 
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            return state.concat(comment);
        default:
            return state;
    }
}
// nếu action được truyền đến có type match với case bên dưới thì reducer function Comments này sẽ tác động tới state