import Me from './Me'
import Tag from './Tag'
import Editor from './Editor'
import Plant from './Plant'

const Home = () => (
  <section id='home'>
    <div className='left'>
      <Me />
      <Tag />
    </div>
    <Editor />
    <Plant />
  </section>
)

export default Home
