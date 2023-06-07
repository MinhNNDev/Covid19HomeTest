import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import auth from '@react-native-firebase/auth';
import CheckBox from '@react-native-community/checkbox';
import Feather from 'react-native-vector-icons/Feather';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import BackgroundTimer from 'react-native-background-timer';

import {useDispatch} from 'react-redux';
import {loginAction} from '../../redux/actions/authAction';

import {InputValue} from '../../components';
import {styles} from './style';
import {COLORS, SIZES} from '../../constants/theme';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Phone = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSelected, setSelection] = useState(false);
  const [confirm, setConfirm] = useState(null);
  const [countDown, setCountDown] = useState(90);
  const [code, setCode] = useState('');

  async function signInWithPhoneNumber(phoneNum) {
    const confirmation = await auth().signInWithPhoneNumber(phoneNum);
    setConfirm(confirmation);
    await AsyncStorage.setItem('tokenVerifyId', confirmation.verificationId);
    console.log('Confirm: ', await AsyncStorage.getItem('tokenVerifyId'));
  }

  const handleContinueAuth = async () => {
    await signInWithPhoneNumber(phoneNumber);
  };

  const confirmCode = async otp => {
    console.log('Log :', confirm, otp);
    try {
      await confirm.confirm(otp);
      dispatch(loginAction(auth().currentUser));
    } catch (error) {
      Alert.alert('SMS OTP', 'Mã xác thực không hợp lệ !');
      console.log('Invalid code. ', error);
    }
  };

  useEffect(() => {
    const timer =
      countDown > 0 &&
      BackgroundTimer.setInterval(() => setCountDown(countDown - 1), 1000);
    return () => BackgroundTimer.clearInterval(timer);
  }, [countDown]);

  if (!confirm) {
    return (
      <View style={styles.container}>
        <Text style={styles.txtInformation}>Thông tin</Text>
        <Text style={styles.lable}>
          Vui lòng cũng cấp số điện thoại của bạn để nhận được hỗ trợ y tế sớm
          nhất khi bạn có nguy cơ nhiễm COVID-19
        </Text>
        <View>
          <InputValue
            placeholder="Nhập số điện thoại"
            icon="phone"
            onChangeText={num => setPhoneNumber('+84' + num)}
            vnZone="+84"
          />
          {phoneNumber.length >= 10 && phoneNumber.length <= 12 ? (
            <Feather name="check-circle" color="green" size={20} />
          ) : (
            <Text style={styles.warningSdt}>Số điện thoại không đúng</Text>
          )}

          <View style={styles.confirm}>
            <CheckBox
              value={isSelected}
              onValueChange={choice => setSelection(choice)}
              tintColors={{true: COLORS.primary, false: COLORS.gray}}
            />
            <Text style={styles.txtConform}>
              Xác nhận những thông tin bạn cung cấp là chính xác. Bạn đã đọc,
              đồng ý với{' '}
              <Text style={styles.txtRules}>Điều khoản sử dụng </Text> và đồng ý
              chia sẻ thông tin cá nhân của bạn với cơ quan y tế khi bạn được
              xác định nhiễm hoặc nghi nhiễm Covid-19
            </Text>
          </View>
        </View>
        <TouchableOpacity
          disabled={
            isSelected && phoneNumber.length >= 10 && phoneNumber.length <= 12
              ? false
              : true
          }
          onPress={() => handleContinueAuth()}
          style={[
            styles.btnNext,
            {
              backgroundColor:
                isSelected &&
                phoneNumber.length >= 10 &&
                phoneNumber.length <= 12
                  ? COLORS.primary
                  : COLORS.lightGray3,
            },
          ]}>
          <Text style={styles.next}>Tiếp tục</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnSkip}>
          <Text style={styles.skip}>Bỏ qua</Text>
        </TouchableOpacity>
      </View>
    );
  }

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
          onCodeChanged={otp => setCode(otp)}
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
      </View>
    </View>
  );
};

export default Phone;
