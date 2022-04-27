import React from 'react'
import H4Title from '../../layout/H4Title'
import { datasIdentity } from '../../../datas/datasIdentity'
import {
  DivWhyContent,
  DivWhyTextContent,
  PWhyText,
} from '../../../styles/components/4pagesService/whyContent'
import { DivH4Content, DivServiceContent, ImgServicesCards, PLexiqueWord, UlLexique } from '../../../styles/components/4pagesService/servicesComponent'


const services = datasIdentity.subtitles.services.services

const ServicesComponent = (props) => {
  return (
    <section>
      <H4Title id={props.id} title={props.title} />
      <DivH4Content>
        {services.map((element, index) => (
          <div key={index}>
            <DivWhyContent circle={props.circle} side={element.circleSide}>
              <DivWhyTextContent color={props.color}>
                <DivServiceContent>
                  <PWhyText>{element.text}</PWhyText>
                  <ImgServicesCards src={element.illustration} alt="illustration" />
                </DivServiceContent>
                  {Array.isArray(element.lexicon) ? (
                    <UlLexique>
                      {element.lexicon.map((el, index) => (
                        <li key={index}>
                          <PLexiqueWord>{el.word}</PLexiqueWord>
                          <p>{el.definition}</p>
                        </li>
                      ))}
                    </UlLexique>
                  ) : (
                    ''
                  )}
              </DivWhyTextContent>
            </DivWhyContent>
          </div>
        ))}
      </DivH4Content>
    </section>
  )
}

export default ServicesComponent
