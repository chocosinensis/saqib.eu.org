import { useState } from 'react'

import { Card, FadeIn, Search } from '../../components'
import { useFetch, useTitle } from '../../hooks'

const Projects = () => {
  const [search, setSearch] = useState('')
  const [projects] = useFetch('projects')

  useTitle('Projects')

  return (
    <section className='projects'>
      <FadeIn el='h2'>Projects</FadeIn>
      <Search set={setSearch} />
      <ul>
        {projects &&
          projects
            .filter(({ title }) => Search.match(title, search))
            .map(({ title, name, author }, i) => (
              <li key={i}>
                <Card
                  href={`/projects/${name}`}
                  title={title}
                  author={author[1]}
                  i={i}
                />
              </li>
            ))}
      </ul>
    </section>
  )
}

export default Projects
export { default as ProjectDetails } from './Details'
