import styled from 'styled-components';
import { COLORS } from './global.styles';

export const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 2.5em;
  padding: 0 1em 0 1em;
  background-color: ${COLORS.black};
  color: ${COLORS.lightBlue};
  border-radius: 0 0 1em 1em;
`;

export const NavInset = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 1.1em;
`;

export const NavTitle = styled.div`
  font-size: 1.1em;
`;

export const NavLink = styled.a`
  width: auto;
  margin-left: 1em;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: ${COLORS.pink};
  }

  :active {
    color: ${COLORS.pink};
  }

  :visited {
    color: ${COLORS.lightBlue};
  }
`;
