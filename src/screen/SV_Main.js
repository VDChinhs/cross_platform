import { View, StyleSheet, Text, TouchableOpacity, TextInput, Button, FlatList, ActivityIndicator } from "react-native";
import { useEffect, useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getSutudent } from "../redux/actions/actionStudent";

export default function SV_Main({navigation}) {
    const[isSearchText, setSearchText] = useState('')
    const[isSearch, setSearch] = useState('')
    const {students, isLoading} = useSelector(state => state.studentsReducer);

    const dispatch = useDispatch();
    const fetchStudent = () => dispatch(getSutudent());
        
    useEffect(() =>{
        fetchStudent();
        navigation.setOptions({
            title:"Danh sách sinh viên",
            headerTitleAlign: 'center',
            headerRight: () => 
                <TouchableOpacity 
                    onPress={() => navigation.navigate('SV_Add')}
                    style = {{paddingRight: 15}}
                >
                    <Text>Add</Text>
                </TouchableOpacity>
        });
    },[])

    return(
        <View style = {{flex: 1, justifyContent: 'center'}}>
            {isLoading ? 
                <ActivityIndicator
                    size={'large'}
                    color={'black'}
                />
            :
                <View style = {styles.container}>
                    <View style = {styles.containersearch}>
                        <TextInput 
                            style = {styles.textinput}
                            onChangeText={(text) => {
                                setSearchText(text)
                                // setSearch(text)
                            }}
                        />
                        <Button title="Tìm kiếm"
                            onPress={() => {
                                setSearch(isSearchText)
                            }}
                        />
                    </View>
                    <FlatList
                        data={students.filter(person => person.name.toLowerCase().includes(isSearch.toLowerCase()))}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('SV_Info', {sv: item})
                                }}>
                                    <View style = {{alignItems:'center'}}>
                                        <View
                                            style={{
                                                paddingVertical: 20,
                                                width: '90%',
                                                borderBottomWidth: 1,
                                        
                                            }}>
                                            <Text style = {{paddingBottom: 5}}> {item.name} </Text>
                                            <Text style = {{fontWeight:'300'}}>{item.studentCode}</Text>
                                            <Text style = {{fontWeight:'300'}}>{item.dateOfBirth}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        flex: 1
    },
    containersearch:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal: 15
    },
    textinput:{
        borderColor:'black',
        borderWidth: 1,
        paddingHorizontal: 15,
        width: '70%'
        
    }
})