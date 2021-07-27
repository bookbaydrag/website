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
