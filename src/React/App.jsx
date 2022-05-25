// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'
import Android from './components/4pagesService/Android'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Identity from './components/4pagesService/Identity'
import Main from './layout/Main'
import Print from './components/4pagesService/Print'
import Web from './components/4pagesService/Web'
// components imports
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import Portfolios from './pages/Portfolios'
import GraphismePortfolio from './components/3pagesPortfolio/GraphismePortfolio'
import WebPortfolio from './components/3pagesPortfolio/WebPortfolio'
import AndroidPortfolio from './components/3pagesPortfolio/AndroidPortfolio'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
// JSX // _________________________________________________________________

/**
 * App's component to manage various routes
 * and display corresponding pages components
 * @name App
 * @returns {?JSX}
 */

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Header />
        <Main>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />}>
              <Route path="identite" element={<Identity />} />
              <Route path="print" element={<Print />} />
              <Route path="web" element={<Web />} />
              <Route path="android" element={<Android />} />
            </Route>
            <Route path="/portfolios" element={<Portfolios />}>
              <Route path="portfolio-graphisme" element={<GraphismePortfolio />} />
              <Route path="portfolio-web" element={<WebPortfolio />} />
              <Route path="portfolio-android" element={<AndroidPortfolio />} />
            </Route>
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
