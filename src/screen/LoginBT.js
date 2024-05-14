import { Button, TextInput, View,StyleSheet,Image,Text,TouchableOpacity } from "react-native";

export default function LoginBT() {
    return(
        <View style = {styles.container}>
            <View style = {styles.containeravatar}>
            <Image
                    source={require('../assets/avatar7.png')}
                    style = {styles.avatar}
                />
            </View>
            <Text style ={{fontSize:30,color:'white'}}>Login</Text>
            <View style = {styles.containerinput}>
                <View>
                    <Text style = {{fontSize:16}}>Email</Text>
                    <TextInput style = {styles.input} placeholder="Email"></TextInput>
                </View>
                <View >
                    <Text style = {{fontSize:16}}>Password</Text>
                    <TextInput style = {styles.input} placeholder="Password"></TextInput>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textbutton}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#21B4A9',
      gap:20
    },
    containeravatar:{
        alignItems:'center'
    },
    avatar:{
        width:120,
        height:120,
        borderRadius:60
    },
    containerinput:{
        backgroundColor:'white',
        width:300,
        padding:20,
        borderRadius:8,
        gap:15
    },
    input:{
        borderColor:'black',
        padding:8,
        borderWidth:1,
        borderRadius:5
    },
    button: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor:'#03BFFF'
    },
    textbutton: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      marginLeft: 10,
    }
});