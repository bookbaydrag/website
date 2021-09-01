// import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';
import AccountDetails from '../components/account/AccountDetails';
import Login from '../components/account/Login';
import { useMagicLink, useSession } from '../util/api/session';
import { RouteAccountParams } from '../util/types';

function Account() {
  const { token } = useParams<RouteAccountParams>();
  const session = useSession();

  useMagicLink(token);

  if (!session) {
    return (
      <div>
        <Helmet>
          <title>Book Bay Drag - Log In</title>
        </Helmet>
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <Helmet>
          <title>Book Bay Drag - Account</title>
        </Helmet>
        <AccountDetails />
      </div>
    );
  }
}

export default Account;
