import React from 'react';
import { fetchUtils, Admin, Resource } from 'react-admin';
import users from './Users';
import Dashboard from './dashboard';
import authProvider from './authProvider';
import jsonServerProvider from 'ra-data-json-server';
import config from './config';

const httpClient = (url, options = {}) => {
  if (!options.headers) {
      options.headers = new Headers({ Accept: 'application/json' });
  }
  const token = localStorage.getItem('token');
  options.headers.set('Authorization', `Bearer ${token}`);
  return fetchUtils.fetchJson(url, options);
};

const dataProvider = jsonServerProvider(config.apiUrl, httpClient);
const App = () => (
      <Admin dataProvider={dataProvider} authProvider={authProvider} dashboard={Dashboard}>
        <Resource name="users" {...users} />
      </Admin>
  );

export default App;
