import React from "react"
import "./Header.css"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

const Header = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Dashboard">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
