import { fetchBBD, validateSuccess } from './etc';

export async function requestMagicLink(email: string): Promise<void> {
  try {
    const res = await fetchBBD('tokens', 'POST', { body: { email } });
    await validateSuccess(res);
  } catch (error) {
    console.log(error);
  }
}
