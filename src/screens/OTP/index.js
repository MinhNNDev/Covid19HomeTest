import React, {useState, useEffect} from 'react';
import {Text, View, Keyboard, TouchableOpacity, Alert} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import auth from '@react-native-firebase/app';
import {useDispatch} from 'react-redux';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import BackgroundTimer from 'react-native-background-timer';

import {getUserSucess} from '../../api/service/APIManager';
import {styles} from './style';
import {SIZES} from '../../constants/theme';
import {loginAction} from '../../redux/actions/authAction';

const AuthOTP = ({route}) => {
  const dispatch = useDispatch();
  const {phoneNumber, confirm} = route.params;
  const [code, setOTP] = useState('');
  const [countDown, setCountDown] = useState(90);
  const [userInfo, setUserInfo] = useState('');

  const confirmCode = async otp => {
    console.log(confirm, otp);
    try {
      await confirm.confirm(otp);
      const user = auth().currentUser;
      dispatch(loginAction(user));
    } catch (error) {
      // Alert.alert('SMS OTP', 'Mã xác thực không hợp lệ !');
      console.log('Invalid code.');
    }
  };

  useEffect(() => {
    const timer =
      countDown > 0 &&
      BackgroundTimer.setInterval(() => setCountDown(countDown - 1), 1000);
    return () => BackgroundTimer.clearInterval(timer);
  }, [countDown]);

  // const getHash = () =>
  //   RNOtpVerify.getHash().then(console.log).catch(console.log);

  // const startListeningForOtp = () =>
  //   RNOtpVerify.getOtp()
  //     .then(p => RNOtpVerify.addListener(otpHandler))
  //     .catch(p => console.log(p));

  // const otpHandler = message => {
  //   if (message) {
  //     const otp = /(\d{6})/g.exec(message)[1];
  //     setOTP({otp});
  //     RNOtpVerify.removeListener();
  //     Keyboard.dismiss();
  //   }
  // };

  // useEffect(() => {
  //   getHash();
  //   startListeningForOtp();
  //   return () => RNOtpVerify.removeListener();
  // }, []);

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.heading}>Xác thực mã OTP</Text>
        <View style={{width: (SIZES.width * 80) / 100}}>
          <Text style={styles.txtDesc}>Nhập mã xác thực được gửi đến số:</Text>
          <Text style={styles.txtNumber}>{phoneNumber}</Text>
        </View>
        <OTPInputView
          style={styles.otpView}
          pinCount={6}
          code={code}
          onCodeChanged={otp => setOTP(otp)}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={otp => confirmCode(otp)}
        />
        <View style={styles.countDown}>
          <Text>Mã xác thực có hiệu lực: {countDown}s</Text>
          <TouchableOpacity
            onPress={() => setCountDown(90)}
            style={styles.btnResend}>
            <Text style={styles.txtResend}>Gữi lại code</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity
          onPress={() => confirmCode()}
          style={[
            styles.btnVerify,
            {
              backgroundColor:
                code.length === 6 ? COLORS.primary : COLORS.lightGray3,
            },
          ]}>
          <Text style={styles.txtVerify}>Xác nhận</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

export default AuthOTP;
