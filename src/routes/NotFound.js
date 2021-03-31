import { FadeIn } from '../components'

const NotFound = () => (
  <section className='notfound'>
    <div>
      <FadeIn el='span' className='status' delay={0.2}>
        404
      </FadeIn>
      <FadeIn el='span' className='detail' delay={0.4}>
        Not Found
      </FadeIn>
    </div>
  </section>
)

export default NotFound
