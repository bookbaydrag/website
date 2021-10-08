import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 5px 0 5px 0;
`;

const NavLink = styled.a`
  height: 2em;
  width: auto;
  padding: 5px;
  margin: 0 5px 0 5px;
  text-decoration: none;
  cursor: pointer;
  color: black;

  :hover {
    color: darkgray;
  }

  :active {
    color: darkgreen;
  }

  :visited {
    color: black;
  }
`;

function TopNav() {
  return (
    <NavWrapper>
      <Link to="/" component={NavLink}>Home</Link>
      {/* <Link to="/search" component={NavLink}>Search</Link> */}
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
  text-decoration: none;
`;

export const Menu = styled.div`

`;

export const Icon = styled.img`
  justify-content: flex-end;
  align-items: flex-start;
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
