import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import { theme } from "../../constants";
import { Animated } from "react-native";
import ProfileNavigator from "../profile";
import ServiciosNavigator from "../servicios";
import TurnosNavigator from "../turnos";
import MainNavigator from "../main";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {

    return (
        <BottomTab.Navigator initialRouteName="MainTap" 
        screenOptions={{
            headerShown: false,
            tabBarLabelStyle: {
                fontFamily: "Sans-Regular",
                fontSize: 12,
                },
                tabBarStyle: {
                backgroundColor: theme.colors.tabsBar,
                fontSize:12,
                fontFamily:'Sans-Regular'
                },
                tabBarActiveTintColor: 'white',
                tabBarIconStyle: {
                fontSize: 22,
                },
            }}>
            <BottomTab.Screen name="MainTap" component={MainNavigator} 
            options={{
            tabBarLabel: "Home",
            tabBarLabelStyle:{
                color:theme.colors.secundary
            },
            tabBarIcon: ({ focused, size }) => (
                <Animated.View >
                    <Ionicons name={focused ? "home" : "home-outline"} size={size} color={focused? theme.colors.primary : theme.colors.secundary} />
                </Animated.View>
                ),}}/>
            <BottomTab.Screen name="ProfileTap" component={ProfileNavigator} 
            options={{
            tabBarLabel: "Perfil",
            tabBarLabelStyle:{
                color:theme.colors.secundary
            },
            /* tabBarIcon: ({ focused, size }) => (
                <Animated.View >
                    <Ionicons name={focused ? "person-circle" : "person-circle-outline"} size={size} color={focused? theme.colors.primary : theme.colors.secundary} />
                    </Animated.View>
                )}}/>
            <BottomTab.Screen name="ServiciosTap" component={ServiciosNavigator} 
            options={{
            tabBarLabel: "Servicios",
            tabBarLabelStyle:{
                color:theme.colors.secundary
            }, */
            tabBarIcon: ({ focused, size }) => (
                <Animated.View >
                    <Ionicons name={focused ? "ios-add-circle" : "ios-add-circle-outline"} size={size} color={focused? theme.colors.primary : theme.colors.secundary} />
                    </Animated.View>
                )}}/>
            <BottomTab.Screen name="TurnosTap" component={TurnosNavigator}
            options={{
            tabBarLabel: "Turnos",
            tabBarLabelStyle:{
                color:theme.colors.secundary
            },
            tabBarIcon: ({ focused, size }) => (
                <Animated.View >
                    <Ionicons name={focused ? "calendar-sharp" : "calendar-outline"} size={size} color={focused? theme.colors.primary : theme.colors.secundary} />
                    </Animated.View>
                )}}/>
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;