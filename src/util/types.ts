export type BBDAccount = {
  _id: string;
  email: string;
  personas: BBDPersona[];
}

export type BBDPersona = {
  _id?: string,
  dragName: string;
  pronouns: string;
}

export type BBDSession = {
  _id: string;
  account: BBDAccount;
} | null;

export type BBDToken = string | undefined;

export type RoutePersonsParams = {
  id: string;
}

export type RouteAccountParams = {
  token: string;
}
