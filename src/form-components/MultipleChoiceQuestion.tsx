import React, { useState } from "react";
export function MultipleChoiceQuestion({
    options,
    expectedAnswer,
}: {
    options: string[];
    expectedAnswer: string;
}): React.JSX.Element {
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            <h3>Multiple Choice Question</h3>
            <select
                value={selected}
                onChange={(e) => {
                    setSelected(e.target.value);
                }}
            >
                {options.map((option, idx) => (
                    <option key={idx} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <span>{selected === expectedAnswer ? "✔️" : "❌"}</span>
        </div>
    );
}
