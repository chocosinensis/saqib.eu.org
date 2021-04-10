import { useState } from 'react'
import { motion } from 'framer-motion'

import { Shadow, FadeInText } from '../../../components'
import { useTitle } from '../../../hooks'

const Editor = () => {
  const [code, setCode] = useState({
    topic: 'Express',
    Body: Codes.Express,
  })
  useTitle('Home')

  return (
    <motion.div
      className='editor'
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
    >
      <header>
        <div className='btns'>
          <span className='btn red'></span>
          <span className='btn orange'></span>
          <span className='btn green'></span>
        </div>
        <div className='topic'>
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
        </div>
      </header>
      <Shadow />
      <div className='body'>
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
      </div>
    </motion.div>
  )
}

const Codes = {
  Express: () => (
    <pre>
      const <span className='normal'>express</span> ={' '}
      <span className='normal'>require</span>('express') <br />
      <br />
      <span className='normal'>express</span>()
      <br />
      <br />
      {'  '}.<span className='normal'>get</span>('/', (
      <span className='normal'>req</span>, <span className='normal'>res</span>){' '}
      {'=>'} <span className='normal'>res</span>.
      <span className='normal'>send</span>
      ('Index'))
      <br />
      <br />
      {'  '}.<span className='normal'>listen</span>(
      <span className='normal'>process</span>.
      <span className='normal'>env</span>.<span className='normal'>PORT</span>{' '}
      ?? 3000)
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
      <span className='normal'>app</span>.<span className='normal'>run</span>(
      <span className='normal'>port</span>
      =3000, <span className='normal'>debug</span>
      =True) <br />
      <br />
    </pre>
  ),
}

export default Editor
