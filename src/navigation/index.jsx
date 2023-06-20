import { NavigationContainer } from "@react-navigation/native";
import LoginNavigator from "./auth";

import TabsNavigator from "./tabs";
import { useSelector } from "react-redux";

const Navigation = ()=>{
    const userId = useSelector((state)=> state.users.userId)

    return(
        <NavigationContainer>
            {userId? <TabsNavigator /> : <LoginNavigator/>}
        </NavigationContainer>
    )
}

export default Navigation