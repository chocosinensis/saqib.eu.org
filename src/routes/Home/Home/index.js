import { useState } from 'react'

import Me from './Me'
import Tag from './Tag'
import Editor from './Editor'
import Plant from './Plant'

const Home = () => {
  const [isClosed, setClosed] = useState(false)
  const [isMinimized, setMinimized] = useState(false)
  const [isMaximized, setMaximized] = useState(false)

  const is = (a, b) => (isMaximized && !(isClosed || isMinimized) ? a : b)

  return (
    <section id='home'>
      <div className='left' style={{ opacity: is(0, 1) }}>
        <Me />
        <Tag />
      </div>
      <Editor is={{ isMaximized, isMinimized, isClosed }} set={{ setMaximized, setMinimized, setClosed }} />
      <Plant opacity={is(0, 0.7)} />
    </section>
  )
}

export default Home
