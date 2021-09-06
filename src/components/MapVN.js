import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapMarker from './MapMarker';

const MapVN = () => {
  const [markerList, setMarkers] = useState([]);

  return (
    <View style={{flex: 1}}>
      <MapView
        customMapStyle={styles.mapStyle}
        mapType="standard"
        provider="google"
        style={{flex: 1}}
        region={{
          latitude: 10.823099,
          longitude: 106.629664,
          latitudeDelta: 0.025,
          longitudeDelta: 0.3,
        }}
      />
    </View>
  );
};

export default MapVN;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#bdbdbd',
    backgroundColor: 'rgb(242, 63, 52)',
  },
});
