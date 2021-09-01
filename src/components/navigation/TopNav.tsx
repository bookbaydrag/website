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
      <Link to="/account" component={NavLink}>Account</Link>
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
  height: 50px;
  width: auto;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Text = styled.span`
  text-family: noto-sans;
  text-font: regular 400;
  text-size: 10px;
  text-decoration: none;
`;

export const Menu = styled.div`

`;

export const Icon = styled.img`
  justify-content: flex-end;
  align-item: flex-start;
`;

export const DropDown = styled.div`
  display: flex;
  position: absolute;
`;

export const Links = styled.a`
  height: 2em;
  width: auto;
  padding: 5px;
`;


<Header>
  <Container>
    <Title>
      <Text>

      </Text>
    </Title>
    <Menu>
      <Icon></Icon>
    </Menu>
  </Container>
  <DropDown>
    <ul>
      <li>
        <a></a>
      </li>
      <li>
        <a></a>
      </li>
      <li>
        <a></a>
      </li>
      <li>
        <a></a>
      </li>
    </ul>
  </DropDown>
</Header>;
