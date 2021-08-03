import React, { useEffect } from 'react';
import { useQuery } from 'react-fetching-library';

import { FetchDevicesAction } from 'api/actions/device/deviceActions';
import { Loader } from 'ui/loader/Loader';

import { DeviceControllerProps } from './DeviceController.types';

export const DeviceController = ({ children }: DeviceControllerProps) => {

  const { loading, payload, error } = useQuery(FetchDevicesAction());

  // useEffect(() => {
  //   if (!error && payload) {
  //     return dispatch(setAuthorized(payload));
  //   }

  //   return dispatch(setUnauthorized());
  // }, [dispatch, error, payload]);

  if (loading) {
    return <Loader />;
  }

  return <>{children}</>;
};
