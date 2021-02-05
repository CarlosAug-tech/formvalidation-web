import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { IconBaseProps } from 'react-icons';
import { useField } from '@unform/core';

import { FiAlertCircle } from 'react-icons/fi';
import { Container, InputElement, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText: string;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({
  name,
  labelText,
  icon: Icon,
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container>
      <InputElement
        type="text"
        ref={inputRef}
        defaultValue={defaultValue}
        placeholder=" "
        isErrored={!!error}
        {...rest}
      />
      {Icon && <Icon size={20} />}
      <label>{labelText}</label>
      {error && (
        <Error title={error}>
          <FiAlertCircle color="#c53030" size={20} />
        </Error>
      )}
    </Container>
  );
};

export default Input;
