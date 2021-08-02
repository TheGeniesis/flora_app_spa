import { FetchDevicesResponse } from "api/actions/device/deviceActions.types";

export type DevicesProps = {
  getDevices(): Promise<FetchDevicesResponse>;
};
