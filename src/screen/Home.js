import { Text, View,StyleSheet } from "react-native";
import Button from "../components/Button";


export default function Home({ navigation }) {
    return(    
        <View style = {styles.container}>
            <Text>This is Home page</Text>
            <Button
                mode="outlined"
                onPress={() =>
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'LoginScreen' }],
                })
                }
            >
                Logout
            </Button>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
