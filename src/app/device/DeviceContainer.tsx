import { useContext, useCallback } from 'react';
import { ClientContext } from 'react-fetching-library';

import { FetchDevicesResponse } from 'api/actions/device/deviceActions.types';
import { FetchDevicesAction } from 'api/actions/device/deviceActions';
import { Home } from './Home';

export const DeviceContainer = () => {

  const { query } = useContext(ClientContext);

  const getDevices = useCallback(
    async (): Promise<FetchDevicesResponse> => {
      let { payload: result } = await query<FetchDevicesResponse>(
        FetchDevicesAction(),
      );

      if (!result) {
        result = [];
      }

      return result;
    },
    [query],
  );

  return <Home getDevices={getDevices} />;
};
