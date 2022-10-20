import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MinusCounter } from "./MinusCounter";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                UD CIS Scheduler
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <MinusCounter></MinusCounter>
            </header>
        </div>
    );
}

export default App;
