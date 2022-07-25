import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchBBD, validateSuccess } from './etc';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getSession, setSession, setSessionReducer } from '../store';
import { BBDSession, BBDToken } from '../types';

export function useMagicLink(token: BBDToken) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  // We'll only run this code if the token changes
  useEffect(()=>{
    async function handleToken() {
      if (token) {
        const session = await logIn(token);
        dispatch(setSessionReducer(session));
        navigate('/account', { replace: true });
      }
    }

    handleToken();
  }, [token]);
}

export function useSession() {
  const { session } = useAppSelector((state)=> state?.session);
  return session;
}

export async function checkSession() {
  // session in Redux store
  const currentSession = getSession();
  // session in localStorage
  const newSession: BBDSession = JSON.parse(
      localStorage.getItem('session') || 'null',
  );

  if (
    JSON.stringify(newSession) !==
    JSON.stringify(currentSession)
  ) {
    // if not the same, replace the Redux version
    // with the version in localStorage
    setSession(newSession);
  }
}

export async function logIn(token: string): Promise<BBDSession | null> {
  try {
    const res = await fetchBBD('sessions', 'POST', { body: { token } });
    console.log(res.status);
    await validateSuccess(res);
    const session: BBDSession = await res.json();
    return session;
  } catch (error) {
    return null;
  }
}

export function logOut() {
  fetchBBD('sessions', 'DELETE');
  setSession(null);
}

export async function validateSession(): Promise<void> {
  try {
    const res = await fetchBBD('sessions', 'PUT');
    await validateSuccess(res);
    const session: BBDSession = await res.json();
    setSession(session);
  } catch (error) {
    setSession(null);
  }
}
