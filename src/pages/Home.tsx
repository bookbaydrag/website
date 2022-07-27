import Search from '../components/Search';
import { Container, Row } from 'react-bootstrap';

function Home() {
  return (
    <Container>
      <Row>
        <h1 className='header'>Welcome to Book Bay Drag</h1>
      </Row>
      <Row>
        <h1 className='header'>Search</h1>
        <Search />
      </Row>
    </Container>
  );
}

export default Home;
