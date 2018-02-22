const typeReducer = (state=[], action) => {
  switch (action.type) {
    case 'SET_TYPE':
      return action.pokeTypes
    default:
      return state;
  }
};

export default typeReducer
