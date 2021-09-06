import React, { useState } from "react";
import { 
    View, 
    TextInput, 
    Text,
    TouchableOpacity,
} from "react-native";

import {CheckBox} from "react-native-elements";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { styles } from "./style";                                                               


function Phone() {

    const [phoneNumber, setPhoneNumber] = useState("");
    const [isSelected, setSelection] = useState(false);

    

    return (

        <View style = {styles.container}>
            <View style = {styles.lable}>
                <Text style = {styles.textLog}>
                    Thông tin
                </Text>
            </View>

            <View style = {styles.lable}>
                <Text style = {styles.textLog2}>
                    Vui lòng cũng cấp số điện thoại của bạn để
                </Text>

                <Text style = {styles.textLog2}>
                   nhận được hỗ trợ y tế sớm nhất khi bạn có 
                </Text>

                <Text style = {styles.textLog2}>
                    nguy cơ nhiễm COVID-19
                </Text>
            </View>


            <View>

                <View style = {styles.phoneInput}>
                    <View>
                        <SimpleLineIcons name="screen-smartphone" size={25} style = {styles.icon}/>
                    </View>

                    <View>
                        <TextInput 
                            placeholder = "Nhập số điện thoại hộ cái !!"
                            keyboardType = "numeric"
                            onChangeText = {(text) => setPhoneNumber(text)}>     
                        </TextInput>
                    </View>
                </View>
            </View>

            <View style = {styles.confirm}>
                <View>
                    <CheckBox
                        value={isSelected}
                        onValueChange={setSelection}
                    />
                </View>

                <View>
                    <Text style = {styles.textLog3}>
                        Xác nhận những thông tin bạn cung cấp là chính xác. Bạn
                    </Text>

                    <Text style = {styles.textLog3}>
                        đã đọc, đồng ý với <Text style = {styles.textLog4}>Điều khoản sử dụng </Text> và đồng ý chia sẻ
                    </Text>

                    <Text style = {styles.textLog3}>
                         thông tin cá nhân của bạn với cơ quan y tế khi bạn được 
                    </Text>

                    <Text style = {styles.textLog3}>
                        xác định nhiễm hoặc nghi nhiễm Covid-19
                    </Text>
                </View>
                
            </View>
            

            <View >
                <TouchableOpacity style = {styles.btnNext}>
                    <Text style={styles.next} >Tiếp tục</Text>
                </TouchableOpacity>
            </View>


            <View >
                <TouchableOpacity style = {styles.btnSkip}>
                    <Text style={styles.skip} >Bỏ qua</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default Phone