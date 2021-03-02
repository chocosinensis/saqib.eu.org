import marked from 'marked';

import { Card, FadeIn } from '../../components';
import { useFetch, useTitle } from '../../hooks';

const Articles = () => {
  const [articles] = useFetch('articles');

  useTitle('Articles');

  return (
    <section className="articles">
      <FadeIn el="h2">Articles</FadeIn>
      <ul>{articles && articles.map(({ title, body, slug, author }, i) => (
        <li key={i}>
          <Card href={`/articles/${slug}`} title={title}
            author={author[1]} i={i}
          >
            <p className="snippet" dangerouslySetInnerHTML={{
              __html: marked(`${body[0].split(' ').slice(0, 10).join(' ')}...`)
            }}></p>
          </Card>
        </li>
      ))}</ul>
    </section>
  );
}

export default Articles;
export { default as ArticleDetails } from './Details';
