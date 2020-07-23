import React from "react"
import "./Landing.css"
import axios from "axios"
import { FaCloudShowersHeavy } from "react-icons/fa"
import { FiSun } from "react-icons/fi"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"
// import { FaCloudShowersHeavy } from "react-icons/fa"

const Landing = () => {
    React.useEffect(() => {
        getGeoInfo()
    })
    const getGeoInfo = () => {
        axios
            .get("https://ipapi.co/json/")
            .then((response) => {
                let data = response.data
                console.log(data)
                this.setState({
                    countryName: data.country_name,
                    countryCode: data.country_calling_code,
                })
            })

            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="landing-wrap">
            <div className="form-wrap">
                <form id="main-search">
                    <label>
                        <input
                            type="text"
                            name="name"
                            id="city"
                            placeholder="Enter city here"
                        />
                    </label>
                    <input type="submit" value="Submit" id="submit-btn" />
                </form>
            </div>
            <div className="inner-wrap">
                <h3>Manchester</h3>
                <FaCloudShowersHeavy size="100px" color="lightskyblue" />
                <h1>20°C</h1>
                <div id="min-max">
                    <h3>10°C</h3>
                    <h3>25°C</h3>
                </div>
                <p>Its cloudy again.</p>
                <hr />
                <div id="forecast">
                    <div>
                        <p>Mon</p>
                        <FaCloudShowersHeavy size="35px" color="lightskyblue" />
                        <p>22/07</p>
                    </div>
                    <div>
                        <p>Mon</p>
                        <FiSun size="35px" color="lightskyblue" />
                        <p>22/07</p>
                    </div>
                    <div>
                        <p>Mon</p>
                        <FaCloudShowersHeavy size="35px" color="lightskyblue" />
                        <p>22/07</p>
                    </div>
                    <div>
                        <p>Mon</p>
                        <FiSun size="35px" color="lightskyblue" />
                        <p>22/07</p>
                    </div>
                    <div>
                        <p>Mon</p>
                        <FaCloudShowersHeavy size="35px" color="lightskyblue" />
                        <p>22/07</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing
