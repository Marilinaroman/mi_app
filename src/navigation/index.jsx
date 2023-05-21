import { NavigationContainer } from "@react-navigation/native";

import MainNavigator from "./main";
import TabsNavigator from "./tabs";

const Navigation = ()=>{
    return(
        <NavigationContainer>
            <TabsNavigator />
        </NavigationContainer>
    )
}

export default Navigation