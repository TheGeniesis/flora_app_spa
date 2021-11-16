import React, {useState} from "react";
import {FieldError, IFieldErrorProps} from "./FieldError";
import AsyncSelect from 'react-select/async';
import {ISelectOptions} from "./SelectOptionsInterface";

interface IComponentProps {
    name: string;
    defaultValue?: ISelectOptions;
    label: string;
    onChange?: any;
    errors: IFieldErrorProps[]
    loadOptions: any
}

export function Select(props: IComponentProps) {
    const [formData] = useState(props);
    const handleSelectChange = (selectedOption: ISelectOptions) => {
        if (props.onChange) {
            props.onChange(selectedOption);
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={formData.name}>{formData.label}</label>
            <AsyncSelect defaultOptions cacheOptions onChange={handleSelectChange} name={formData.name}
                         searchable={false}
                         defaultValue={props.defaultValue}
                         loadOptions={props.loadOptions}
                         className={` ${Array.isArray(props.errors) && props.errors.length ? 'is-invalid' : ''}`}
            />
            <FieldError errors={props.errors}/>
        </div>
    );
}

