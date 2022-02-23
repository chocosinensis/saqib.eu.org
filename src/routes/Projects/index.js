import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import { Card, FadeIn, Loading, Search } from '../../components'
import { useLocalFetch, useTitle } from '../../hooks'

export const Projects = () => {
  const query = new URLSearchParams(useLocation().search)
  const [search, setSearch] = useState(query.get('q') ?? '')
  const [projects, loading] = useLocalFetch('projects')

  useTitle('Projects')

  return (
    <section className='projects'>
      <FadeIn el='h2'>Projects</FadeIn>
      <Search value={search} set={setSearch} />
      <ul>
        {loading ? (
          <Loading />
        ) : (
          projects
            .filter((project) => Search.match(project, search))
            .map(({ title, name, author, contributors: c }, i) => (
              <li key={i}>
                <Card href={`/projects/${name}`} title={title} author={author?.[1] ?? c[0][1]} i={i} />
              </li>
            ))
        )}
      </ul>
    </section>
  )
}

export default Projects
export { default as ProjectDetails } from './Details'
