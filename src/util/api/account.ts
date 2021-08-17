import { BBDAccount } from '../types';
import { baseUrl } from './etc';

export async function logIn(token: string): Promise<BBDAccount | null> {
  const res = await fetch(`${baseUrl}/token/${token}`);
  if (res.status < 400) {
    const account: BBDAccount = await res.json();
    return account;
  } else {
    return null;
  }
}
