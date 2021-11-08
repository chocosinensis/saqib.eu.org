import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
        if (err.name != 'AbortError') setData(initial)
      }
    })()

    return () => abC.abort() // eslint-disable-next-line
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
        else setLoading(false)
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
  const navigate = useNavigate()

  useEffect(() => {
    if (res) {
      const targetData = res.find((r) => r[param] == paramValue)
      if (!targetData) return navigate(redirect)

      setData(targetData)
    }
  }, [res, navigate, redirect, param, paramValue])

  return [data]
}
