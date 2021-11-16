import React from "react";
import {FieldError, IFieldErrorProps} from "./FieldError";
import AsyncSelect from 'react-select/async';
import {ISelectOptions} from "./SelectOptionsInterface";

interface IComponentProps {
    name: string;
    defaultValue?: ISelectOptions[];
    label: string;
    onChange?: any;
    errors: IFieldErrorProps[]
    loadOptions: any
}

export function MultiSelect(props: IComponentProps) {
    const handleSelectChange = (selectedOption?: ISelectOptions) => {
        if (props.onChange) {
            props.onChange(selectedOption);
        }
    };

    return (
        <div className="form-group">
            <label htmlFor={props.name}>{props.label}</label>
            <AsyncSelect isMulti={true} defaultOptions cacheOptions onChange={handleSelectChange} name={props.name}
                         defaultValue={props.defaultValue} loadOptions={props.loadOptions}
                         className={`${Array.isArray(props.errors) && props.errors.length ? 'is-invalid' : ''}`}
            />
            <FieldError errors={props.errors}/>
        </div>
    );
}

