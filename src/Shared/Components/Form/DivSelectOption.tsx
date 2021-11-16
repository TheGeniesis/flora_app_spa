import React from "react";


interface IComponentProps {
    name: string;
    id: string;
    selected: boolean;
    handleChange: any;
}

export function DivSelectOption(props: IComponentProps) {
    return <div key={props.id} onClick={props.handleChange}>{props.name}</div>
}

