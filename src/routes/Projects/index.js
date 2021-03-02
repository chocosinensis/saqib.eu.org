import { Card, FadeIn } from '../../components';
import { useFetch, useTitle } from '../../hooks';

const Projects = () => {
  const [projects] = useFetch('projects');

  useTitle('Projects');

  return (
    <section className="projects">
      <FadeIn el="h2">Projects</FadeIn>
      <ul>{projects && projects.map(({ title, name, author }, i) => (
        <li key={i}>
          <Card href={`/projects/${name}`} title={title}
            author={author[1]} i={i}
          />
        </li>
      ))}</ul>
    </section>
  );
}

export default Projects;
export { default as ProjectDetails } from './Details';
