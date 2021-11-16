import React from "react";

export interface IFieldErrorProps {
    field: string,
    message: string,
}

interface IComponentProps {
    errors: IFieldErrorProps[]
}

export function FieldError(props: IComponentProps) {
    if (!props.errors) {
        return null;
    }

    const result = Object.values(props.errors).map(({message}) => (message));

    return <div className="invalid-feedback show">
        <ul>
            {result.map((message, index) => {
                return <li key={index}>{message}</li>;
            })}
        </ul>
    </div>;
}
