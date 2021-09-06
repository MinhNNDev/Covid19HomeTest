import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container:  {
        flex: 1,
        height: 40,
        flexDirection: "column"
    },

    // Lable đầu trang
    lable: {
        width: null,
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },

    // Dòng chữ thông tin
    textLog: {
        color: "#338AFF",
        fontSize: 25,
    },

    // Dòng chữ thứ 2 
    textLog2: {
        color: "#0C0E11",
        fontSize: 20,
    },

    


    // Khung nhập số điện thoại
    phoneInput: {
        height: 50,
        marginTop: 50,
        marginBottom: 25,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 12,
        borderWidth: 0.1,
        padding: 5,
        fontSize: 15,
        flexDirection: "row",

    },


    // icon trong khung nhập số điện thoại
    icon: {
        marginTop: 5,
        marginRight: 5,
        marginLeft: 5,
    },

    

    

    // Checkbox
    confirm: {
        flexDirection: 'row',
        margin: 10,
        alignSelf: 'center'
    },

    
    // đoạn văn xác nhận
    textLog3: {
        color: "#0C0E11",
        fontSize: 13,
        alignItems: 'center',
        justifyContent: 'center',
        
    },

    // Điều khoản sử dụng
    textLog4: {
        color: '#0D68C3',
        fontWeight: 'bold',
    },



    // Nút tiếp tục
    btnNext: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12,
        height: 60,
        backgroundColor: '#CDCECF',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 50,
    },

    next: {
        color: 'white',
    },

    // Nút bỏ qua
    btnSkip: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        marginLeft: 80,
        marginRight: 80,
        marginTop: 100,
    },

    skip: {
        fontSize: 20,
        color: '#0D68C3',
    },


});