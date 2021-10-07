import React from "react";
import "./App.css";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";


function App(): JSX.Element {
    return (
        <div className="App">
            <div className="popup">
                <Popup trigger={<button className="button">button</button>} position="center center">
                    <div><h1>Welcome to website!!</h1></div>
                </Popup>
            </div>
        </div>
    );
}

export default App;
