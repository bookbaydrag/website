import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TopNav() {
  // Header with site title as a link to the homepage
  // on the left and link to account page on the right

  return (
    <Row className="header">
      <Col md={6}>
        <Link to="/">
          <h1>Book Bay Drag</h1>
        </Link>
      </Col>
      <Col md={6}>
        <Link to="/account">
          <h1>Account</h1>
        </Link>
      </Col>
    </Row>
  );
}

export default TopNav;
