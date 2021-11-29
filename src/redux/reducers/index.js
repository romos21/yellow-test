import {combineReducers} from "redux";
import {persistReducer} from "redux-persist";
import localStorage from "redux-persist/es/storage";
import {loader} from './loader';
import {jogs} from './jogsList';
import {user} from './user';

export const reducers = persistReducer({
        key: 'root',
        storage: localStorage,
        whitelist: ['user'],
    },
    combineReducers({
        loader,
        jogs,
        user,
    })
)