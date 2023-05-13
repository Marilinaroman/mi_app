import {View} from 'react-native';
import {styles} from './style/style'
import { theme } from './constants';
import { Profile, Login, SignUp } from './screens';
import { Header } from './components';
import {  useState } from 'react';
import { Button } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';

export default function App() {

    const [loaded] = useFonts({
        'Sans-Regular':require('../assets/fonts/SmoochSans-Regular.ttf'),
        'Sans-Light':require('../assets/fonts/SmoochSans-Light.ttf'),
        'Sans-Medium':require('../assets/fonts/SmoochSans-Medium.ttf'),
        'Sans-Bold':require('../assets/fonts/SmoochSans-Bold.ttf')
    })
    const [isRegistred, setIsRegistred] = useState(true)

    if(!loaded){
        return <ActivityIndicator size='large' color={theme.colors.primary} />
    }

    const Content =()=>(
        isRegistred? <Login /> : <SignUp/>

    )

    return(
        <View>
            <Header title={'My Services'}/>
            <Content />
            <Button title="Registrarme" onPress={()=>setIsRegistred(false)} 
            style={styles.buttonConfirm}/>
            

        </View>

    )
}