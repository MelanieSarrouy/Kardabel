/* IMPORTS */

import React from 'react'
// styles imports
import {
  SectionCoordonnes,
} from '../../../styles/components/page contact/coordonneesKardabel'
// components imports
import Portraits from './Portraits'
import Details from './Details'

// JSX // _________________________________________________________________

/**
 * CoordonnéesKardabel component to display to display the contact details of kardabel on the contact page
 * @name CoordonnéesKardabel
 * @returns {?JSX}
 */

 const CoordonnéesKardabel = () => {
  return (
    <SectionCoordonnes>
      <Portraits />
      <Details />
    </SectionCoordonnes>
  )
}

// EXPORT // ______________________________________________________________

export default CoordonnéesKardabel
