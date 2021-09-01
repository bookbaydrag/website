import { getSession } from '../store';

// For testing local server build
// export const baseUrl = 'http://localhost:8000/v1';

// For production server
export const baseUrl = 'https://api.bookbaydrag.com/v1';

export async function validateSuccess(res: Response) {
  if (!(res.status<400)) {
    const message: string = ( await res.json() ).error;
    throw new ServerError(
        res.status,
        message,
    );
  }
}

export class ServerError extends Error {
  private _statusCode: number

  constructor(status: number, message?: string) {
    if (!message) {
      message = httpErrors[status.toString()];
    }
    super(message);
    this._statusCode = status;
  }

  get statusCode(): number {
    return this._statusCode;
  }
}

const httpErrors: {[status: string]: string} = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  409: 'Conflict',
  500: 'Server Error',
};

type HTTPRoutes =
'persons'|
'sessions' |
'tokens'

type HTTPMethod =
'GET' |
'POST' |
'PUT' |
'DELETE'

export async function fetchBBD(
    route: HTTPRoutes,
    method: HTTPMethod,
    body: unknown = null,
    id: string = '',
): Promise<Response> {
  const session = getSession();
  return fetch(
      `${baseUrl}/${route}/${id}`,
      {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session?._id}`,
        },
        body: body? JSON.stringify(body) : null,
      },
  );
}
