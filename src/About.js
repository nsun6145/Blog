import React from "react";
import { useState } from "react";

export default function About(){
    const[zip, setZip] = useState(0);
    const[forecast, setForecast] = useState("");


     
      const fetchData = async (zip) => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=052f26926ae9784c2d677ca7bc5dec98`);
        const forecast = await response.json();

        const city = forecast['name'];
        const description = forecast['weather'][0]['description']
        const high = forecast['main']['temp_max']
        const low = forecast['main']['temp_min']
        const tempHigh = parseInt((high - 273.15) * 1.8 + 32);
        const tempLow = parseInt((low - 273.15) * 1.8 + 32);

        setForecast(`${city}: currently ${description} with a high of ${tempHigh} and low of ${tempLow}`);
        
    }
    

    const handleChange = (event) => {
        setZip(event.target.value);
        console.log(`Your zip code is + ${zip}`);
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        fetchData(zip);
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label style={{display: 'block'}}> Please enter zip code for your location</label>
                <input style={{width: '10ch'}} type="text" inputMode="numeric" onChange= {e => setZip(e.target.value)} />
                <button type="submit"> Get forecast</button>
            </form>
            <output>{forecast}</output>
        </div>
    )

}