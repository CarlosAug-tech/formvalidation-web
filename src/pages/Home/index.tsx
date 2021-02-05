import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../../components/Title';

import { SelectForm, FormsAuth, OptionsAuth } from './styles';

const Home: React.FC = () => {
  return (
    <>
      <Title text="Form Validation" />
      <SelectForm>
        <FormsAuth>
          <OptionsAuth>
            <Link to="/logon">Autenticar-se</Link>
            <Link to="/register">Cadastrar-se</Link>
          </OptionsAuth>
        </FormsAuth>
      </SelectForm>
    </>
  );
};

export default Home;
