import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Add from './Add';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Add" component={Add} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}