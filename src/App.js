import Header from './Components/Header'
import Courses from "./Components/Pages/Courses";
import Course from "./Components/Pages/Course";
import Support from "./Components/Pages/Support";
import Home from "./Components/Pages/Home";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Login from "./Components/Pages/Login";
import Schedule from "./Components/Pages/Schedule";
import Logout from "./Components/Pages/Logout";
import People from "./Components/Pages/People";


function App() {

    return (

        <Router>
            <div>
                <Header/>
            </div>

            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/logout" component={Logout}/>
                <Route exact path="/course" component={Courses}/>
                <Route path="/course/:id" component={Course}/>
                <Route path="/schedule" component={Schedule}/>
                <Route path="/student">
                    <People teacher={false}/>
                </Route>
                <Route path="/teacher">
                    <People teacher={true}/>
                </Route>
                <Router path="/support">
                    <Support/>
                </Router>
                <Route exact path="/">
                    <Home/>
                </Route>

            </Switch>
        </Router>

    );
}

export default App;
