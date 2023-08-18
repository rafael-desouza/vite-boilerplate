/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { z, ZodType } from 'zod'

interface ApiResult<T> {
  data?: T
  error?: any
}

async function requestWithZod<T>(
  url: string,
  schema: ZodType,
  config?: AxiosRequestConfig
): Promise<ApiResult<T>> {
  try {
    const response: AxiosResponse = await axios(url, config)

    // Check if the response contains data
    if (response && response.data) {
      const parsedData = schema.parse(response.data)

      return { data: parsedData }
    } else {
      return {}
    }
  } catch (err) {
    if (err instanceof z.ZodError) {
      // This is a validation error from Zod
      return { error: { message: 'Validation failed', errors: err.errors } }
    } else {
      return { error: err }
    }
  }
}

export default requestWithZod
