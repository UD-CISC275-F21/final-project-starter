import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App(): JSX.Element {
    const [formVis, setFormVis] = useState<boolean>(false);

    function makeVis(): void{
        setFormVis(true);
    }

    return (
        <div className="App">
            <button onClick={():void => makeVis()}>Show Form</button>
            <form>
                <input hidden={!formVis} type="text"></input>
                <label hidden={!formVis}>Enter Label</label>
            </form>
        </div>
    );
}

export default App;
