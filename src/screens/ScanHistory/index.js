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


// const Category = () => {
//   return (
//     <View>
//       <Header back title="Lịch sử quét mã" />
//       <View style={styles.container}>
//         <TouchableOpacity style={styles.itemHistory}>
//           <AntDesign
//             style={styles.iconQR}
//             name="qrcode"
//             size={36}
//             color="white"
//           />
//           <View>
//             <Text numberOfLines={1} style={styles.textName}>
//               Điền gì chưa biết nên cứ để đây lúc nào biết thì điền
//             </Text>
//             <Text style={styles.dateTime}>10:09 - 10/09/2021</Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.itemHistory}>
//           <AntDesign
//             style={styles.iconQR}
//             name="qrcode"
//             size={36}
//             color="white"
//           />
//           <View>
//             <Text numberOfLines={1} style={styles.textName}>
//               Điền gì chưa biết nên cứ để đây lúc nào biết thì điền
//             </Text>
//             <Text style={styles.dateTime}>10:09 - 10/09/2021</Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };


const Category = () => {
  return (
    <>
      <Header back title="Lịch sử quét mã" />
      <View style={styles.container}>
        {/* <Timeline
          style={styles.list}
          data={data}
          circleSize={20}
          circleColor={COLORS.primary}
          lineColor="black"
          timeContainerStyle={{minWidth: 52}}
          listViewContainerStyle={{marginTop: 5}}
          timeStyle={{
            textAlign: 'center',
            backgroundColor: COLORS.primary,
            color: 'white',
            padding: 5,
            borderRadius: 13,
          }}
          titleStyle={{marginTop: -12}}
          descriptionStyle={{color: 'gray'}}
          options={{
            style: {paddingTop: 10, paddingRight: 20, paddingLeft: 20},
            removeClippedSubviews: false,
          }}
          innerCircle={'dot'}
          columnFormat='two-column'
        /> */}
        <Timeline
          style={styles.list}
          data={data}
          circleSize={25}
          dotSize={10}
          circleColor={COLORS.primary}
          lineColor={COLORS.primary}
          timeContainerStyle={{minWidth: 110, marginTop: 10}}
          circleStyle={{marginLeft:62}}
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
            showsVerticalScrollIndicator: false
          }}
          innerCircle={'dot'}
        />
      </View>
    </>
  );
}

export default Category;
