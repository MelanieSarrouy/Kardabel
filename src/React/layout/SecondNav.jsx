import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  LinkSecondaryStyle,
  LinkSecondaryStyleActive,
  NavIntro
} from '../../styles/layout/secondNav'
import { createLink } from '../../helpers/createLink';


const SecondNav = (props) => {

  const sampleLocation = useLocation()
  const location = sampleLocation.pathname

  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName


  return (
    <NavIntro>
    <ul>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, true, prefixeName, '') ? (
            <LinkSecondaryStyleActive to={'/'+ name}>{element}</LinkSecondaryStyleActive>
          ) : (
            <LinkSecondaryStyle to={createLink(element, name, true, prefixeName, suffixeName)}>
              {element}
            </LinkSecondaryStyle>
          )}
        </li>
      ))}
    </ul>
  </NavIntro>
);
};

export default SecondNav;