import React from 'react';
import { useLocation } from 'react-router-dom';
import { createLink } from '../../helpers/createLink';
import { SubNavLinkStyle, SubNavLinkStyleActive } from '../../styles/layout/subMenuDesktop';
import { UlSubMenuMobile } from '../../styles/layout/subMenuMobile';


const SubMenuMobile = (props) => {
  const sampleLocation = useLocation()
  const location = sampleLocation.pathname
  const links = props.links
  const name = props.name
  const prefixeName = props.prefixeName
  const suffixeName = props.suffixeName

  return (
    <UlSubMenuMobile>
      {links.map((element, index) => (
        <li key={index}>
          {location === createLink(element, name, true, prefixeName, '') ? (
            <SubNavLinkStyleActive to={createLink(element, name, false, '', '')}>{element}</SubNavLinkStyleActive>
          ) : (
            <SubNavLinkStyle to={createLink(element, name, true, prefixeName, suffixeName)}>
              {element}
            </SubNavLinkStyle>
          )}
        </li>
      ))}
    </UlSubMenuMobile>
  )
};

export default SubMenuMobile;