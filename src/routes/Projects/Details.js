import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { FadeIn } from '../../components'
import { useResource, useTitle } from '../../hooks'

const Details = () => {
  const [pointerEvents, setPointerEvents] = useState('none')
  const [project] = useResource('projects', 'name', '/projects', {
    title: '',
    href: '',
    author: [],
    contributors: [],
    repository: null,
    technologies: [],
  })
  const Author = ({ author, type = 'author' }) => <p className={`${type} design float`}>{author.join(' ')}</p>

  useEffect(() => setPointerEvents('none'), [pointerEvents])
  useTitle(project.title, project.author?.[1] ?? project.contributors?.[0]?.[1])

  return (
    <section className='project'>
      <div className='flex'>
        <FadeIn el='h2'>{project.title}</FadeIn>
        <FadeIn el='p' className='float' delay={0.2}>
          <a className='hover-link' href={project.href} target='_blank'>
            {project.href}
          </a>
        </FadeIn>
      </div>
      <FadeIn className='preview' delay={0.4}>
        <iframe src={project.backupHref ?? project.href} title={project.title} style={{ pointerEvents }} />
      </FadeIn>
      <FadeIn el='ul' delay={0.6}>
        <li>Repository: </li>
        <li className={project.repository && 'float'}>
          {project.repository ? (
            <a href={project.repository} className='hover-link' target='_blank'>
              {project.repository}
            </a>
          ) : (
            <span>No public repository link available</span>
          )}
        </li>
      </FadeIn>
      <FadeIn el='ul' delay={0.6}>
        {project.technologies.map((t, i) => (
          <FadeIn key={t} el='li' className='float' delay={0.6 + 0.1 * i}>
            {t}
          </FadeIn>
        ))}
      </FadeIn>
      <FadeIn className='flex' delay={0.8}>
        {project.author ? (
          <Author author={project.author} />
        ) : (
          <div class='contributors'>
            {project.contributors.map((author) => (
              <Author author={author} />
            ))}
          </div>
        )}
        <Link to='/projects' className='float shrunk hover-link'>
          Back
        </Link>
      </FadeIn>
    </section>
  )
}

export default Details
