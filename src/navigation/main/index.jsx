import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Profile, SignUp } from "../../screens";

const Stack = createNativeStackNavigator()

const MainNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>

    )
}

export default MainNavigator