import { combineReducers } from "redux";
import ResourceReducer from './resourceReducers';

const reducers = combineReducers({
    resource : ResourceReducer
});

export default reducers;

export type State = ReturnType<typeof reducers>;