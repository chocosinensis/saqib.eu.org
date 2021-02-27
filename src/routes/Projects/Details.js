import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { FadeIn } from '../../components';
import { useResource } from '../../hooks';

const Details = () => {
  const [pointerEvents, setPointerEvents] = useState('none');
  const [project] = useResource('projects', 'name', '/projects', {
    title: '', href: '', author: [], technologies: []
  });

  useEffect(() => setPointerEvents('none'), [pointerEvents]);

  return (
    <section className="project">
      <div className="flex">
        <FadeIn el="h2">{project.title}</FadeIn>
        <FadeIn el="p" className="float" delay={0.2}>
          <a className="hover-link" href={project.href} target="_blank">
            {project.href}
          </a>
        </FadeIn>
      </div>
      <FadeIn className="preview" delay={0.4}>
        <iframe src={project.href} style={{ pointerEvents }}></iframe>
      </FadeIn>
      <FadeIn el="ul" delay={0.6}>{project.technologies.map((t, i) => (
        <FadeIn key={t} el="li" className="float"
          delay={0.6 + (0.1 * i)}
        >{t}</FadeIn>
      ))}</FadeIn>
      <FadeIn className="flex" delay={0.8}>
        <p className="author design float">{project.author.join(' ')}</p>
        <Link to="/projects" className="float shrunk hover-link">Back</Link>
      </FadeIn>
    </section>
  );
}

export default Details;
