import React from 'react';
import Api from '@config/axious';
import { Route, Switch } from 'react-router-dom';
import { localStorageConstant } from '../constant';

const RouteWithSubRoutes = (route) => {
  console.log(route, "route");
return (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
)};

const RouteWithAdminSubRoutes = (route) => {
  // if(!route) return;
  console.log(route, "route");
return (
  <Route
    path={route.path}
    exact={route.exact}
    render={(props) => <route.component {...props} routes={route.routes} />}
  />
)};

export const RenderRoutes = ({ routes }) => (
  console.log(routes, "routes"),
  <Switch>
    {routes.map((route) => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);

export const RenderAdminRoutes = ({ routes }) => {
  console.log(routes, "adminroutes");
  // if(!adminroutes)return;

  return (
    <Switch>
    {routes.map((route) => (
      <RouteWithAdminSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>)
};

export const isServer = typeof window === 'undefined';

export const isLoggedIn = () => {
  return true;
  const token = localStorage.getItem(localStorageConstant.ACCESS_TOKEN);
  return !isServer ? !!token : true;
};

export const getProfileUser = async () => {
  return {name: "Amb mmns"};
  try {
    const { data } = await Api.get('/auth/profile');
    return data;
  } catch (error) {
    const originError = { ...error.response.data };
    throw originError;
  }
};
