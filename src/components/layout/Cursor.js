import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const Cursor = () => {
  const [top, setTop] = useState(-40)
  const [left, setLeft] = useState(-40)
  const [opacity, setOpacity] = useState(0)
  const [clicked, setClicked] = useState(false)
  const [timer, setTimer] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const set = (x, y) => {
      setTop(y)
      setLeft(x)
    }

    const move = ({ clientX, clientY, targetTouches }) => {
      setOpacity(0.5)
      clearTimeout(timer)
      setTimer(setTimeout(() => setOpacity(0), 1200))

      if (clientX && clientY) return set(clientX, clientY)
      else if (targetTouches) return set(targetTouches[0].clientX, targetTouches[0].clientY)
    }

    const expand = () => {
      setClicked(true)
      setTimeout(() => setClicked(false), 400)
    }

    /** @param {'add' | 'remove'} d */
    // prettier-ignore
    const events = (d = 'add') => () => {
      const fn = `${d}EventListener`
      document[fn]('mousemove', move)
      document[fn]('touchmove', move)
      document[fn]('click', expand)
    }

    events()()

    return events('remove')
  }, [timer])

  useEffect(() => scrollTo(0, 0), [location])

  return (
    <div style={{ top, left, opacity }} className={`cursor ${clicked ? 'expand' : ''}`}>
      <div />
    </div>
  )
}

export default Cursor
