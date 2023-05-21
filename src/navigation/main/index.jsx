import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Login, Profile, SignUp,Home, Servicios, Turnos, Pagos } from "../../screens";
import { theme } from "../../constants"

const Stack = createNativeStackNavigator()

const MainNavigator =()=>{
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
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />

        </Stack.Navigator>

    )
}

export default MainNavigator