import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';

const HOME_PATH = '/';
const ACCOUNT_PATH = '/account';

function TopNav() {
  // Header with site title as a link to the homepage
  // on the left and link to account page on the right
  const { pathname } = useLocation();

  return (
    <Navbar expand={true}>
      <Container>
        <LinkContainer to={HOME_PATH}>
          <Navbar.Brand>
            Book Bay Drag
          </Navbar.Brand>
        </LinkContainer>
        <Nav>
          <LinkContainer to={ACCOUNT_PATH}>
            <Nav.Link active={pathname===ACCOUNT_PATH}>
              Account
            </Nav.Link>
          </LinkContainer>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default TopNav;
