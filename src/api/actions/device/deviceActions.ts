import { Action } from 'api/types';

import { FetchDevicesResponse } from './deviceActions.types';

export function FetchDevicesAction(accessToken?: string): Action<FetchDevicesResponse> {
  return {
    method: 'GET',
    endpoint: '/api/devices',
    ...(accessToken
      ? {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      : {}),
  };
}
