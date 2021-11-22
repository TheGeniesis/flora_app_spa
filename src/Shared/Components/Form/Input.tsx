import React, { useState } from "react";
import { ConvertToUnderscore } from "src/Shared/Converter/ToUnderscoreConverter";
import { FieldError, IFieldErrorProps } from "./FieldError";

type InputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => void

interface IComponentProps {
    name: string;
    value: string | number;
    label: string;
    type?: string | null;
    handleInputChange?: InputChangeHandler;
    errors: IFieldErrorProps[]
}

const parseValue = (value: any): string | number => {
    if ('boolean' === typeof value) {
        return value.toString();
    }

    return value;
}

export function Input(props: IComponentProps) {
    const [formData, setFormData] = useState(props);
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.currentTarget;
        const value = parseValue(target.value);

        setFormData({
            ...formData,
            "value": value
        });

        if (props.handleInputChange) {
            props.handleInputChange(event);
        }
    };

    if (formData.type === "checkbox") {
        return (
            <div className={`form-row ${formData.type === "checkbox" ? "form-check" : ""}`}>
                {formData.value !== 1 ? <input type='hidden' value='0' name={ConvertToUnderscore(formData.name)} /> : ""}
                <input id={formData.name} name={ConvertToUnderscore(formData.name)}
                    value={formData.value}
                    defaultChecked={formData.value === 1 ? true : false}
                    type={formData.type ? formData.type : 'text'}
                    className={`${formData.type === "checkbox" ? "form-check-input" : "form-control"}  ${Array.isArray(props.errors) && props.errors.length ? 'is-invalid' : ''}`} onChange={handleInputChange} />
                <label className={`${formData.type === "checkbox" ? "form-check-label" : ""}`} htmlFor={formData.name}>{formData.label}</label>
                <FieldError errors={props.errors} />
            </div>
        );
    }
    return (
        <div className="form-row">
            <label htmlFor={formData.name}>{formData.label}</label>
            <input id={formData.name} name={ConvertToUnderscore(formData.name)} value={formData.value}
                type={formData.type ? formData.type : 'text'}
                className={`form-control  ${Array.isArray(props.errors) && props.errors.length ? 'is-invalid' : ''}`} onChange={handleInputChange} />
            <FieldError errors={props.errors} />
        </div>
    );
}


