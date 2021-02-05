import styled, { css } from 'styled-components';
import Tooltip from '../Tooltip';

interface InputElementProps {
  isErrored: boolean;
}

export const Container = styled.div`
  position: relative;

  & + div {
    margin-top: 20px;
  }

  label {
    top: 18px;
    left: 36px;
    position: absolute;
    color: #222;
    pointer-events: none;
    transition: all 0.4s ease;
  }

  svg {
    left: 10px;
    top: 18px;
    position: absolute;
    color: #222;
    transition: all 0.4s;
  }
`;

export const InputElement = styled.input<InputElementProps>`
  width: 100%;
  padding: 16px 35px;
  border: 0;
  border-radius: 4px;

  &:focus ~ label,
  &:not(:placeholder-shown) ~ label {
    top: 5px;
    left: 7px;
    font-size: 10px;
    color: #1985a1;
  }

  &:focus ~ svg,
  &:not(:placeholder-shown) ~ svg {
    color: #1985a1;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border: 2px solid red;
    `}
`;

export const Error = styled(Tooltip)`
  height: 20px;
  right: 40px;
  top: 0;
  position: absolute;

  svg {
    margin: 0;
  }

  span {
    color: #fff;
    background: #c53030;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
