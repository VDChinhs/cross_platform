import { View, StyleSheet, Text, TextInput, Button, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addSutudent, getSutudent } from "../redux/actions/actionStudent";

export default function SV_Add({navigation}) {
    const [isName, setName] = useState('')
    const [isCode, setCode] = useState('')
    const [isClass, setClass] = useState('')
    const [isEmail, setEmail] = useState('')
    const [isAddress, setAddress] = useState('')
    const {isCreating} = useSelector(state => state.studentsReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        navigation.setOptions({
            title:"Thêm mới sinh viên",
            headerTitleAlign: 'center',
        });
    },[])

    function handlerAddSv(name, code, lop, email, address ){
        let reg =/@/g
        if(name.length < 10 || name == ""){
            Alert.alert('Cảnh báo', 'Tên sinh viên phải tối thiểu 20 ký tự', [
                {text: 'Ok'}
            ]);
            return
        }
        else if(code.length < 5 || code == ""){
            Alert.alert('Cảnh báo', 'MSSV tối thiểu 5 ký tự', [
                {text: 'Ok'}
            ]);
            return
        }
        else if (lop == "") {
            Alert.alert('Cảnh báo', 'Không để trống', [
                {text: 'Ok'}
            ]);
            return
        }
        else if(!reg.test(email) || email == ""){
            Alert.alert('Cảnh báo', 'Email phải có ký tự @', [
                {text: 'Ok'}
            ]);
            return
        }
        dispatch(addSutudent(name, code, lop, email, address))
        console.log(isCreating);
        if (!isCreating) {
            dispatch(getSutudent())
            navigation.goBack()
        }
    }

    return(
        <View style = {styles.container}>
            <View style = {styles.containerfield}>
                <Text>Tên sinh viên</Text>
                <TextInput 
                    style = {styles.textinput} 
                    onChangeText={text => setName(text)}
                />
            </View>

            <View style = {styles.containerfield}>
                <Text>MSSV</Text>
                <TextInput 
                    style = {styles.textinput}
                    onChangeText={text => setCode(text)}
                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Lớp</Text>
                <TextInput 
                    style = {styles.textinput}
                    onChangeText={text => setClass(text)}
                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Email</Text>
                <TextInput 
                    style = {styles.textinput}
                    onChangeText={text => setEmail(text)}
                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Địa chỉ</Text>
                <TextInput 
                    style = {[styles.textinput, {padding: 10, textAlignVertical: 'top'}]}
                    multiline
                    numberOfLines={5}
                    onChangeText={text => setAddress(text)}
                />
            </View>

            <View style = {styles.containerfooter}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Cảnh báo', 'Người dùng có muốn bỏ thêm mới không?', [
                            {
                                text: 'Có',
                                onPress: () => {navigation.goBack()}
                            },
                            {
                                text: 'Không'
                            },
                            
                        ]);
                    }}
                >
                    <Text >Hủy bỏ</Text>
                </TouchableOpacity>
                <Button 
                    title="Lưu lại" 
                    onPress={() => {
                            handlerAddSv(isName, isCode, isClass, isEmail, isAddress)
                        }}
                        disabled = {isCreating}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex: 1
    },
    containerfield:{
        padding: 15,
        gap: 5
    },
    containerfooter:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingHorizontal: 15
    },
    textinput:{
        borderColor:'black',
        borderWidth: 1,
        paddingHorizontal: 15,
        width: '95%',
    }
})