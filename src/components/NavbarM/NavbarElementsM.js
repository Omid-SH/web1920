import styled from 'styled-components';

export const Nav = styled.div`

  border-radius: 0px 0px 3vw 3vw;

  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 1000;
  display: block;

`;


export const NavLink = styled.div`

  font-family: Montserrat;
  font-size: 3.198vw;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #073e65;
  vertical-align: middle;
  display: flex;
  align-items: center;
  position: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  margin-top: 1.563vw;
  white-space: nowrap;


  &.active {
    color: #67D7CB;
    &:before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: relative;
      background: #67D7CB;
      top: 10.56vw;
      height: 0.4vw;
      content: '';
      width: 0.4vw;
      left: 50%;
    }
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #67D7CB;
    &:before {
      transform: translateX(-50%);
      border-radius: 100%;
      position: relative;
      background: #67D7CB;
      top: 1.56vw;
      height: 0.4vw;
      content: '';
      width: 0.4vw;
      left: 50%;
    }
  }
`;

export const NavMenu = styled.div`
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 0px 0px 3vw 3vw;

  width: 100vw;
  height: 14.5vw;

  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;