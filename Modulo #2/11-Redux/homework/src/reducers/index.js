import {combineReducers} from "redux";
import counter from "./counterReducer.js";

const reducer = combineReducers({
    contador: counter
});

export default reducer;