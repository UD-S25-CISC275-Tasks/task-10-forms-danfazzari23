import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface DhProps {
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
}

function Doubler({ value, setValue }: DhProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(value * 2);
            }}
        >
            Double
        </Button>
    );
}

function Halver({ value, setValue }: DhProps): React.JSX.Element {
    return (
        <Button
            onClick={() => {
                setValue(value / 2);
            }}
        >
            Halve
        </Button>
    );
}

export function DoubleHalf(): React.JSX.Element {
    const [value, setValue] = useState<number>(10); // initial value updated to 10

    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{value}</span>
            </div>
            <Doubler value={value} setValue={setValue} />
            <Halver value={value} setValue={setValue} />
        </div>
    );
}
