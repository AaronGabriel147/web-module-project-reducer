

// What case statement should be added to your reducer for adding a hobby with the following state and action objects?

const initialState = {
  user: {},
  friends: [],
  hobbies: []
}

{ type: "ADD_HOBBY", payload: newHobby }

case "ADD_HOBBY":
  return {
    ...state,
    hobbies: [...state.hobbies, action.payload]
  }