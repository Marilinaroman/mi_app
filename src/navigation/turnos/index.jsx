import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Turnos } from "../../screens";
import { theme } from "../../constants";

const Stack = createNativeStackNavigator();

const TurnosNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Turnos"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontFamily: "Sans-Bold",
        },
      }}>
      <Stack.Screen name="Turnos" component={Turnos} />
    </Stack.Navigator>
  );
};

export default TurnosNavigator;