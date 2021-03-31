import { useEffect, useState } from 'react'

const useFetch = (resource) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const abC = new AbortController()

    ;(async () => {
      try {
        const res = await fetch('/data.json', { signal: abC.signal })
        const data = await res.json()

        setData(data[resource])
      } catch (err) {
        if (err.name != 'AbortError') setData(null)
      }
    })()

    return () => abC.abort()
  }, [data])

  return [data]
}

export default useFetch
