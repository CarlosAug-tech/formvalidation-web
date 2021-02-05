import styled from 'styled-components';

import homeBackground from '../../../assets/Images/home-background1.jpg';
import clouds from '../../../assets/Images/clouds.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  position: relative;
  overflow: hidden;
  filter: grayscale(100%);
  background: url(${homeBackground});
  background-size: cover;
  background-position: center center;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    bottom: 5px;
    right: 5px;
    position: absolute;
    border: 2px solid #dbdbdb;
    border-radius: 50%;

    svg {
      color: #fff;
      transition: color 0.4s ease;
    }

    &:hover {
      svg {
        color: #1985a1;
      }
    }
  }

  button {
    top: 5px;
    right: 5px;
    position: absolute;
    border: 0;
    background: transparent;
  }
`;

export const Cloud = styled.div`
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  background: transparent url(${clouds}) repeat;
  animation: moveClouds 50s linear infinite;

  @keyframes moveClouds {
    from {
      background-position: 0px;
    }
    to {
      background-position: 2313px;
    }
  }
`;
