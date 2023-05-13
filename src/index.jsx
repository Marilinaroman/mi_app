import {View} from 'react-native';
import {styles} from './style/style'
import { Profile, Login, SignUp } from './screens';
import { Header } from './components';
import {  useState } from 'react';
import { Button } from 'react-native';

export default function App() {

    const [isRegistred, setIsRegistred] = useState(true)


    const Content =()=>(
        isRegistred? <Login /> : <SignUp/>

    )

    return(
        <View>
            <Header title={'Easy Services'}/>
            <Content />
            <Button title="Registrarme" onPress={()=>setIsRegistred(false)} 
            style={styles.buttonConfirm}/>
            

        </View>

    )
}