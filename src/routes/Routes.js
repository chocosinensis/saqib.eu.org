import { Switch, Route } from 'react-router-dom'

import { Home, Articles, ArticleDetails, Projects, ProjectDetails, Quran, Surah, Quote, NotFound } from './'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={Home} />

    <Route exact path='/articles' component={Articles} />
    <Route path='/articles/:slug' component={ArticleDetails} />

    <Route exact path='/projects' component={Projects} />
    <Route path='/projects/:name' component={ProjectDetails} />

    <Route exact path='/quran' component={Quran} />
    <Route path='/quran/:surah' component={Surah} />

    <Route path='/quote' component={Quote} />

    <Route path='*' component={NotFound} />
  </Switch>
)

export default Routes
