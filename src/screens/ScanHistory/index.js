import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Timeline from 'react-native-timeline-flatlist';

import Header from '../../components/Header/index';
import {styles} from './style';
import data from './data'

import {COLORS} from '../../constants/theme'


const Category = () => {
  return (
    <>
      <Header back title="Lịch sử quét mã" />
      <View style={styles.container}>
        <Timeline
          style={styles.list}
          data={data}
          circleSize={25}
          dotSize={10}
          circleColor={COLORS.primary}
          lineColor={COLORS.primary}
          timeContainerStyle={{minWidth: 110, marginTop: 10}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: COLORS.primary,
            color: 'white',
            padding: 5,
            borderBottomRightRadius: 30,
            borderTopRightRadius: 30,
          }}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 5},
            showsVerticalScrollIndicator: false,
          }}
          innerCircle={'dot'}
        />
      </View>
    </>
  );
}

export default Category;
