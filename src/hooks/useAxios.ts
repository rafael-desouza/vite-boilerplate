/* eslint-disable @typescript-eslint/no-explicit-any */

import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { useEffect, useState } from 'react'

type FetchResponse<T> = {
  data: T | null
  loading: boolean
  error: any
}

function useAxios<T>(
  url: string,
  config?: AxiosRequestConfig
): FetchResponse<T> {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response: AxiosResponse<T> = await axios(url, config)
        setData(response.data)
      } catch (err: any) {
        setError(err)
      } finally {
        setLoading(false)
      }
    }

    sendRequest()
  }, [url, config])

  return { data, loading, error }
}

export default useAxios
