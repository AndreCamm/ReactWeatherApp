import React, { useEffect } from "react"
import "./Landing.css"
import axios from "axios"
import { WeatherBoard } from "./WeatherBoard"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"

const Landing = (props) => {

    const [location, setLocation] = React.useState(null)
    const [weatherData, setWeatherData] = React.useState(null)
    const [error, setError] = React.useState(null)

    const getGeoInfo = () => {

        const geoSuccess = (position) => {

            console.log('As parada sao', position.coords.latitude)

            getWeather({ coords: {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
            }})
        }

        const geoError = () => {
            setError('problema com geoerror')
        }

        console.log(navigator.geolocation.getCurrentPosition(geoSuccess, geoError))

    }

    useEffect(() => {
        getGeoInfo()
    }, [])

    const getWeather = ({location, coords}) => {
        setError(null)

        let params = ''

        if(location) {
            params = `q=${location}`
        } else if (coords) {
            params = `lat=${coords.latitude}&lon=${coords.longitude}`
        }

        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?${params}&units=metric&appid=553f805ecc93dc6f02c441549afd55c3`
            )
            .then((response) => {
                //api call pras foto aqui
                document.body.style.backgroundImage = 'url(https://media-cdn.tripadvisor.com/media/photo-s/06/18/ac/d0/alegrete.jpg)'
                console.log('OIE', response.data.name)
                setWeatherData(response.data)
            })

            .catch((error) => {
                if(error.response.data.cod === '404') {
                    setError('This city is mais longe que o Alegrete')
                } else {
                    console.error('Fatal error', error)
                }
            })
    }

    const doSubmit = (e) => {
        e.preventDefault()
        console.log(location)
        getWeather({location})
    }

    return (
        <div className="landing-wrap">
            <div className="form-wrap">
                {error && <span>{error}</span>}
                <form id="main-search" onSubmit={(e) => doSubmit(e)}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            id="city"
                            placeholder="Enter city here"
                            onChange={(e) => setLocation(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" id="submit-btn" />
                </form>
            </div>
            
            {weatherData && <WeatherBoard data={weatherData} />}
        </div>
    )
}

export default Landing
