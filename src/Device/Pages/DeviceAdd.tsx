import React from 'react';
import { DeviceEditForm } from "../Components/DeviceEditForm";
import { RoutingList } from "../../Shared/Router/RoutingList";
import { FormActionEnum } from "../../Shared/Enum/FormActionEnum";

const deviceEditFormProps = {
    routing: RoutingList.POST_DEVICE,
    redirect: '/device/edit/',
    action: FormActionEnum.add,
    headerPrefix: "Add"
};

export function DeviceAdd() {
    return (
        <div>
            <DeviceEditForm {...deviceEditFormProps} />
        </div>
    );
}
