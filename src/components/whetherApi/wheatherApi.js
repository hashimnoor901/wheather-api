import React, { useEffect, useState } from 'react'
import axios from 'axios'
const WheatherApi = () => {
    const [city,setCity] = useState('islamabad') // default value
    const [whetherData, setWhetherData] = useState(null)

    useEffect(()=>{
        const fetchWhether = async() => {
            const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.51&longitude=-0.13&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon'

            try{
                const response = await axios.get(url)
                setWhetherData(response.data)
            }
            catch(error){
                console.error('Error fetching weather data:', error);
            }
        }
        fetchWhether()
    },[])
  return (
    <div>
      <h2>wheather Api</h2>
      {
        whetherData ? 
            <div>
                <p>Temprature:{whetherData.daily.temperature_2m_max[0]}°C (Max)},{whetherData.daily.temperature_2m_min[0]}°C (Min)</p>
                <h2>
                    {whetherData.daily.temperature_2m_min}
                </h2>
            </div>
         :
        
            <div>
                <p>loading Wheather Data...</p>
            </div>
        
      }
    </div>
  )
}

export default WheatherApi
