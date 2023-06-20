import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login } from "../../screens";
import { theme } from "../../constants"

const Stack = createNativeStackNavigator()

const LoginNavigator =()=>{
    return(
        <Stack.Navigator initialRouteName="Login"
        screenOptions={{
            headerStyle:{
            backgroundColor: theme.colors.primary},
            headerTitleStyle:{
                fontFamily:'Sans-Bold'
            },
            headerTintColor: theme.colors.textPrimary
        }}
        >
            <Stack.Screen name="Auth" component={Login} />

        </Stack.Navigator>

    )
}

export default LoginNavigator