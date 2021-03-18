import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import marked from 'marked';

import { FadeIn } from '../../components';
import { useResource, useTitle } from '../../hooks';

const Details = () => {
  const [__html, set__html] = useState('<p></p>');
  const [article] = useResource('articles', 'slug', '/articles', {
    title: '', body: [], slug: '', author: []
  });

  useEffect(() => {
    if (article)
      set__html(marked(article.body.join('\n\n')));
  }, [article]);
  useTitle(article.title, article.author[1]);

  return (
    <section className="article">
      <FadeIn className="title" el="h2" delay={0.2}>
        {article.title}
      </FadeIn>
      <FadeIn delay={0.4} el="article" __html={__html} />
      <FadeIn className="flex" delay={0.6}>
        <p className="author design float">{article.author.join(' ')}</p>
        <Link to='/articles' className="float shrunk hover-link">Back</Link>
      </FadeIn>
    </section>
  );
}

export default Details;
