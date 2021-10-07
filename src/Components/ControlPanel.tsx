import React from "react";
import { Form, Button, Row } from "react-bootstrap";

export function ControlPanel(): JSX.Element{
    return (
        <Row>
            <label>Counter 1</label>
            <input type="number"> </input>
        </Row>
    );
}