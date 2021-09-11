import React, {useState, useEffect} from 'react';
import {Text, View, Keyboard, TouchableOpacity} from 'react-native';
import RNOtpVerify from 'react-native-otp-verify';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import BackgroundTimer from 'react-native-background-timer';

import {styles} from './style';
import {COLORS, SIZES} from '../../constants/theme';

const AuthOTP = ({navigation, route}) => {
  const {phoneNumber} = route.params;

  const [Otp, setOTP] = useState('');
  const [countDown, setCountDown] = useState(90);

  useEffect(() => {
    const timer =
      countDown > 0 &&
      BackgroundTimer.setInterval(() => setCountDown(countDown - 1), 1000);
    return () => BackgroundTimer.clearInterval(timer);
  }, [countDown]);

  const getHash = () =>
    RNOtpVerify.getHash().then(console.log).catch(console.log);

  const startListeningForOtp = () =>
    RNOtpVerify.getOtp()
      .then(p => RNOtpVerify.addListener(this.otpHandler))
      .catch(p => console.log(p));

  const otpHandler = message => {
    const otp = /(\d{6})/g.exec(message)[1];
    setOTP({otp});
    RNOtpVerify.removeListener();
    Keyboard.dismiss();
  };

  useEffect(() => {
    getHash();
    startListeningForOtp();

    return () => RNOtpVerify.removeListener();
  }, []);

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
          code={Otp}
          onCodeChanged={code => {
            setOTP(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={styles.underlineStyleBase}
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={code => {
            console.log(`Mã của bạn là ${code} !`);
          }}
        />
        <View style={styles.countDown}>
          <Text>Mã xác thực có hiệu lực: {countDown}s</Text>
          <TouchableOpacity
            onPress={() => setCountDown(90)}
            style={styles.btnResend}>
            <Text style={styles.txtResend}>Gữi lại code</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.btnVerify,
            {
              backgroundColor:
                Otp.length === 6 ? COLORS.primary : COLORS.lightGray3,
            },
          ]}>
          <Text style={styles.txtVerify}>Xác nhận</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AuthOTP;
