const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'SOME_ACTION':
      // some data
      console.log(payload);
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
