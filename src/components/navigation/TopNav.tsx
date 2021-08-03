import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavLink = styled.a`
  height: 2em;
  width: auto;
  padding: 5px;
  /* justify-content: center; */
  text-decoration: none;
  cursor: pointer;
  /* color: white; */
`;

function TopNav() {
  return (
    <NavWrapper>
      <Link to="/" component={NavLink}>Home</Link>
      <Link to="/search" component={NavLink}>Search</Link>
    </NavWrapper>
  );
}

export default TopNav;


/*
header
  container flex box row: justify content space between;
    title
      text
    menu
      icon
  dropDown position absolute
    link
    link
    link

*/

export const Header = styled.header`
  height: 30px;
  width: 

`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.div`
  
`;

export const Text = styled.span`

`;

export const Menu = styled.div`

`;

export const Icon = styled.img`

`;

export const DropDown = styled.div`
  display: flex;
  position: absolute;
`;

export const Links = styled.a`
  
`;


