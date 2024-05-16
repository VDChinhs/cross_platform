import { Text, View, StyleSheet, TextInput, TouchableOpacity, Alert, Button } from "react-native";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DateTimePicker from '@react-native-community/datetimepicker';
import { convertDate } from "../helpers/Date";
import { myCreateStudent, myStudents } from "../redux/actions/StudentActions";

export default function Add({ navigation }) {
    const { isCreating } = useSelector(state => state.StudentSlice)
    const dispatch = useDispatch()

    const [isName, setName] = useState('')
    const [isMSSV, setMSSV] = useState('')
    const [isDOB, setDOB] = useState(new Date())

    const [isshowpickdate, setShowPickDate] = useState(false);

    useEffect(() => {
        navigation.setOptions({
            title: "Thêm mới sinh viên",
            headerTitleAlign: 'center',
        });
    }, [])

    function handlerAddSv(name, mssv, dob) {
        // let reg =/@/g
        if (name.length < 5 || name == "") {
            Alert.alert('Cảnh báo', 'Tên sinh viên phải tối thiểu 20 ký tự', [
                { text: 'Ok' }
            ]);
            return
        }
        else if (mssv.length < 5 || mssv == "") {
            Alert.alert('Cảnh báo', 'MSSV tối thiểu 5 ký tự', [
                { text: 'Ok' }
            ]);
            return
        }
        // else if (lop == "") {
        //     Alert.alert('Cảnh báo', 'Không để trống', [
        //         {text: 'Ok'}
        //     ]);
        //     return
        // }
        // else if(!reg.test(email) || email == ""){
        //     Alert.alert('Cảnh báo', 'Email phải có ký tự @', [
        //         {text: 'Ok'}
        //     ]);
        //     return
        // }
        dispatch(myCreateStudent({ name: name, mssv: mssv, dob: dob }))
        if (!isCreating) {
            dispatch(myStudents({ pageindex: 1 }))
            navigation.goBack()
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerinfo}>
                <View style={styles.containerinput}>
                    <Text style={styles.textbold}>Tên sinh viên</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View style={styles.containerinput}>
                    <Text style={styles.textbold}>MSSV</Text>
                    <TextInput
                        style={styles.textinput}
                        onChangeText={text => setMSSV(text)}
                    />
                </View>
                <View style={styles.containerinput}>
                    <Text style={styles.textbold}>Ngày sinh</Text>
                    <TouchableOpacity
                        onPress={() => setShowPickDate(true)}
                    >
                        <View style={[styles.textinput, { paddingVertical: 5 }]}>
                            <Text>{convertDate(isDOB)}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerfooter}>
                <TouchableOpacity
                    onPress={() => {
                        Alert.alert('Cảnh báo', 'Người dùng có muốn bỏ thêm mới hay không?', [
                            {
                                text: 'Có',
                                onPress: async () => {
                                    navigation.navigate('Home')
                                }
                            },
                            {
                                text: 'Không'
                            },

                        ]);
                    }}
                >
                    <Text style={{ color: 'blue', fontSize: 16, textDecorationLine: 'underline' }}>Hủy bỏ</Text>
                </TouchableOpacity>
                <Button
                    title="Lưu lại"
                    onPress={() => {
                        handlerAddSv(isName, isMSSV, isDOB)
                    }}
                    disabled={isCreating}
                />
            </View>

            {isshowpickdate && (
                <DateTimePicker
                    timeZoneName="Asia/Bangkok"
                    testID="dateTimePicker"
                    value={isDOB}
                    mode={'date'}
                    is24Hour={true}
                    themeVariant="dark"
                    onChange={(event, selectedDate) => {
                        const chooseDate = selectedDate;
                        setShowPickDate(false)
                        setDOB(chooseDate)
                    }}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%',
        padding: 15,
        gap: 20
    },
    containerinfo: {
        gap: 15
    },
    containerinput: {
        gap: 5
    },
    containerfooter: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textbold: {
        fontWeight: 'bold'
    },
    textinput: {
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 10
    }
})