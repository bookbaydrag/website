export type PersonType = {
  _id: string;
  dragName: string;
  pronouns?: string;
  phone?: string;
  email?: string;
  contactMethod?: { [name: string]: string };
  city?: string;
  picture?: string;
}

export type RoutePersonsParams = {
  id: string;
}

export type DeBounceProps = {
  function: (...args: []) => void;
  timeout: number;
}
