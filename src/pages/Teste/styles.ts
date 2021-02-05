import styled from 'styled-components';

export const Container = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 20px;
  padding-bottom: 40px;
  position: relative;
  text-align: center;
  color: #fff;
  filter: blur(50%);
  background: rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%),
    0 1px 5px 0 rgb(0 0 0 / 20%);

  h1 {
    margin: 0;
    letter-spacing: 20px;
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));

    span {
      font-size: 40px;
      text-transform: uppercase;
      animation: animateText 1.5s ease-in-out infinite;

      &:nth-of-type(1) {
        animation-delay: calc(0.1s * 1);
      }
      &:nth-of-type(2) {
        animation-delay: calc(0.1s * 2);
      }
      &:nth-of-type(3) {
        animation-delay: calc(0.1s * 3);
      }
      &:nth-of-type(4) {
        animation-delay: calc(0.1s * 4);
      }
      &:nth-of-type(5) {
        animation-delay: calc(0.1s * 5);
      }
      &:nth-of-type(6) {
        animation-delay: calc(0.1s * 6);
      }
      &:nth-of-type(7) {
        animation-delay: calc(0.1s * 7);
      }
      &:nth-of-type(8) {
        animation-delay: calc(0.1s * 8);
      }
      &:nth-of-type(9) {
        animation-delay: calc(0.1s * 9);
      }

      @keyframes animateText {
        0%,
        100% {
          transform: translateY(0px);
        }
        20% {
          transform: translateY(-20px);
        }
        40% {
          transform: translateY(0px);
        }
      }
    }
  }
`;
