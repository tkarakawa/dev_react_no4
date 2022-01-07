import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import InputForm from '../components/InputForm';
import ApiFetch from '../components/ApiFetch';

 
const CurrentWeather = () => {
    console.log("2画面目");
    return (
    <div>
        <h1>currentweather</h1>
        <InputForm />
        <div>
            結果エリア<ApiFetch />
        </div>
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