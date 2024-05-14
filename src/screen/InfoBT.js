import { View,StyleSheet, Image,Text,TouchableOpacity } from "react-native";


export default function InfoBT() {
    return(
        <View>
            <Image
                source={require('../assets/1E90FF.png')}
                style = {styles.backgrounftop}
            />
            <View style = {styles.container}>
                <View style = {styles.containeravatar}>
                    <Image
                        source={require('../assets/avatar7.png')}
                        style = {styles.avatar}
                    />
                    <Text style = {styles.textnumber}>Your Name</Text>
                </View>
                <Text style = {{fontSize:17}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et ullamcorper nisi.
                </Text>
                <View style = {styles.containerinfodetails}>
                    <View style = {styles.infodetails}>
                        <Text style = {styles.textnumber}>1234</Text>
                        <Text style = {styles.text}>Post</Text>
                    </View>
                    <View style = {styles.infodetails}>
                        <Text style = {styles.textnumber}>5678</Text>
                        <Text style = {styles.text}>Followers</Text>
                    </View>
                    <View style = {styles.infodetails}>
                        <Text style = {styles.textnumber}>9101</Text>
                        <Text style = {styles.text}>Following</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.textbutton}>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:15,
        gap:20
    },
    backgrounftop:{
        width:'100%',
        height:200
    },
    avatar:{
        width:100,
        height:100,
        borderRadius:50,
        backgroundColor:'orange'
    },
    containeravatar:{
        alignItems:'center',
        marginTop:-70,
        gap:10
    },
    containerinfodetails:{
        flexDirection:'row',
        justifyContent:'space-around'
    },
    infodetails:{
        alignItems:'center'
    },
    textnumber:{
        fontWeight:'bold',
        fontSize:22
    },
    text:{
        fontSize:17,
        opacity:0.5
    },
    button: {
        height: 40,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:5,
        backgroundColor:'#0066CD'
    },
    textbutton: {
      fontWeight: 'bold',
      fontSize: 16,
      color: 'white',
      marginLeft: 10,
    }
});