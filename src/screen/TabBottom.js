import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const CustomTabBarButton = ({ children, onPress }) => (
    <TouchableOpacity
        style = {{
            top:-12,
            justifyContent: 'center',
            alignItems: 'center',
            ...style.shadow
        }}
        onPress = {onPress} 
    >
        <View
            style = {{
                width: 50,
                height: 50,
                borderRadius: 35,
                backgroundColor:'#E66A6A'
            }}>
            {children}
        </View>
    </TouchableOpacity>
)

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );    
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen1() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings1!</Text>
      </View>
    );
  }
  function SettingsScreen2() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings2!</Text>
      </View>
    );
  }
  function AddScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Addscreen</Text>
      </View>
    );
  }

const Tab = createBottomTabNavigator();

export default function TabBottom() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
            headerShown:false,
            tabBarShowLabel:false,
            tabBarStyle:{
                position: 'absolute',
                bottom: 11,
                left: 11,
                right: 11,
                elevation: 0,
                backgroundColor: '#ffffff',
                borderRadius: 28,
                height: 46,
                ...style.shadow
            }
        }}
      >
        <Tab.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{
                headerShown:true,
                tabBarIcon:({focused}) => (
                    <View style = {style.tabicon}>
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style = {[style.image, {tintColor: focused ? '#E66A6A' : 'black'}]}
                        />
                        <Text style = {[style.text, {color: focused ? '#E66A6A' : 'black'}]}>Tổng quan</Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style = {style.tabicon}>
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style = {[style.image, {tintColor: focused ? '#E66A6A' : 'black'}]}
                        />
                        <Text style = {[style.text, {color: focused ? '#E66A6A' : 'black'}]}>Tổng quan</Text>
                    </View>
                )
            }}
        />
        <Tab.Screen name="Add" component={AddScreen}
                options={{
                    tabBarIcon: ({focused}) => (
                       <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style = {{
                                width:40,
                                height:40,
                                tintColor: 'black'
                            }}
                        /> 
                    )
                    ,
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props}/>
                    )
                }} 
            />
        <Tab.Screen 
            name="Settings1" 
            component={SettingsScreen1} 
            options={{

                tabBarIcon:({focused}) => (
                    <View style = {style.tabicon}>
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style = {[style.image, {tintColor: focused ? '#E66A6A' : 'black'}]}
                        />
                        <Text style = {[style.text, {color: focused ? '#E66A6A' : 'black'}]}>Tổng quan</Text>
                    </View>
                )
            }}
        />
        <Tab.Screen 
            name="Settings2" 
            component={SettingsScreen2} 
            options={{
                tabBarIcon:({focused}) => (
                    <View style = {style.tabicon}>
                        <Image
                            source={require('../assets/user.png')}
                            resizeMode="contain"
                            style = {[style.image, {tintColor: focused ? '#E66A6A' : 'black'}]}
                        />
                        <Text style = {[style.text, {color: focused ? '#E66A6A' : 'black'}]}>Tổng quan</Text>
                    </View>
                )
            }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
    shadow:{
        shadowColor:'red',
        shadowOffset:{
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    },
    tabicon:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        width:20,
        height:20
    },
    text:{
        fontSize: 9,
        fontWeight: 'bold',
    }
})
