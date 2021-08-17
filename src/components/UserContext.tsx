import React, { createContext } from 'react';
// import { useAccount } from '../util/hooks';
import { BBDAccount } from '../util/types';

type UserContextProps = {
  children: React.ReactNode
}

export const Context = createContext<BBDAccount | undefined>(undefined);

function UserContext({ children }: UserContextProps ) {
  const accountStr = localStorage.getItem('account') || undefined;

  const account: BBDAccount | undefined = JSON.parse(accountStr || '');

  return (
    <Context.Provider value={account}>
      {children}
    </Context.Provider>
  );
}

export default UserContext;
