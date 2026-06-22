import { useState } from "react"
import axios from "axios"

function Weather() {

    const [city, setCity] = useState("")
    const [weather, setWeather] = useState("")
    const [temp, setTemp] = useState("")
    const [desc, setDesc] = useState("")
    const [error, setError] = useState("")

    function handleCity(evt) {
        setCity(evt.target.value)

    }

    function getWeather() {

        setError("");

        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=80cb399b36cdb4bea8b233371e9b9e81`)

            .then(function (success) {
                console.log(success)
                setWeather(success.data.weather[0].main)
                setTemp(success.data.main.temp)
                setDesc(success.data.weather[0].description)
            }).catch(function (error) {
                setWeather("");
                setTemp("");
                setDesc("");

                if (error.response && error.response.status === 404) {
                    setError("City not found. Please enter a valid city name.");
                } else {
                    setError("Failed to fetch weather data. Please try again.");
                }
            });
    }

    return (
        <>
            <div className="bg-black p-20">
                <div className="bg-green-400 p-20 rounded-md leading-10">
                    <h1 className=" text-3xl  font-bold">Weather Report</h1>
                    <p>I can give you a weather report about your city !</p>
                    <input onChange={handleCity} type="text" placeholder="Enter Your City Name"
                        className="rounded-md mb-3 pl-1 border border-black" /> <br />
                    <button onClick={getWeather} className="bg-black rounded-md px-2 py-1 mb-2 text-white">Get Report</button>

                    {error && (
                        <p className="text-red-600 font-bold">{error}</p>
                    )}

                    <div className=" mt-6 bg-slate-200 p-4 rounded-md shadow">
                        <h2 className="text-xl font-bold mb-2">
                            Weather Information
                        </h2>
                        <h1><b>Weather : </b>{weather}</h1>
                        <p><b>Temperature : </b>{temp}°C </p>
                        <p><b>Description : </b>{desc}</p>
                    </div>


                </div>

            </div>
        </>
    )
}

export default Weather