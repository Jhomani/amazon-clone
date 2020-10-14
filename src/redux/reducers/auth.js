const inicialState = {
  isLogged: false,
}

export default function (state = inicialState, action) {
  switch(action.type) {
    case 'LOGGIN_IN':
      return {
        ...state,
        isLogged: true,
      }
    default:
      return state;
  }
}
