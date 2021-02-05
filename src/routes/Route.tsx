import React from 'react';
import {
  Redirect,
  RouteProps as DOMRouteProps,
  Route as DOMRoute,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

interface RouteProps extends DOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  location,
  ...rest
}) => {
  const { user } = useAuth();

  console.log(user);

  if (user && !isPrivate) {
    return <Redirect to={{ pathname: '/teste', state: { from: location } }} />;
  }

  if (!user && isPrivate) {
    return <Redirect to={{ pathname: '/', state: { from: location } }} />;
  }

  const Layout = user ? DefaultLayout : AuthLayout;

  return (
    <DOMRoute
      {...rest}
      render={() => (
        <Layout>
          <Component />
        </Layout>
      )}
    />
  );
};

export default Route;
