import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Col } from "react-bootstrap";
import { ControlPanel } from "./Components/ControlPanel";

function App(): JSX.Element {
    return (
        <Col>
            <ControlPanel></ControlPanel>
        </Col>
    );
}

export default App;
