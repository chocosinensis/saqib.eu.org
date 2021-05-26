import Me from '../../assets/img/meatrooftop.png'
import { Shadow } from '../../components'

const About = () => (
  <section id='about'>
    <div className='text'>
      <h1>About Me</h1>
      <p>
        I am a IXth graded student, who lives in Bangladesh. <br />I love to code very much, especially creating web
        apps and servers.
      </p>
    </div>
    <div className='img-cont'>
      <div className='img'>
        <Shadow />
        <img src={Me} alt='Loading Image...' />
      </div>
    </div>
  </section>
)

export default About
