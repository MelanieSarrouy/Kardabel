// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'
import Android from './components/Android'
import Footer from './components/Footer'
import Header from './components/Header'
import Identity from './components/Identity'
import Main from './components/Main'
import Print from './components/Print'
import Web from './components/Web'
// import { Main } from '../styles/bases/main'
// components imports
import Homepage from './pages/Homepage'
import NotFound from './pages/NotFound'
import Services from './pages/Services'

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
            <Route path="/portfolios" element={<Services />} />
            <Route path="/cv" element={<Services />} />
            <Route path="/contacts" element={<Services />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Main>
        <Footer />
      </BrowserRouter>
    </>
  )
}
