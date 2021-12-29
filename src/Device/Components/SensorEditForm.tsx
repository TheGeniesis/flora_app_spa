import React, { useState } from "react";
import { Input } from "../../Shared/Components/Form/Input";
import { NavLink } from "react-router-dom";
import { Form } from "../../Shared/Components/Form/Form";
import { FormActionEnum } from "../../Shared/Enum/FormActionEnum";
import { IFieldErrorProps } from "../../Shared/Components/Form/FieldError";

export interface ISensor {
    id: string;
    waterAmount: number;
    waterTime: string;
    waterAutoMode: boolean;
    humility: number;
}

export type SensorEditFormProps = {
    sensor?: ISensor;
    headerPrefix: string;
    redirect?: string;
    action: FormActionEnum;
    routing: string;
}

export function SensorEditForm(props: SensorEditFormProps) {
    const [formErrors, setFormErrors] = useState({
        waterAutoMode: new Array<IFieldErrorProps>(),
        waterAmount: new Array<IFieldErrorProps>(),
        waterTime: new Array<IFieldErrorProps>(),
        humility: new Array<IFieldErrorProps>(),
    });

    const [errors] = useState({
        "formErrors": setFormErrors,
    });


    const [formData] = useState(props.sensor ? props.sensor : {
        waterAmount: 50,
        waterTime: '7:00:00',
        waterAutoMode: false,
        humility: 5,
    });

    return (
        <div className="container rounded">
            <h2 className="pt-3">{props.headerPrefix} sensor</h2>
            <Form action={props.action} redirectPath={props.redirect} routing={props.routing} errors={errors}>

                <Input type="number" name="waterAmount" label="Water amount" value={formData.waterAmount}
                    errors={formErrors.waterAmount} />

                <Input type="time" name="waterTime" label="Watering time" value={formData.waterTime.split(".")[0]}
                    errors={formErrors.waterTime} />

                <Input type="number" name="humility" label="Minimal humility" value={formData.humility}
                    errors={formErrors.humility} />

                <Input type="checkbox" name="waterAutoMode" label="Should run in automode?" value={formData.waterAutoMode ? 1 : 0}
                    errors={formErrors.waterAutoMode} />

                <div className="form-row">
                    <button className="btn btn-primary" type="submit">Submit</button>
                    <NavLink to="/devices" className="btn btn-danger">Cancel</NavLink>
                </div>
            </Form>
        </div>
    );
}
