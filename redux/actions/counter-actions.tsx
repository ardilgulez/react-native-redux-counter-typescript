import Action from "../constants/interfaces/action-interface";
import CounterActionTypes from "../constants/action-type/counter-action-types";

const increaseCount = (): Action => ({
    type: CounterActionTypes.INCREMENT,
});

const decreaseCount = (): Action => ({
    type: CounterActionTypes.DECREMENT,
});

export { increaseCount, decreaseCount };
