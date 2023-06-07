import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from '@react-native-firebase/auth';

export const getUserSucess = async () => {
  const user = auth().currentUser;
  await AsyncStorage.setItem('uidUserToken', user.uid);
};

export const logOut = () => {
  auth().signOut();
};
