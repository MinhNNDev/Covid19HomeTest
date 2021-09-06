import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import {RNCamera} from 'react-native-camera';
import QRCodeScanner from 'react-native-qrcode-scanner';

import {styles} from './style';

const Scan = () => {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err),
    );
  };
  return (
    <View style={styles.container}>
      <QRCodeScanner
        onRead={onSuccess}
        flashMode={RNCamera.Constants.FlashMode.torch.on}
        topContent={
          <Text style={styles.centerText}>
            Di chuyển máy ảnh đến vùng có chứa mã QR/BarCode để quét
          </Text>
        }
        bottomContent={
          <TouchableOpacity style={styles.buttonTouchable}>
            <Text style={styles.buttonText}>OK. Got it!</Text>
          </TouchableOpacity>
        }
        // containerStyle={<View />}
      />
    </View>
  );
};

export default Scan;
