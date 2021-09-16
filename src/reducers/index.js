import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR_DISPLAY, MEMORY_STORE, MEMORY_RECALL, MEMORY_RESET } from '../actions';

// NEEDS CONST's EXPORTED, A LOT!
// All these exports must also be imported to wherever they are going. (App.js I think)


export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

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
// payload is the data if needed.
const reducer = (state, action) => {
    console.log(action);

    switch(action.type) {
        case("ONE"):
            return({...state, total: state.operation + action.payload});

        case(APPLY_NUMBER):                         // INSIDE INITIAL   STATE // 1      // +
            return ({...state, total: calculateResult(state.total, action.payload, state.operation) });
        
        case(CHANGE_OPERATION):
            return ({ ...state, operation: action.payload });
        
        case CLEAR_DISPLAY:
            return {
                ...state,
                total: 0
            }

        case MEMORY_STORE:
            return {
                ...state,
                memory: state.total
            }

        case MEMORY_RECALL:
            return {
                ...state,
                total: calculateResult(state.total, state.memory, state.operation)
            }

        case MEMORY_RESET:
            return {
                ...state,
                memory: 0
            }

        default:
            return state;
    }
}

export default reducer;