import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// import {CheckBox} from 'react-native-elements';
import CheckBox from '@react-native-community/checkbox';
import {InputValue} from '../../components';
import {styles} from './style';
import {COLORS} from '../../constants/theme';

const Phone = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isSelected, setSelection] = useState(false);

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
          onChangeText={num => setPhoneNumber(num)}
          keyboardType="numeric"
        />
        {phoneNumber.length < 10 && (
          <Text style={styles.warningSdt}>Số điện thoại phải có 10 chữ số</Text>
        )}

        <View style={styles.confirm}>
          <CheckBox
            value={isSelected}
            onValueChange={choice => setSelection(choice)}
            tintColors={{true: COLORS.primary, false: COLORS.gray}}
          />
          <Text style={styles.txtConform}>
            Xác nhận những thông tin bạn cung cấp là chính xác. Bạn đã đọc, đồng
            ý với <Text style={styles.txtRules}>Điều khoản sử dụng </Text> và
            đồng ý chia sẻ thông tin cá nhân của bạn với cơ quan y tế khi bạn
            được xác định nhiễm hoặc nghi nhiễm Covid-19
          </Text>
        </View>
      </View>
      <TouchableOpacity
        disabled={isSelected ? false : true}
        onPress={() => navigation.navigate('OTP', {phoneNumber})}
        style={[
          styles.btnNext,
          {
            backgroundColor:
              isSelected && phoneNumber.length >= 10
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
};

export default Phone;