// IMPORTS // ______________________________________________________________

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// styles imports
import { GlobalStyle } from '../styles/bases/globalStyle'
// import { Main } from '../styles/bases/main'
// components imports
import Homepage from './pages/Homepage'

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
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
      </BrowserRouter>
    </>
  )
}

