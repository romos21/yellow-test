import { actions } from "../actions/";
import {handleActions} from 'redux-actions';
import {initialState} from '../state'


export const loader = handleActions({
    [actions.loaderActions.loaderViewChange]: (state) => ({
        ...state,
        isShowLoader: !state.isShowLoader,
    }),
}, initialState.loader);