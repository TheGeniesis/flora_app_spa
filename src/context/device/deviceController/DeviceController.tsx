import React, { useEffect } from 'react';
import { useQuery } from 'react-fetching-library';

import { FetchDevicesAction } from 'api/actions/device/deviceActions';
import { Loader } from 'ui/loader/Loader';
import { useAuthDispatch } from 'hooks/useAuthDispatch/useAuthDispatch';
import { setAuthorized, setUnauthorized, startAuthorizing } from '../../auth/authActionCreators/authActionCreators';

import { DeviceControllerProps } from './DeviceController.types';

export const UserController = ({ children }: DeviceControllerProps) => {
  const dispatch = useAuthDispatch();

  const { loading, payload, error } = useQuery(FetchDevicesAction());

  useEffect(() => {
    dispatch(startAuthorizing());
  }, [dispatch]);

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
