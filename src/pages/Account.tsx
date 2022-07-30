// import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AccountDetails from '../components/account/AccountDetails';
import Login from '../components/account/Login';
import { useMagicLink, useSession } from '../util/api/session';
import { RouteAccountParams } from '../util/types';

function Account() {
  const { token } = useParams<RouteAccountParams>();
  const session = useSession();

  // If a magic link is in the address bar,
  // we will attempt to log in
  useMagicLink(token);

  if (session) {
    return (
      <Container>
        <Helmet>
          <title>Book Bay Drag - Account</title>
        </Helmet>
        <AccountDetails />
      </Container>
    );
  } else {
    return (
      <Container>
        <Helmet>
          <title>Book Bay Drag - Log In</title>
        </Helmet>
        <Login />
      </Container>
    );
  }
}

export default Account;
