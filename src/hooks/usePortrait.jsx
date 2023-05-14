import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const useOrientation = ()=>{
    const [isPortrait, setIsPortrait] = useState(true)

    const OnPortrait = ()=>{
        const dim = Dimensions.get('screen')
        return dim.height >= dim.width
    }

    const statePortrait = ()=>{
        setIsPortrait(OnPortrait)
    }
    useEffect(()=>{
        const suscriptions = Dimensions.addEventListener('change', ()=> statePortrait)
        return () => suscriptions.remove();
    })

    return {isPortrait}
}

export default useOrientation