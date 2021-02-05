import React from 'react';
import { FiGithub, FiLogOut } from 'react-icons/fi';
import { useAuth } from '../../../hooks/auth';

import { Container, Cloud } from './styles';

const DefaultLayout: React.FC = ({ children }) => {
  const { signOut } = useAuth();

  return (
    <Container>
      {children}
      <a href="https://github.com/CarlosAug-tech" target="__blank">
        <FiGithub size={30} />
      </a>
      <button type="button" onClick={signOut}>
        <FiLogOut size={30} color="#fff" />
      </button>
      <Cloud />
    </Container>
  );
};

export default DefaultLayout;
