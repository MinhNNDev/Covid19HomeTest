import AsyncStorage from '@react-native-async-storage/async-storage';
import {logOut} from '../../api/service/APIManager';

export const RETRIEVE_TOKEN = 'RETRIEVE_TOKEN';
export const LOGIN = 'LOGIN';
export const REGISTER = 'REGISTER';
export const LOGOUT = 'LOGOUT';

export const loginAction = user => {
  return async dispatch => {
    try {
      const uidUserToken = user.uid;
      console.log('UID: ', uidUserToken);
      if (uidUserToken) {
        dispatch({type: RETRIEVE_TOKEN, token: uidUserToken});
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const logout = () => {
  return async dispatch => {
    logOut();
    dispatch({type: LOGOUT});
  };
};
