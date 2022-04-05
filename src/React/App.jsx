// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
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
            <Route path="/" element={<Homepage />} />
            <Route path="/services" element={<Services />} />
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
