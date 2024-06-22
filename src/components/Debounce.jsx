import React, { useEffect } from 'react'
import axios from 'axios'
const Debounce = () => {
    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((data)=>{
            if(data){
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data.coords.latitude}&lon=${data.coords.longitude}&appid=6029c059fc1617cffff73f469b41d49f`).then((res)=>res.json()).then((data2)=>console.log(data2.name)).catch((err)=>console.log(err))
            }
        })
    },[])

    return (
       <>
       </>
    );
};


export default Debounce
