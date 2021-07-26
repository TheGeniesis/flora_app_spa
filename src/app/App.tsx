import React from 'react';
import { Link } from 'react-router-dom';

import { useAuthState } from 'hooks/useAuthState/useAuthState';
import logo from 'assets/images/logo.svg';
import { AppRoutes } from 'routing/AppRoutes';
import { AppRoute } from 'routing/AppRoute.enum';

import './App.css';

export const App = () => {
  const { isAuthorized } = useAuthState();

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <nav className="app__navigation">
        <ul className="app__menu">
          <li className="app__menu-item">
            <Link className="app__menu-link" to={AppRoute.home}>
              Devices
            </Link>
          </li>
          <li className="app__menu-item">
            <Link className="app__menu-link" to={isAuthorized ? AppRoute.logout : AppRoute.login}>
              {isAuthorized ? 'Logout' : 'Login'}
            </Link>
          </li>
        </ul>
      </nav>
      <main className="app__main">
        <AppRoutes />
      </main>
    </div>
  );
};
