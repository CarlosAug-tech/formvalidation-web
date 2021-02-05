import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { useToast } from '../../hooks/toast';
import { useAuth } from '../../hooks/auth';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signUp } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (formData: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório!'),
        email: Yup.string().email().required('E-mail obrigatório!'),
        password: Yup.string().min(6, 'No mínimo 6 dígitos!'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });
      await signUp({ formData });
      addToast({
        type: 'success',
        title: 'Cadastrado com sucesso!!',
      });
      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Oops.. Ocorreu um erro ao cadastrar-se!',
        description: 'Nome, Email ou senha invalidos!',
      });
    }
  }, []);

  return (
    <>
      <Title text="Cadastrar-se" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input labelText="Nome:" name="name" icon={FiUser} />
        <Input type="email" name="email" labelText="Email:" icon={FiMail} />
        <Input
          type="password"
          name="password"
          labelText="Senha:"
          icon={FiLock}
        />
        <Button type="submit">Cadastrar</Button>
        <Link to="/logon">Já possui conta? Autentique-se!</Link>
      </Form>
    </>
  );
};

export default SignUp;
