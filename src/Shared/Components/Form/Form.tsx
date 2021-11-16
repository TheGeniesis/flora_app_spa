import React from "react";
import {IFormComponentProps} from "./FormComponentPropsInterface";
import {FormActionEnum} from "../../Enum/FormActionEnum";
import {AddForm} from "./AddForm";
import {EditForm} from "./EditForm";

interface IComponentProps extends IFormComponentProps {
    action: FormActionEnum
}

export function Form(props: IComponentProps) {
    switch (props.action) {
        case FormActionEnum.add:
            return <AddForm redirectPath={props.redirectPath} routing={props.routing}
                            errors={props.errors}>{props.children}</AddForm>;
        case FormActionEnum.edit:
            return <EditForm redirectPath={props.redirectPath} routing={props.routing}
                             errors={props.errors}>{props.children}</EditForm>;
        default:
            return <div>Invalid action</div>
    }
}

