import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';

// NEEDS CONST's EXPORTED, A LOT!
// All these exports must also be imported to wherever they are going. (App.js I think)


export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

// Is this a reducer?
const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case("ONE"):
            return({...state, total: state.operation + action.payload});

        case(ADD_ONE):
            return ({...state, total: calculateResult(state.total, action.payload, state.operation) });
        
        case(CHANGE_OPERATION):
            return ({ ...state, operation: action.payload });

        default:
            return state;
    }
}

export default reducer;