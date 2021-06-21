import Me from '../../assets/img/meatrooftop.png'
import { Shadow } from '../../components'

const About = () => (
  <section id='about'>
    <div className='text'>
      <h1>About Me</h1>
      <p>
        A IXth Grader, Muslim, and Bangladeshi who is passionate about <br /> mathematics, science, philosophy, religion
        and programming.
      </p>
    </div>
    <div className='img-cont'>
      <div className='img'>
        <Shadow translate={{ from: '-20vw', to: '120vw' }} duration={1} />
        <img src={Me} alt='Loading Image...' />
      </div>
    </div>
  </section>
)

export default About
