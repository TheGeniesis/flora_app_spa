import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

import { AppRoute } from 'routing/AppRoute.enum';
import { useLocale } from 'hooks/useLocale/useLocale';
import { AppLocale } from 'context/locale/AppLocale.enum';
import { AppMessages } from 'i18n/messages';
import { useAuthState } from 'hooks/useAuthState/useAuthState';
import { LocationInfo } from 'ui/locationInfo/LocationInfo';

export const Home = () => {
  const { formatMessage, locale, setLocale } = useLocale();
  const { user } = useAuthState();

  return (
    <>
      <h1>List of devices</h1>
      <section>
        <section>
          <div>ID</div>
          <div>name</div>
          <div>Edit section</div>
        </section>
        <section>
          <div>data</div>
        </section>
      </section>
      <Button className="btn btn-sucess">Add new device</Button>
    </>
  );
};
