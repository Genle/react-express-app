import  { createStore} from "redux";
import {defaultState} from "../../server/deftaultState";

export const store = createStore(function reducer (state=defaultState,action) {
    return state;
})