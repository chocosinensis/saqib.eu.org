import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { Shadow, FadeInText } from '../../../components'
import { useTitle } from '../../../hooks'

const defaultProps = (loaded = true) => ({
  initial: { opacity: 0 },
  animate: { opacity: 0.8 },
  exit: { opacity: 0 },
  transition: { duration: 0.25, delay: loaded ? 0 : 1, ease: 'easeInOut' },
})

const Editor = ({ set, isMaximized, loaded }) => {
  const [code, setCode] = useState({
    topic: 'Express',
    Body: Codes.Express,
  })

  useTitle('Home')

  const Button = ({ className, setter }) => (
    <motion.span className={`btn ${className}`} onClick={set(setter)} whileTap={{ scale: 0.9 }} />
  )

  return (
    <motion.div className={`editor${isMaximized ? ' maximized' : ''}`} {...defaultProps(loaded)}>
      <header>
        <div className='btns'>
          <Button className='red' setter='Close' />
          <Button className='orange' setter='Minimize' />
          <Button className='green' setter='Maximize' />
        </div>
        <div className='topic'>
          {isMaximized ? (
            <code>Editor</code>
          ) : (
            <FadeInText
              code
              onIter={() =>
                setCode({
                  ...code,
                  topic: code.topic === 'Express' ? 'Flask' : 'Express',
                })
              }
            >
              {code.topic}
            </FadeInText>
          )}
        </div>
      </header>
      {!isMaximized && <Shadow duration={1.5} />}
      <div className='body'>
        {isMaximized ? (
          <textarea spellCheck='false' />
        ) : (
          <FadeInText
            onIter={() =>
              setCode({
                ...code,
                Body: code.Body === Codes.Express ? Codes.Flask : Codes.Express,
              })
            }
          >
            <code.Body />
          </FadeInText>
        )}
      </div>
    </motion.div>
  )
}

const Codes = {
  Express: () => (
    <pre>
      const <span className='normal'>express</span> = <span className='normal'>require</span>('express') <br />
      <br />
      <span className='normal'>express</span>()
      <br />
      <br />
      {'  '}.<span className='normal'>get</span>('/', (<span className='normal'>req</span>,{' '}
      <span className='normal'>res</span>) {'=>'} <span className='normal'>res</span>.
      <span className='normal'>send</span>
      ('Index'))
      <br />
      <br />
      {'  '}.<span className='normal'>listen</span>(<span className='normal'>process</span>.
      <span className='normal'>env</span>.<span className='normal'>PORT</span> ?? 3000)
      <br />
    </pre>
  ),
  Flask: () => (
    <pre>
      import <span className='normal'>Flask</span> {''}
      from <span className='normal'>flask</span> <br />
      <br />
      <span className='normal'>app</span> = {''}
      <span className='normal'>Flask</span>(__name__) <br />
      <br />
      @app.route('/') <br />
      def <span className='normal'>index</span>(): <br />
      {'  '}return 'Index' <br />
      <br />
      if __name__ == '__main__': <br />
      {'  '}
      <span className='normal'>app</span>.<span className='normal'>run</span>(<span className='normal'>port</span>
      =3000, <span className='normal'>debug</span>
      =True) <br />
      <br />
    </pre>
  ),
}

export default ({ is, set: sets }) => {
  const [loaded, setLoaded] = useState(false)

  /** @param {'Close' | 'Minimize' | 'Maximize'} fn */
  const set = (fn) => () => {
    sets[`set${fn}d`]?.((val) => !val)
  }

  const editorProps = { isMaximized: is.isMaximized, set, loaded }

  useEffect(() => setLoaded(true), [])
  useEffect(() => {
    if (is.isMinimized) setTimeout(() => sets.setMinimized(false), 10000)
  }, [is.isMinimized, sets])

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {is.isClosed && (
          <motion.div className='editoricon' {...defaultProps()}>
            <div onClick={set('Close')}>&gt;_</div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence exitBeforeEnter>
        {!is.isClosed && !is.isMinimized && <Editor {...editorProps} />}
      </AnimatePresence>
    </>
  )
}
