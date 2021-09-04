import { BBDPersona } from '../types';
import { fetchBBD, validateSuccess } from './etc';
import { validateSession } from './session';

export const newPersona: BBDPersona = {
  dragName: '',
  pronouns: '',
};

export async function addPersona(persona: BBDPersona) {
  try {
    console.log(persona);
    const response = await fetchBBD('personas', 'POST', { body: persona });
    validateSuccess(response);
    await validateSession();
  } catch (error) {
    console.error(error);
  }
}

export async function updatePersona(persona: BBDPersona) {
  try {
    // console.log(persona);
    const response = await fetchBBD('personas', 'PUT', {
      id: persona._id,
      body: persona,
    });
    validateSuccess(response);
    await validateSession();
  } catch (error) {
    console.error(error);
  }
}

export async function deletePersona(persona: BBDPersona) {
  try {
    console.log(persona);
    const response = await fetchBBD('personas', 'DELETE', { id: persona._id });
    validateSuccess(response);
    await validateSession();
  } catch (error) {
    console.error(error);
  }
}
