/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ZodType } from 'zod'

import { ApiError } from '../helpers/errors'

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string
})

export async function axiosRequest<T, Z extends ZodType>(
  url: string,
  schema?: Z,
  config?: AxiosRequestConfig
): Promise<AxiosResponse<T>> {
  try {
    const response: AxiosResponse = await api(url, config)

    if (response.data != null) {
      if (schema) {
        const parsed = schema.safeParse(response.data)

        if (parsed.success) {
          response.data = parsed.data

          return response
        }

        throw new ApiError('Data validation failed', 400, parsed.error)
      }
    }

    return response
  } catch (err) {
    if (err instanceof ApiError) throw err

    if (err instanceof AxiosError)
      throw new ApiError(err.message, err.status || 400, err.stack)

    throw new ApiError('An error occurred during the request', 400)
  }
}
