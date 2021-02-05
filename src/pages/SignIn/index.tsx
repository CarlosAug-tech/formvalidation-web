import React, { useCallback, useRef } from 'react';
import { FiLock, FiMail } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import * as Yup from 'yup';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Title from '../../components/Title';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationErrors';

import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (formData: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Email invalido!')
          .required('Email obrigatório!'),
        password: Yup.string().required('Senha obrigatória!'),
      });

      await schema.validate(formData, {
        abortEarly: false,
      });

      await signIn({ formData });
      addToast({
        type: 'success',
        title: 'Autenticado com sucesso!!',
        description: 'Seja bem-vindo na aplicação!!',
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }

      addToast({
        type: 'error',
        title: 'Oops.. Ocorreu um erro ao autenticar-se!',
        description: 'Email ou senha invalido!',
      });
    }
  }, []);

  return (
    <>
      <Title text="Autenticar-se" />
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input type="email" name="email" labelText="Email:" icon={FiMail} />
        <Input
          type="password"
          name="password"
          labelText="Senha:"
          icon={FiLock}
        />
        <Button type="submit">Entrar</Button>
        <Link to="/register">Não possui conta? Cadastra-se!</Link>
      </Form>
    </>
  );
};

export default SignIn;
