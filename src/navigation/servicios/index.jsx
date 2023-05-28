import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Servicios } from "../../screens";
import { theme } from "../../constants";

const Stack = createNativeStackNavigator();

const ServiciosNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Servicios"
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.colors.primary,
        },
        headerTintColor: theme.colors.textPrimary,
        headerTitleStyle: {
          fontFamily: "Sans-Bold",
        },
      }}>
      <Stack.Screen name="Actividades" component={Servicios} />
    </Stack.Navigator>
  );
};

export default ServiciosNavigator;