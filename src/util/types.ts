export type BBDToken = string | undefined;

export type BBDPerson = {
  _id: string;
  dragName: string;
  pronouns?: string;
}

export type BBDAccount = {
  _id: string;
  email: string;
}

export type RoutePersonsParams = {
  id: string;
}
