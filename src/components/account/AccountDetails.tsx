import { FormEventHandler } from 'react';
import { logOut, useSession } from '../../util/api/session';

function AccountDetails() {
  const session = useSession();

  const handleLogOut: FormEventHandler = (e) => {
    e.preventDefault();
    logOut();
  };

  return (
    <div>
      <div>{session?.account?.email}</div>
      <form onSubmit={handleLogOut}>
        <input type="submit" value="Log Out" />
      </form>
    </div>
  );
}

export default AccountDetails;
