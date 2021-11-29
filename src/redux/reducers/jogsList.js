import { actions } from "../actions/";
import {handleActions} from 'redux-actions';
import {initialState} from '../state'


export const jogs = handleActions({
    [actions.jogsListActions.jogsListSet]: (state, {payload}) => {
        return {
            ...state,
            list: payload,
        }
    },
}, initialState.jogs);
