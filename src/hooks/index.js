import { useEffect, useState } from 'react'

export * from './fetch'

export const useScroll = (initial, afterscroll) => {
  const [top, setTop] = useState(initial)
  const [prevScrollPos, setPrevScrollPos] = useState(pageYOffset)

  useEffect(() => {
    const scroll = () => {
      const currentScrollPos = pageYOffset
      setTop(prevScrollPos > currentScrollPos ? initial : afterscroll)
      setPrevScrollPos(currentScrollPos)
    }
    document.addEventListener('scroll', scroll)

    return () => document.removeEventListener('scroll', scroll)
  }, [prevScrollPos, initial, afterscroll])

  return [top]
}

export const useTitle = (...titles) => {
  useEffect(() => {
    const title = `${titles.join(' « ')} » Nazmus Saqib`

    document.title = title
    // eslint-disable-next-line
  }, [...titles])
}
