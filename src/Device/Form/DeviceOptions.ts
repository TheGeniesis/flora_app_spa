import {Router} from "../../Shared/Router/Router";
import {RoutingList} from "../../Shared/Router/RoutingList";
import {ISelectOptions} from "../../Shared/Components/Form/SelectOptionsInterface";

export function DeviceOptions() {
    return Router.fetch(RoutingList.GET_DEVICES)
        .then((res: { id: string, name: string }[]) => {
            return Object.values(res).map(({id, name}) => ({value: id, label: name} as ISelectOptions));
        });
}
