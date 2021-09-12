import {RETRIEVE_TOKEN, LOGIN, REGISTER, LOGOUT} from '../actions/authAction';

const initialState = {
  isLoading: true,
  phoneNumber: null,
  tokenAccount: null,
};

const auth = (prevState = initialState, action) => {
  switch (action.type) {
    case RETRIEVE_TOKEN:
      return {
        ...prevState,
        tokenAccount: action.token,
        isLoading: false,
      };
    case LOGIN:
      return {
        ...prevState,
        phoneNumber: action.id,
        tokenAccount: action.token,
        isLoading: false,
      };
    case REGISTER:
      return {
        ...prevState,
        phoneNumber: action.id,
        tokenAccount: action.token,
        isLoading: false,
      };
    case LOGOUT:
      return {
        ...prevState,
        phoneNumber: null,
        tokenAccount: null,
        isLoading: false,
      };
    default:
      return prevState;
  }
};

export default auth;
