import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

import { useFetch } from './'

const useResource = (resource, param, redirect, initial) => {
  const [data, setData] = useState(initial)
  const [res] = useFetch(resource)
  const { [param]: paramValue } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (res) {
      const targetData = res.find((r) => r[param] == paramValue)
      if (!targetData) return history.push(redirect)

      setData(targetData)
    }
  }, [res])

  return [data]
}

export default useResource
