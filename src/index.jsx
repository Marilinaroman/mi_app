import {View} from 'react-native';
import {styles} from './style/style'
import { theme } from './constants';
import { Profile, Login, SignUp } from './screens';
import { Header } from './components';
import {  useState } from 'react';
import { Button } from 'react-native';
import { useFonts } from 'expo-font';
import { ActivityIndicator } from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from './store';

LocaleConfig.locales['Es'] = {
    monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre'
        ],
        monthNamesShort: ['Ene.', 'Feb.', 'Mar.', 'Abril', 'May.', 'Jun.', 'Jul.', 'Ago.', 'Sept.', 'Oct.', 'Nov.', 'Dic.'],
        dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        dayNamesShort: ['Dom.', 'Lun.', 'Mar.', 'Mier.', 'Jue.', 'Vie.', 'Sab.'],
        today: "Hoy"
    };
    
    LocaleConfig.defaultLocale = 'Es';

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
        <Provider store={store}>
        <Navigation>
        <View>
            <Header title={'My Services'}/>
            <Content />
            <Button title="Registrarme" onPress={()=>setIsRegistred(false)} 
            style={styles.buttonConfirm}/>
            

        </View>

        </Navigation>

        </Provider>

    )
}