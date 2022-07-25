import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  NavInset,
  NavTitle,
  NavWrapper,
} from '../../styles/nav.styles';


function TopNav() {
  return (
    <NavWrapper>
      <NavInset>
        <NavTitle>Book Bay Drag</NavTitle>
        <Link to="/">Home</Link>
        {/* <Link to="/search" component={NavLink}>Search</Link> */}
        <Link to="/account">Account</Link>
      </NavInset>
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
