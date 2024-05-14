import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SV_Add from './SV_Add';
import SV_Info from './SV_Info';
import SV_Main from './SV_Main';

const Stack = createStackNavigator();

export default function SV_Nav() {
    return(
        <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="SV_Main"
          screenOptions={{
            headerShadowVisible: false
          }}
        >
            <Stack.Screen name="SV_Main" component={SV_Main} />
            <Stack.Screen name="SV_Info" component={SV_Info} />
            <Stack.Screen name="SV_Add" component={SV_Add} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}
