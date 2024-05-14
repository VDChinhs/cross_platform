import { View, Text, StyleSheet } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useState } from "react";

export default function BottomShet() {
    const staticData= [
        {
          id: 0,
          fillColor: "#ff7473",
          unfillColor: "#fbbfbb", 
        },
        {
          id: 1,
          fillColor: "#5567e9",
          unfillColor: "#afb5f5",
        },
        {
          id: 2,
          fillColor: "#a98ae7",
          unfillColor: "#cab6f4",
        },
        {
          id: 3,
          fillColor: "#fcb779",
          unfillColor: "#ffd1a7",
        },
        {
          id: 4,
          fillColor: "#2be055",
          unfillColor: "#cbf2d5",
        },
      ];

    const [checkboxState, setCheckboxState] = useState(null);
    return(
        <View style = {styles.container}>
            <Text>thngsasd</Text>
            {
              staticData.map(value =>(
                <BouncyCheckbox
                  key={value.id}
                  size={30}
                  text="Hello"
                  fillColor={value.fillColor}
                  unfillColor={value.unfillColor}
                  textStyle={{
                    textDecorationLine:'none',
                    fontSize:20,
                    fontWeight:'bold',
                  }}
                  onPress={() => setCheckboxState(value.id)}
                />
              ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:200,
        gap:20,
        justifyContent:'center',
        alignItems:'center'
    }
})