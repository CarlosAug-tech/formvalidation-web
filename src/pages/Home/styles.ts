import styled from 'styled-components';

export const SelectForm = styled.div`
  z-index: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  width: 100%;
  padding: 20px;
  position: relative;
  border: 4px solid #1985a1;
  -webkit-tap-highlight-color: transparent;
  transition: 1s;

  &::before,
  &::after {
    content: '';
    z-index: -1;
    position: absolute;
    background: #4c5c68;
    transition: 1s;
  }

  &::before {
    width: calc(100% - 20px);
    height: calc(100% + 8px);
  }

  &::after {
    width: calc(100% + 8px);
    height: calc(100% - 20px);
  }
`;

export const FormsAuth = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const OptionsAuth = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  > a {
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    background: transparent;
    transition: color 0.4s;

    &:hover {
      color: #dbdbdb;
    }

    & + a {
      margin-left: 20px;
    }
  }
`;
