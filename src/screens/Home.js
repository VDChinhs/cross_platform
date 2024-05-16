import { Text, View, TouchableOpacity, StyleSheet, TextInput, Button, ActivityIndicator, FlatList, Keyboard } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { myStudentById, myStudents } from "../redux/actions/StudentActions";
import { convertDate } from "../helpers/Date";

export default function Home({ navigation }) {
    const { isLoading, listStudent, numberPages } = useSelector(state => state.StudentSlice)
    const dispatch = useDispatch()

    const [isSearchText, setSearchText] = useState('')
    const [isSearch, setSearch] = useState('')

    useEffect(() => {
        dispatch(myStudents({ pageindex: 1 }))
        navigation.setOptions({
            title: "Danh sách sinh viên",
            headerTitleAlign: 'center',
            headerRight: () => (
                <TouchableOpacity
                    style={{ paddingRight: 15 }}
                    onPress={() => navigation.navigate('Add')}
                >
                    <AntDesign name="plus" size={24} color="black" />
                </TouchableOpacity>
            )
        });
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.containersearch}>
                <TextInput
                    style={styles.textinput}
                    onChangeText={(text) => {
                        setSearchText(text)

                    }}
                />
                <Button title="Tìm kiếm"
                    onPress={() => {
                        setSearch(isSearchText)
                        Keyboard.dismiss()
                    }}
                />
            </View>
            <View style={styles.containerpage}>
                {Array.from({ length: numberPages }, (_, index) => index + 1).map(page => (
                    <TouchableOpacity
                        key={page}
                        style={styles.page}
                        onPress={() => {
                            dispatch(myStudents({ pageindex: page }))
                        }}
                    >
                        <Text style={styles.textbold}>{page}</Text>

                    </TouchableOpacity>
                ))}
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
                {isLoading ?
                    <ActivityIndicator
                        size={'large'}
                        color={'black'}
                    />
                    :
                    <FlatList
                        data={listStudent.filter(person => person.name.toLowerCase().includes(isSearch.toLowerCase()))}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    dispatch(myStudentById({ id: item.id }))
                                    navigation.navigate('Detail')
                                }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <View
                                            style={{
                                                paddingVertical: 15,
                                                width: '90%',
                                                borderBottomWidth: 2,

                                            }}>
                                            <Text style={[styles.textbold, { paddingBottom: 5 }]} >{item.name}</Text>
                                            <Text >MSSV: {item.studentCode}</Text>
                                            <Text >DOB: {convertDate(new Date(item.dateOfBirth))}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },
    containersearch: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    containerpage: {
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 10,
        paddingTop: 15
    },
    page: {
        backgroundColor: 'gray',
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textinput: {
        borderColor: 'black',
        borderWidth: 1,
        paddingHorizontal: 15,
        width: '70%'
    },
    textbold: {
        fontWeight: 'bold'
    }
})