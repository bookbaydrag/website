import { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// import { validate } from 'uuid';
// import { logIn } from './api/account';
import { BBDAccount, BBDToken } from './types';

export function useQuery(query: string ): string | null {
  const searchParams = new URLSearchParams(useLocation().search);
  return searchParams.get(query);
};

export function useDeBounce(
    func: (...args: any[])=>void,
    timeout: number,
): ()=>void {
  const [timer, setTimer] = useState<number>();

  const trigger = ()=>{
    clearTimeout(timer);
    setTimer(window.setTimeout(func, timeout));
  };

  return trigger;
};

/**
 * If there is no id, redirect to search
 * @param {string} id
 */
export function useNoIdRedirect(id: string) {
  const { replace } = useHistory();

  useEffect(()=>{
    if (!id) {
      replace('/search');
    }
  }, [id]);
}

export function useAccount(
    account: BBDAccount | undefined = undefined,
): BBDAccount | undefined {
  return useLocalStorage('account', account);
}

export async function useMagicLink(token: BBDToken) {
  const { replace } = useHistory();

  const a: BBDAccount = {
    _id: '298b2501-b3eb-4754-b417-e81a61ad3d7b',
    email: 'seanny.phoenix@gmail.com',
  };
  setTimeout(()=>{
    localStorage.setItem('account', JSON.stringify(a));
  }, 2000);


  if (token) {
    // if (validate(token)) {
    //   const account = await logIn(token);
    //   if (account) {
    //     localStorage.setItem('account', JSON.stringify(account));
    //   }
    // }
    replace('/account');
  }
}

export function useLocalStorage<T>(
    key: string,
    value: T,
): T | undefined {
  const [currentValue, setCurrentValue] = useState<T>();

  useEffect(()=>{
    localStorage.setItem(key, JSON.stringify(value));
    setCurrentValue(value);
  }, [value]);

  return currentValue;
}
