import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Shadow } from '../../../components';

const Editor = () => {
  const [code, setCode] = useState({
    topic: 'Express',
    Body: Codes.Express
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCode({
        topic: code.topic === 'Express'
          ? 'Flask' : 'Express',
        Body: code.Body === Codes.Express
          ? Codes.Flask : Codes.Express
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [code]);

  return (
    <motion.div className="editor"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      transition={{ duration: 0.5, delay: 1, ease: 'easeInOut' }}
    >
      <header>
        <div className="btns">
          <span className="btn red"></span>
          <span className="btn orange"></span>
          <span className="btn green"></span>
        </div>
        <div className="topic">
          <code>{code.topic}</code>
        </div>
      </header>
      <Shadow />
      <div className="body">{<code.Body />}</div>
    </motion.div>
  );
}

const Codes = {
  Express: () => (
    <pre>
      const <span className="normal">express</span> = {''}
      <span className="normal">require</span>('express'); <br/><br/>

      const <span className="normal">app</span> = {''}
      <span className="normal">express</span>(); <br/><br/>

      <span className="normal">app</span>
      .<span className="normal">listen</span>(
      <span className="normal">process</span>
      .<span className="normal">env</span>
      .<span className="normal">PORT</span> ?? 3000); <br/><br/>

      <span className="normal">app</span>
      .<span className="normal">get</span>
      ('/', (<span className="normal">req</span>
      , <span className="normal">res</span>
      ) {'=>'} <span className="normal">res</span>
      .<span className="normal">send</span>('Index')); <br/><br/>
    </pre>
  ),
  Flask: () => (
    <pre>
      import <span className="normal">Flask</span> {''}
      from <span className="normal">flask</span>  <br/><br/>

      <span className="normal">app</span> = {''}
      <span className="normal">Flask</span>(__name__)  <br/><br/>

      @app.route('/') <br/>
      def <span className="normal">index</span>(): <br/>
      {'  '}return 'Index' <br/><br/>

      if __name__ == '__main__': <br/>
      {'  '}<span className="normal">app</span>
        .<span className="normal">run</span>(<span className="normal">port</span>
        =3000, <span className="normal">debug</span>
        =True) <br/><br/>
    </pre>
  )
}

export default Editor;
