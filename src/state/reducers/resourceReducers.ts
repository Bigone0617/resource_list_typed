import { ActionType, resourceDataType } from "../action-types";
import { Action } from "../actions";

const initialState:Array<resourceDataType> = [
    {
        type: "url", 
        url: "https://www.robinwieruch.de/react-libraries/",
        idx : 1
    },{
        type: "url", 
        url: "https://typed.blog/how-to-write-a-better-research-paper-faster/",
        idx : 2
    }
];

const reducer = (state : resourceDataType[]=initialState, action: Action) => {
    switch(action.type) {
        case ActionType.ADD :
            const last_idx = state[state.length-1].idx;
            action.payload.idx = last_idx;
            state.push(action.payload);
            return state;
        case ActionType.DELETE : 
            state.map((data) => data.idx !== action.payload.idx)
            return state;
        case ActionType.UPDATE :
            state.map((data) => {
                if(data.idx === action.payload.idx) {
                    data.url = action.payload.url
                }

                return data;
            })
            return state;
    }
}

export default reducer;