import {createStore} from "redux";
import {reducers} from "../reducers";
import {composeWithDevTools} from "redux-devtools-extension";
import {persistStore} from "redux-persist";

export const store = createStore(reducers, composeWithDevTools());
export const persistor = persistStore(store, null, ()=> {
    return store
});