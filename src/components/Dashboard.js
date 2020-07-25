import React from "react"
import axios from "axios"
import "./Dashboard.css"
const Dashboard = (props) => {
    React.useEffect(() => {
        getWeather(props.location.state.location)
    },[])
    const getWeather = (location) => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${location},GB&units=metric&appid=553f805ecc93dc6f02c441549afd55c3`
            )
            .then((response) => {
                console.log(response.data.main)
            })

            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div>
            <h1>Test</h1>
            <p>{axios.data}</p>
        </div>
    )
}

export default Dashboard
