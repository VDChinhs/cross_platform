import { View, StyleSheet, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import { useEffect, useState } from "react";
import { getOneSV } from "../helpers/StudentController";
import { useSelector, useDispatch } from "react-redux";
import { deleSutudent, getSutudent } from "../redux/actions/actionStudent";

export default function SV_Info({navigation, route}) {
    const [value, setValue] = useState({name:'',code:'',class:'',email:'',address:''})
    const {isDeleting} = useSelector(state => state.studentsReducer);

    const dispatch = useDispatch();

    async function getData() {
        var data = await getOneSV(route.params.sv.id)
        setValue(data)
    }

    useEffect(() =>{
        getData()
        navigation.setOptions({
            title:"Thông tin chi tiết sinh viên",
            headerTitleAlign: 'center',
        });
    },[])

    function handlerDeleSv(id){
        dispatch(deleSutudent(id))
        if (!isDeleting) {
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
                    readOnly ={true}
                    placeholder={value.name}
                />
            </View>

            <View style = {styles.containerfield}>
                <Text>MSSV</Text>
                <TextInput 
                    style = {styles.textinput}
                    readOnly ={true}
                    placeholder={value.code}

                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Lớp</Text>
                <TextInput 
                    style = {styles.textinput}
                    readOnly ={true}
                    placeholder={value.class}

                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Email</Text>
                <TextInput 
                    style = {styles.textinput}
                    readOnly ={true}
                    placeholder={value.email}

                />
            </View>

            <View style = {styles.containerfield}>
                <Text>Địa chỉ</Text>
                <TextInput 
                    style = {[styles.textinput, {borderWidth: 0.5, borderBottomWidth: 0.5, padding: 10, textAlignVertical:'top'}]}
                    multiline
                    numberOfLines={5}
                    readOnly ={true}
                    placeholder={value.address}

                />
            </View>

            <View style = {styles.containerfooter}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Cảnh báo', 'Người dùng có muốn xóa sinh viên hay không?', [
                            {
                                text: 'Có',
                                onPress: async () => {
                                    handlerDeleSv(value.id)
                                }
                            },
                            {
                                text: 'Không'
                            },
                            
                        ]);
                    }}
                >
                    <Text style = {{color:'red'}}>Xóa sinh viên</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        flex:1
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
        borderBottomWidth: 2,
        width: '95%',
    }
})