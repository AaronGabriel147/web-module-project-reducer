

// Action constant
export const ADD_ONE = "ADD_ONE";
export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPLAY"
export const MEMORY_STORE = "MEMORY_STORE"
export const MEMORY_RECALL = "MEMORY_RECALL"
export const MEMORY_RESET = "MEMORY_RESET"



// Action creator. They return a OBJE
export const addOne = () => {
    return({ type: ADD_ONE, payload: 1 });
}

export const applyNumber = (number) => {
    return( { type: APPLY_NUMBER, payload: number } );
}

export const changeOperation = (input) => {
    return ({ type: CHANGE_OPERATION, payload: input })
}

export const clearDisplay = () => {
    return { type: CLEAR_DISPLAY }
}

export const memoryStore = () => {
    return { type: MEMORY_STORE }
}

export const memoryRecall = () => {
    return { type: MEMORY_RECALL }
}

export const memoryReset = () => {
    return { type: MEMORY_RESET }
}