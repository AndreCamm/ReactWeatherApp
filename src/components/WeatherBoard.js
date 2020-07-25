import React, { useEffect } from 'react'
import { FaCloudShowersHeavy } from "react-icons/fa"
import { FiSun } from "react-icons/fi"

export const WeatherBoard = (props) => {

    useEffect(() => {
        console.log('olha essa parad', props)
    }, [])

    return (
        <div className="inner-wrap">
                <h3>{props.data.name}, {props.data.sys.country}</h3>
                <FaCloudShowersHeavy size="100px" color="lightskyblue" />
                <h1>{props.data.main.temp}°C</h1>
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
    )
}