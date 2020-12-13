import React from "react";
import './App.css';
import StepsContainer from "./Components/StepsContainer";
import {Route} from "react-router-dom";
import {Switch} from "react-router";

const App = () => {
  return (
    <div className="App">
        <div>
            <Switch>
                <Route path="/step/:step" >
                    <StepsContainer />
                </Route>
                <Route path="/" >
                    <StepsContainer />
                </Route>
            </Switch>
        </div>
    </div>
  );
}

export default App

