import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Profile } from "../../screens";
import { theme } from "../../constants";

const Stack = createNativeStackNavigator();

const ProfileNavigator = () => {
    return (
        <Stack.Navigator
        initialRouteName="Profile"
        screenOptions={{
            headerStyle: {
            backgroundColor: theme.colors.primary,
            },
            headerTintColor: theme.colors.textPrimary,
            headerTitleStyle: {
            fontFamily: "Sans-Bold",
            },
        }}>
        <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
};

export default ProfileNavigator;