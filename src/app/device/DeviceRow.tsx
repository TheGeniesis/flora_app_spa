import { FetchDeviceResponse } from 'api/actions/device/deviceActions.types';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';

export const DeviceRow = (device: FetchDeviceResponse) => {

    const [data, setData] = useState(device);

    useEffect(() => {
        setData(data)
    });

    return (
        data &&
        <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>
                <Button id={`edit_button_device_id_${data.id}`} variant="warning">Edit</Button>
                <Button id={`delete_button_device_id_${data.id}`} variant="danger">Delete</Button>
            </td>
        </tr>
    );
};
