import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchBBD, validateSuccess } from './etc';
import { useAppDispatch, useAppSelector } from '../hooks';
import { setSession, setSessionReducer } from '../store';
import { BBDAccount, BBDToken } from '../types';

export function useMagicLink(token: BBDToken) {
  const { replace } = useHistory();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    async function handleToken() {
      if (token) {
        const session = await logIn(token);
        dispatch(setSessionReducer(session));
        replace('/account');
      }
    }

    handleToken();
  }, [token]);
}

export function useSession() {
  const { session } = useAppSelector((state)=> state?.session);
  return session;
}

export function usePollSession(): void {
  const session = useSession();
  const dispatch = useAppDispatch();

  useEffect(()=>{
    const newSession = JSON.parse(localStorage.getItem('session') || 'null');
    if (newSession !== session) {
      dispatch(setSessionReducer(newSession));
    }
  }, []);
}

export async function logIn(token: string): Promise<BBDAccount | null> {
  try {
    const res = await fetchBBD('sessions', 'POST', { body: { token } });
    await validateSuccess(res);
    const account: BBDAccount = await res.json();
    return account;
  } catch (error) {
    return null;
  }
}

export function logOut() {
  fetchBBD('sessions', 'DELETE');
  setSession(null);
}
