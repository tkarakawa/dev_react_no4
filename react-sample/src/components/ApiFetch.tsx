import React, { useEffect, useState } from 'react';
import axios from 'axios'

const ApiFetch = () => {
    const urlAPI = "https://api.openweathermap.org/data/2.5/weather?q=tokyo&appid=db69ee2a14dbfd5f2abede01a778873e";
    const [datas, setDatas] = useState([]);
    console.log(axios.defaults.baseURL)
    useEffect( () => {
      axios.get(urlAPI).then((res)=> {
        setDatas(res.data);
      })
    },[])
    console.log(datas)
    
    return (
      <div className="App">
        <h1>WEATHER</h1>
        <div>
          {/* {datas.map((data: Data) => (
            <div>{data.weather}</div>
          ))} */}
        </div>
      </div>
    );
}

export default ApiFetch