import { Routes, Route } from 'react-router-dom'

import { Home, Quote, NotFound } from './'
import { Articles, ArticleDetails } from './Articles'
import { Projects, ProjectDetails } from './Projects'
import { Quran, Surah, SearchAyahs } from './Quran'

const routes = [
  { path: '/', Element: Home },

  { path: '/articles', Element: Articles },
  { path: '/articles/:slug', Element: ArticleDetails },

  { path: '/projects', Element: Projects },
  { path: '/projects/:name', Element: ProjectDetails },

  { path: '/quran', Element: Quran },
  { path: '/quran/:surah', Element: Surah },
  { path: '/quran/search', Element: SearchAyahs },

  { path: '/quote', Element: Quote },

  { path: '*', Element: NotFound },
]

export default () => (
  <Routes>
    {routes.map(({ path, Element }) =>
      <Route key={path} path={path} element={<Element />} />)}
  </Routes>
)
