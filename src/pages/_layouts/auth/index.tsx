import React from 'react';

import { Container, Content, SnowFall } from './styles';

const AuthLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Content>{children}</Content>
      <SnowFall />
    </Container>
  );
};

export default AuthLayout;
