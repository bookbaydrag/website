import { useParams } from 'react-router-dom';
import Login from '../components/account/Login';
import { Context } from '../components/UserContext';
import { useMagicLink } from '../util/hooks';
import { BBDAccount } from '../util/types';

type AccountParams = {
  token?: string;
}

function Account() {
  const { token } = useParams<AccountParams>();
  useMagicLink(token);

  const account = localStorage.getItem('account'); // useAccount();

  console.log('account:', account);

  function renderAccount(value: BBDAccount | undefined) {
    if (value) {
      return (
        <div>
          {JSON.stringify(value)}
        </div>
      );
    }
    return (
      <div>
        no account
      </div>
    );
  }

  if (!account) {
    return (
      <div>
        <Login />
      </div>
    );
  } else {
    return (
      <Context.Consumer>
        {renderAccount}
      </Context.Consumer>
    );
  }
}

export default Account;
