import React from "react";
import {useHistory} from "react-router-dom";
import {IFormComponentProps} from "./FormComponentPropsInterface";
import {Router} from "../../Router/Router";
import {useAlert} from 'react-alert'
import {ConvertFormDataToObject} from "../../Converter/FormDataToObjectConverter";
import {ConvertObjectToJson} from "../../Converter/ObjectToJsonConverter";
import {ConvertIdsStringsToArray} from "../../Converter/IdsStringsToArrayConverter";

export function AddForm(props: IFormComponentProps) {
    const alert = useAlert();
    const history = useHistory();
    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault();
        let  data = ConvertFormDataToObject(new FormData(event.currentTarget));
        data = ConvertIdsStringsToArray(data);

        Router.post(props.routing, {body: ConvertObjectToJson(data)})
            .then((response) => {
                response.json().then((result) => {
                    if (201 === response.status) {
                        alert.success("Data added successfully");
                        if (props.redirectPath) {
                            history.push(`${props.redirectPath}${result.id}`);
                        } else {
                            history.push('/');
                        }
                        return;
                    }

                    if (400 === response.status) {
                        alert.error("Invalid fields");
                        props.errors.formErrors(result);
                        return;
                    }

                    alert.error("Something went wrong please try again");
                })
            })
        ;
    };
    return (<form onSubmit={handleSubmit}>{props.children}</form>)
}

