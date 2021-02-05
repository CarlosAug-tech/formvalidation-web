import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 40px;
  margin: 20px 0;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: 500;
  background: #1985a1;
  transition: all 0.4s;

  &:hover {
    color: ${shade(0.08, '#fff')};
    background: ${shade(0.08, '#1985a1')};
  }
`;
