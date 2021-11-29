import { actions } from "../actions/";
import {handleActions} from 'redux-actions';
import {initialState} from '../state'


export const user = handleActions({
    [actions.userActions.userTokenSet]: (state, {payload}) => {
        return {
            ...state,
            token: payload,
        }
    },
}, initialState.user);
