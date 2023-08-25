/* eslint-disable @typescript-eslint/no-explicit-any */
export class ApiError extends Error {
  public statusCode: number
  public details?: any

  constructor(message: string, statusCode: number, details?: any) {
    super(message)
    this.statusCode = statusCode
    this.details = details

    Object.setPrototypeOf(this, new.target.prototype)
  }
}
