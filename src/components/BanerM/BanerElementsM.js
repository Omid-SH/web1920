import styled from 'styled-components';

export const ArrowLink = styled.a`

color: #073e65;

  &.active {
    &:before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: absolute;
      background: #073e65;
      top: 6.56vw;
      height: 1.4vw;
      content: '';
      width: 1.4vw;
      left: 50%;
    }
  }

  &:hover {
    color: #073e65;
    &:before {
      transition: all 0.2s ease-in-out;       
      transform: translateX(-50%);
      border-radius: 100%;
      position: absolute;
      background: #073e65;
      top: 6.56vw;
      height: 1.4vw;
      content: '';
      width: 1.4vw;
      left: 50%;
    }
  }
`;