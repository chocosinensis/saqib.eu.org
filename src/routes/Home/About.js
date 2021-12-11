import Me from '../../assets/img/meatrooftop.png'
import { Shadow } from '../../components'

const About = () => (
  <section id='about'>
    <div className='text'>
      <h1>About Me</h1>
      <p>
        A Xth Grader, {/* Muslim */} God-fearing Monothiest, and {/* South-Asian */} Dweller of the East who is
        passionate about <br /> mathematics, science, philosophy, religion, literature, and programming.
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
