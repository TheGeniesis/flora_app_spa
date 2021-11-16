import React, {useState} from "react";
import {FieldError, IFieldErrorProps} from "./FieldError";

type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void

interface IComponentProps {
    name: string;
    value: string;
    label: string;
    type?: string | null;
    handleInputChange?: InputChangeHandler;
    errors: IFieldErrorProps[]
}

export function Input(props: IComponentProps) {
    const [formData, setFormData] = useState(props);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        const value = target.value;

        setFormData({
            ...formData,
            "value": value
        });

        if (props.handleInputChange) {
            props.handleInputChange(event);
        }
    };

    return (
        <div className="form-row">
            <label htmlFor={formData.name}>{formData.label}</label>
            <input id={formData.name} name={formData.name} value={formData.value}
                   type={formData.type ? formData.type : 'text'}
                   className={`form-control  ${Array.isArray(props.errors) && props.errors.length ? 'is-invalid' : ''}`} onChange={handleInputChange}/>
            <FieldError errors={props.errors}/>
        </div>
    );
}

