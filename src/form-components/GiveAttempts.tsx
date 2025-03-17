import React, { useState } from "react";

export function GiveAttempts(): React.JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [requested, setRequested] = useState<string>("");

    const handleUse = (): void => {
        if (attempts > 0) {
            setAttempts(attempts - 1);
        }
    };

    const handleGain = (): void => {
        const num = parseInt(requested);
        if (!isNaN(num)) {
            setAttempts(attempts + num);
        }
    };

    return (
        <div>
            <h3>Give Attempts</h3>
            <p>Attempts left: {attempts}</p>
            <input
                type="number"
                value={requested}
                onChange={(e) => {
                    setRequested(e.target.value);
                }}
            />
            <button onClick={handleUse} disabled={attempts === 0}>
                use
            </button>
            <button onClick={handleGain}>gain</button>
        </div>
    );
}
