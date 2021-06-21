import { useEffect, useState } from 'react'

export * from './fetch'

export const useScroll = (initial, afterscroll) => {
  const [top, setTop] = useState(initial)
  const [prevScrollPos, setPrevScrollPos] = useState(pageYOffset)

  useEffect(
    () =>
      document.addEventListener('scroll', () => {
        const currentScrollPos = pageYOffset
        setTop(prevScrollPos > currentScrollPos ? initial : afterscroll)
        setPrevScrollPos(currentScrollPos)
      }),
    [prevScrollPos, initial, afterscroll]
  )

  return [top]
}

export const useTitle = (...titles) => {
  useEffect(() => {
    const title = `${titles.join(' « ')} » Nazmus Saqib`
    if (document.title == title) return

    document.title = title
  }, [titles])
}
