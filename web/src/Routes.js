// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/itchy" page={ItchyPage} name="itchy" />
      <Route path="/redness" page={RednessPage} name="redness" />
      <Route path="/" page={CoverpagePage} name="coverpage" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
