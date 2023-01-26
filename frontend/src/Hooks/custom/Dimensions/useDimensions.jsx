import { useState , useLayoutEffect , useRef } from 'react'

function useDimensions() {
    const ref=useRef(null);
    const [dimensions,setDimensions]=useState({height:0,width:0});
    useLayoutEffect(()=>{
        if(ref?.current){
            setDimensions({
                height:ref.current.offsetHeight,
                width:ref.current.offsetWidth,
            })
        }
    },[]);
    return {
        dimensions,
        ref
    }
}

export default useDimensions