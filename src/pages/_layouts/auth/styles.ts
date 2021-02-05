import styled from 'styled-components';

import image1 from '../../../assets/Images/1.png';
import image2 from '../../../assets/Images/2.png';
import image3 from '../../../assets/Images/3.png';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  place-items: center;
  justify-content: center;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;

  > form {
    display: flex;
    flex-direction: column;
    max-width: 500px;
    width: 100%;

    > a {
      text-align: center;
      color: #fff;
      transition: color 0.4s;

      &:hover {
        color: #dbdbdb;
      }
    }
  }
`;

export const SnowFall = styled.div`
  z-index: -1;
  display: grid;
  place-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  background-image: url(${image1}), url(${image2}), url(${image3});
  animation: animateSnowFall 50s linear infinite;

  @keyframes animateSnowFall {
    0% {
      background-position: 0 0, 0 0, 0 0;
      background-position: -500px -1000px, 400px 400px, -300px -300px;
    }
  }
`;
