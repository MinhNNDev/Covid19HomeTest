import React, {useEffect, useState} from 'react';
import {
  Platform,
  PermissionsAndroid,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

import {styles} from './style';
import {Header} from '../../components';

const Transport = () => {
  const [position, setPosition] = useState();
  const [map, setMap] = useState([]);
  console.log('Vi tri: ', position);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Use location app',
          message:
            'Covid19HomeTest needs access to your Location ' +
            'so you can take position.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(
          pos => {
            setPosition(pos.coords);
            setMap(newPos => [...newPos, pos.coords]);
          },
          error => {
            console.log(error.code, error.message);
          },
          {enableHighAccuracy: true, timeout: 15000, maximumAge: 10000},
        );
        console.log('You can use the location');
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.positionItem}>
        <Text>LAT: {item.latitude}</Text>
        <Text>LONG: {item.longitude}</Text>
      </View>
    );
  };

  useEffect(() => {
    requestCameraPermission();
  }, []);
  return (
    <>
      <Header back title="Thông tin vận chuyển" />
      <View style={styles.container}>
        <FlatList
          data={map}
          keyExtractor={(item, index) => index}
          renderItem={renderItem}
        />
        <TouchableOpacity
          style={styles.btnGetPosition}
          onPress={() => requestCameraPermission()}>
          <Text style={styles.txtGetPosition}>Lấy vị trí hiện tại</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Transport;
