import React from 'react'
import { Link } from "react-router-dom";
 
const CurrentWeather = () => {
    return (
    <div>
        <h1>currentweather</h1>
        <input type="text"></input>
        <button>検索ボタン</button>
        <div>結果エリア</div>
        <button>戻るボタン</button>
        <Link to="/">
          戻る
        </Link>

    </div>
    )
}
 
export default CurrentWeather