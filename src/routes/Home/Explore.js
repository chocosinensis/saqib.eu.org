import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Card, Search } from '../../components'

const Q = ({ text }) =>
  text.split(/\n+/).map((t) => (
    <>
      <q className='design glow'>{t}</q>
      <br />
    </>
  ))

const QuoteLink = () => {
  const [quote, setQuote] = useState('')
  const [r, setR] = useState('')

  return (
    <Card nohyperlink className='q'>
      <Search value={quote} set={setQuote} placeholder='Enter Quote' />
      <Search value={r} set={setR} placeholder='Enter Footnote or Reference' />
      <span className='l'>
        <Link to={`/quote?q=${quote}&r=${r}`} className='float hover-link'>
          View Quote
        </Link>
      </span>
    </Card>
  )
}

const Explore = () => (
  <section id='explore'>
    <h1>Explore</h1>
    <Card nohyperlink author='Saqib'>
      <Q
        text={`Sacrificing your life for the sake of yourself won't allow you to live longer.
Rather, sacrificing for the world will make you immortal in the hearts.`}
      />
    </Card>
    <div className='paras'>
      <p>
        Mathematics and philosophy are my favorite subjects for exploration and thinking. Since I started loving logic,
        these became my passion.
      </p>
      <p>
        Still in the learning stage, but yet quite enthusiast about programming, I like to create web servers and SPAs.
      </p>
      <p>I have an intention for learning and working with rust. Also like to work with the assembly language.</p>
    </div>
    <Card nohyperlink author='Saqib'>
      <Q
        text={`Having an open source mind for anything simply indicates two things.
First, it allows to spread knowledge rapidly, and second, it makes sure that you aren't aggressive and want others to know.`}
      />
    </Card>
    <QuoteLink />
  </section>
)

export default Explore
