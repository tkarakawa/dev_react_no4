import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
 
const CurrentWeather = () => {
    console.log("2画面目");
    return (
    <div>
        <h1>currentweather</h1>
        <input type="text"></input>
        <button>検索ボタン</button>
        <div>結果エリア</div>
        <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/"
        >
        戻る
        </Button>

    </div>
    )
}
 
export default CurrentWeather