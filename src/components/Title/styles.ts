import styled from 'styled-components';

export const Container = styled.h1`
  margin-bottom: 20px;
  text-transform: uppercase;
  font-size: 50px;
  background: 50% 100% / 50% 50% no-repeat
    radial-gradient(ellipse at bottom, #fff, transparent, transparent);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: reveal 3000ms ease-in-out forwards 200ms,
    glow 2500ms linear infinite 2000ms;

  @keyframes reveal {
    80% {
      letter-spacing: 8px;
    }

    100% {
      background-size: 300% 300%;
    }
  }

  @keyframes glow {
    40% {
      text-shadow: 0 0 8px #fff;
    }
  }
`;
