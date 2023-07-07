import { useState, useEffect, useCallback, useRef } from 'react'
import { Bank } from '../types/home'
import axios, { CancelTokenSource } from 'axios'
import { apiURL } from '../constants/constants'

function useGetBanks(): [Bank[], boolean, Error | undefined, () => void] {
  const [banks, setBanks] = useState<Bank[]>([])
  const [isLoding, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<Error>()
  const controllerRef = useRef(new AbortController())

  const cancel = () => {
    controllerRef.current.abort()
  }

  const getBanks = useCallback(async () => {
    try {
      setIsLoading(true)
      setError(undefined)
      const response = await axios.get(apiURL, {
        signal: controllerRef.current.signal
      })

      if (!response.data) {
        setError({ message: 'No found data!' } as Error)
        setBanks([])
        return
      }
      setBanks(response.data)
    } catch (error) {
      setError(error as Error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  useEffect(() => {
    getBanks()
    return () => cancel()
  }, [getBanks])

  return [banks, isLoding, error, getBanks]
}

export default useGetBanks
