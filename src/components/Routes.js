import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import index from "../pages/index"

// import SignUp from "pages/SignUp"

const Routes = () => (
    <Router>
        <Switch>
            {/* <Route exact path="/signUp" component={SignUp} /> */}
            <Route component={index} />
        </Switch>
    </Router>
)

export default Routes