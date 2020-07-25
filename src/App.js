import React from "react"
import "./App.css"
import Header from "./components/Header"
import Landing from "./components/Landing"
import Dashboard from "./components/Dashboard"
import { BrowserRouter as Router, Route } from "react-router-dom"

const App = () => {
    return (
        <div className="App">
            <Router>
                <div>
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/Dashboard" component={Dashboard} />
                </div>
            </Router>
        </div>
    )
}

export default App
