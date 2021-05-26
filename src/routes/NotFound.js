import { FadeIn } from '../components'
import { useTitle } from '../hooks'

const NotFound = () => {
  useTitle('404', 'Not Found')

  return (
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
}

export default NotFound
