// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// components imports
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Services from './pages/Services'
import Portfolios from './pages/Portfolios'
import GraphismePortfolio from './components/page portfolios/GraphismePortfolio'
import WebPortfolio from './components/page portfolios/WebPortfolio'
import AndroidPortfolio from './components/page portfolios/AndroidPortfolio'
import Android from './components/page services/Android'
import Footer from './layout/Footer'
import Header from './layout/Header'
import Identity from './components/page services/Identity'
import Main from './layout/Main'
import Print from './components/page services/Print'
import Web from './components/page services/Web'
import Contact from './pages/Contact'
import MentionsLegales from './pages/MentionsLegales'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'


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
            <Route path="/" element={<Homepage />} />
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
