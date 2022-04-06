import React from 'react'
import {
  H2Style,
  SectionIntro,
  SVGTrio,
  TextIntro,
  Title,
} from '../../styles/components/sectionIntroAgence'
import trioDore from '../../assets/trio-dore.svg'
import { Outlet } from 'react-router-dom'
import { NavServicesStyle } from '../../styles/pages/services'
import { LinkContacts } from '../../styles/components/hero'

const Services = () => {
  return (
    <div>
      <SectionIntro>
        <Title>
          <SVGTrio src={trioDore} alt="deco" />
          <H2Style>Services</H2Style>
        </Title>
        <TextIntro>
          Pour répondre au mieux à vos besoins en communiction et visibilité, nous vous propsons un
          ensemble de services dans le domaine du Design Graphique et du Développement.
        </TextIntro>
        <NavServicesStyle>
          <ul>
            <li>
              <LinkContacts
                to="/services/identite"
                className={({ isActive }) => (isActive ? 'nav2active' : 'nav2inactive')}
              >
                Identité
              </LinkContacts>
            </li>
            <li>
              <LinkContacts
                to="/services/print"
                className={({ isActive }) => (isActive ? 'nav2active' : 'nav2inactive')}
              >
                Print
              </LinkContacts>
            </li>
            <li>
              <LinkContacts
                to="/services/web"
                className={({ isActive }) => (isActive ? 'nav2active' : 'nav2inactive')}
              >
                Web
              </LinkContacts>
            </li>
            <li>
              <LinkContacts
                to="/services/android"
                className={({ isActive }) => (isActive ? 'nav2active' : 'nav2inactive')}
              >
                Android
              </LinkContacts>
            </li>
          </ul>
        </NavServicesStyle>
      </SectionIntro>
      <Outlet />
    </div>
  )
}

export default Services
