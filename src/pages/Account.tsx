// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AccountDetails from '../components/account/AccountDetails';
import Login from '../components/account/Login';
import { Page } from '../styles/pages.styles';
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
      <Page>
        <Helmet>
          <title>Book Bay Drag - Account</title>
        </Helmet>
        <AccountDetails />
      </Page>
    );
  } else {
    return (
      <Page>
        <Helmet>
          <title>Book Bay Drag - Log In</title>
        </Helmet>
        <Login />
      </Page>
    );
  }
}

export default Account;
