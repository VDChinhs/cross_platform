import { Text, View, StyleSheet, ActivityIndicator, TextInput, TouchableOpacity, Alert } from "react-native";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { myDeleStudent, myStudents } from "../redux/actions/StudentActions";
import { convertDate } from "../helpers/Date";


export default function Detail({ navigation }) {
    const { isLoadingOneStudent, studenting, isDele } = useSelector(state => state.StudentSlice)
    const dispatch = useDispatch()

    useEffect(() => {
        navigation.setOptions({
            title: "Thông tin chi tiết sinh viên",
            headerTitleAlign: 'center',
        });
    }, [])

    return (
        <View style={{ height: '100%', justifyContent: 'center' }}>
            {isLoadingOneStudent ?
                <ActivityIndicator
                    size={'large'}
                    color={'black'}
                />
                :
                <View style={styles.container}>
                    <View style={styles.containerinfo}>
                        <View>
                            <Text style={styles.textbold}>Tên sinh viên</Text>
                            <TextInput
                                style={styles.textinput}
                                readOnly={true}
                                placeholder={studenting.name}
                            />
                        </View>
                        <View>
                            <Text style={styles.textbold}>MSSV</Text>
                            <TextInput
                                style={styles.textinput}
                                readOnly={true}
                                placeholder={studenting.studentCode}
                            />
                        </View>
                        <View>
                            <Text style={styles.textbold}>Ngày sinh</Text>
                            <TextInput
                                style={styles.textinput}
                                readOnly={true}
                                placeholder={convertDate(new Date(studenting.dateOfBirth))}
                            />
                        </View>
                    </View>

                    <TouchableOpacity
                        disabled={isDele}
                        onPress={() => {
                            Alert.alert('Cảnh báo', 'Người dùng có muốn xóa sinh viên hay không?', [
                                {
                                    text: 'Có',
                                    onPress: () => {
                                        dispatch(myDeleStudent({ id: studenting.id }))
                                        if (!isDele) {
                                            dispatch(myStudents({ pageindex: 1 }))
                                            navigation.goBack()
                                        }
                                    }
                                },
                                {
                                    text: 'Không'
                                },

                            ]);
                        }}
                    >
                        <Text style={{ color: 'red', fontSize: 16, textDecorationLine: 'underline' }}>Xóa sinh viên</Text>
                    </TouchableOpacity>
                </View>
            }
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
    textbold: {
        fontWeight: 'bold'
    },
    textinput: {
        borderColor: 'black',
        borderBottomWidth: 1,
        fontWeight: 'bold'
    }
})