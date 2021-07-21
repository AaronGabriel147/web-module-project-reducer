import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION } from './../actions';

// NEEDS CONST's EXPORTED, A LOT!
// All these exports must also be imported to wherever they are going. (App.js I think)


export const initialState = {
    total: 100,
    operation: "*",
    memory: 100
}

const calculateResult = (num1, num2, operation) => {
    switch(operation) {
        case("+"):
            return num1 + num2;        // ALL STRINGS NEED TO BE CONST's
        case("*"):
            return num1 * num2;
        case("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch(action.type) {
        case(ADD_ONE):                 // NEEDS TO BE A CONST
            return({
                ...state,
                total: state.total + 1
            });

        case(APPLY_NUMBER):
            return ({ 
                ...state, 
                total: calculateResult(state.total, action.payload, state.operation)
            });
        
        case(CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });
            
        default:
            return state;
    }
}

export default reducer;