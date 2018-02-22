const typeReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return action.type
    default:
      return state;
  }
};

export default typeReducer
