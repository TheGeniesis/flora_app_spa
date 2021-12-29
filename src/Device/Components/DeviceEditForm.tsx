import React, { useState } from "react";
import { Input } from "../../Shared/Components/Form/Input";
import { NavLink } from "react-router-dom";
import { Form } from "../../Shared/Components/Form/Form";
import { FormActionEnum } from "../../Shared/Enum/FormActionEnum";
import { IFieldErrorProps } from "../../Shared/Components/Form/FieldError";

export interface IDevice {
    id: string;
    name: string;
}

export type DeviceEditFormProps = {
    device?: IDevice;
    headerPrefix: string;
    redirect?: string;
    action: FormActionEnum;
    routing: string;
}

export function DeviceEditForm(props: DeviceEditFormProps) {
    const [formErrors, setFormErrors] = useState({
        name: new Array<IFieldErrorProps>(),
    });

    const [errors] = useState({
        "formErrors": setFormErrors,
    });


    const [formData] = useState(props.device ? props.device : {
        name: '',
    });

    return (
        <div className="container rounded">
            <h2 className="pt-3">{props.headerPrefix} device</h2>
            <Form action={props.action} redirectPath={props.redirect} routing={props.routing} errors={errors}>
                <Input name="name" label="Name" value={formData.name}
                    errors={formErrors.name} />
                <button className="btn btn-primary" type="submit">Submit</button>
                <NavLink to="/devices" className="btn btn-danger">Cancel</NavLink>
            </Form>
        </div>
    );
}
