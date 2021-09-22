import Home from './Home'
import About from './About'
import Explore from './Explore'
import Contact from './Contact'
import { Quote } from '../../components'

export default () => (
  <>
    <Home />
    <About />
    <Quote
      quote='O Tranquil Soul! Return to your Lord, well pleased, well pleasing.'
      r='Al-Fajr 89 : 27-28'
      wave={{ bottom: 'rgba(0,0,0,0.5)' }}
    />
    <Explore />
    <Quote
      quote='Fear Allah, Wherever you are.'
      r='- Prophet Muhammad (PBUH)'
      wave={{ top: 'rgba(0,0,0,0.5)', bottom: 'rgba(0,0,0,0.5)' }}
    />
    <Contact />
  </>
)
