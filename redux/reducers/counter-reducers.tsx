import CounterActionTypes from "../constants/action-type/counter-action-types";

import Action from "../constants/interfaces/action-interface";
import CounterState from "../constants/state/counter-state";

const INITIAL_STATE = {
    count: 0,
};

const counter = (
    state: CounterState = INITIAL_STATE,
    action: Action
): CounterState => {
    switch (action.type) {
        case CounterActionTypes.INCREMENT:
            return Object.assign({}, state, { count: state.count + 1 });

        case CounterActionTypes.DECREMENT:
            return Object.assign({}, state, { count: state.count - 1 });

        default:
            return Object.assign({}, state);
    }
};

export default counter;
