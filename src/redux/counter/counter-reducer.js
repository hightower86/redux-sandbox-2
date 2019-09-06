const initialState = {
  counter: 0
};

export const counterReducer = (state = initialState, action) => {
  const newState = { ...state };
  console.log(state);
  switch (action.type) {
    case 'INC':
      return { ...newState, counter: (newState.counter += 1) };
    case 'DEC':
      return { ...newState, counter: (newState.counter -= 1) };
    case 'RND':
      return { ...newState, counter: newState.counter + action.payload };
    default:
      return state;
  }
};
