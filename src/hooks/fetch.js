import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'

export const useFetch = (route, initial = null) => {
  const [data, setData] = useState(initial)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const abC = new AbortController()

    ;(async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API}/${route}`, { signal: abC.signal })
        const data = await res.json()

        setData(data)
        setLoading(false)
      } catch (err) {
        if (err.name != 'AbortError') setData(null)
        setLoading(false)
      }
    })()

    return () => abC.abort()
  }, [route])

  return [data, loading]
}

export const useLocalFetch = (resource) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const abC = new AbortController()

    ;(async () => {
      try {
        const res = await fetch('/data.json', { signal: abC.signal })
        const data = await res.json()

        setData(data[resource])
        setLoading(false)
      } catch (err) {
        if (err.name != 'AbortError') setData(null)
        setLoading(false)
      }
    })()

    return () => abC.abort()
  }, [resource])

  return [data, loading]
}

export const useResource = (resource, param, redirect, initial) => {
  const [data, setData] = useState(initial)
  const [res] = useLocalFetch(resource)
  const { [param]: paramValue } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (res) {
      const targetData = res.find((r) => r[param] == paramValue)
      if (!targetData) return history.push(redirect)

      setData(targetData)
    }
  }, [res, history, redirect, param, paramValue])

  return [data]
}
