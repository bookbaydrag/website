// import { useEffect } from 'react';
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
        <Login />
      </div>
    );
  } else {
    return (
      <div>
        <AccountDetails />
      </div>
    );
  }
}

export default Account;
