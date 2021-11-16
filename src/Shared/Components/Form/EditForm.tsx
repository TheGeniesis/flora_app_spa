import React from "react";
import { Router } from "../../Router/Router";
import { IFormComponentProps } from "./FormComponentPropsInterface";
import { useAlert } from 'react-alert'
import { ConvertFormDataToObject } from "../../Converter/FormDataToObjectConverter";
import { ConvertObjectToJson } from "../../Converter/ObjectToJsonConverter";
import { ConvertIdsStringsToArray } from "../../Converter/IdsStringsToArrayConverter";

export function EditForm(props: IFormComponentProps) {
    const alert = useAlert();

    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        let data = ConvertFormDataToObject(new FormData(event.currentTarget));
        data = ConvertIdsStringsToArray(data);

        Router.put(props.routing, { body: ConvertObjectToJson(data) }).then((response) => {
            response.json().then((result) => {
                if (200 === response.status) {
                    alert.success("Data modified correctly");
                    props.errors.formErrors([]);
                    return
                }

                if (400 === response.status) {
                    props.errors.formErrors(result);
                    alert.error('Invalid fields');
                    return;
                }

                alert.error('Something went wrong please try again');
            })
        })
            ;
    };
    return (<form onSubmit={handleSubmit}>{props.children}</form>)
}

