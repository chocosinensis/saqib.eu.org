import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Card, FadeIn, Search } from '../../components'
import { useLocalFetch, useTitle } from '../../hooks'

const Projects = () => {
  const query = new URLSearchParams(useLocation().search)
  const [search, setSearch] = useState(query.get('q') ?? '')
  const [projects] = useLocalFetch('projects')

  useTitle('Projects')

  return (
    <section className='projects'>
      <FadeIn el='h2'>Projects</FadeIn>
      <Search value={search} set={setSearch} />
      <ul>
        {projects &&
          projects
            .filter((project) => Search.match(project, search))
            .map(({ title, name, author, contributors: c }, i) => (
              <li key={i}>
                <Card href={`/projects/${name}`} title={title} author={author?.[1] ?? c[0][1]} i={i} />
              </li>
            ))}
      </ul>
    </section>
  )
}

export default Projects
export { default as ProjectDetails } from './Details'
