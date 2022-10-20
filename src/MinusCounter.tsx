import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function MinusCounter(): JSX.Element {
    const [value, setValue] = useState<number>(0);
    return (
        <span>
            <Button onClick={() => setValue(1 - value)}>Subtract One</Button>
            to {value}.
        </span>
    );
}