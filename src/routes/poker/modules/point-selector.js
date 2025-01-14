import { createActionCreator } from '../../../commons/utils';
import { createReducer } from '../../../store/reducers';

// Actions
const actionCreator = createActionCreator('@@POKER/POINT_SELECTOR');
const pointSelectedSet = actionCreator('POINT_SELECTED_SET');
const pointSelectedClear = actionCreator('POINT_SELECTED_CLEAR');
const pointSelectedFlip = actionCreator('POINT_SELECTED_FLIP');

export { pointSelectedSet, pointSelectedClear, pointSelectedFlip };


// Reducers
const initialState = {
    isSelect: false,
    selected: '',
    img: 1,
    itemFlip: true
};

const handlers = {
    [pointSelectedSet.type]: (state, { payload }) => ({
        ...state,
        isSelect: payload.isSelect,
        selected: payload.selected,
        img: payload.img
    }),
    [pointSelectedClear.type]: (state) => ({
        ...state,
        ...initialState
    }),
    [pointSelectedFlip.type]: (state) => ({
        ...state,
        itemFlip: !state.itemFlip
    })
};

const reducers = createReducer(initialState, handlers);
export default reducers;
