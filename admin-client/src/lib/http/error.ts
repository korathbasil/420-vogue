export class HttpError extends Error {
  constructor(public messages: string | string[], public statusCode: number) {
    super();
  }
}
