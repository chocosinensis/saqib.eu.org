import { Header, Footer, Cursor } from '../components/layout'

export const Layout = ({ children }) => (
  <>
    <Header />
    <Cursor />
    <main>{children}</main>
    <Footer />
  </>
)

export { default as Routes } from './Routes'
export { default as Home } from './Home'
export { default as Articles, ArticleDetails } from './Articles'
export { default as Projects, ProjectDetails } from './Projects'
export { default as Quran, Surah } from './Quran'
export { default as Quote } from './Quote'
export { default as NotFound } from './NotFound'
