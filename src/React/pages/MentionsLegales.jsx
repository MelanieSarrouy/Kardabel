/* IMPORTS */

import React from 'react'
// components imports
import H2Intro from '../layout/H2Intro'
// styles imports
import {
  ALinksMention,
  DivMentionsContainer,
  H3MentionsTitle,
  LiCredits,
  PBold,
  PTxt,
  SectionsH3,
} from '../../styles/components/page mentions/mentions'

// JSX // _________________________________________________________________

/**
 * MentionsLegales component to display website's Mentions Legales page
 * @name MentionsLegales
 * @returns {?JSX}
 */

 const MentionsLegales = () => {
  const title = 'Mentions Légales'
  const content =
    'Merci de lire avec attention les différentes modalités d’utilisation du présent site avant d’y parcourir ses pages. En vous connectant sur ce site, vous acceptez, sans réserves, les présentes modalités. \n Aussi, conformément à l’article n°6 de la Loi n°2004-575 du 21 Juin 2004 pour la confiance dans l’économie numérique, les responsables du présent site internet www.kardabel.com sont :'

  return (
    <>
      <H2Intro id="mentions-legales" title={title} content={content}></H2Intro>
      <SectionsH3>
        <H3MentionsTitle>Editeur</H3MentionsTitle>
        <DivMentionsContainer>
          <PBold>KARDABEL</PBold>
          <PTxt>
            Entreprise Individuelle (EI)
            <br />
            N° SIRET : 794 339 903 00021
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PBold>Coordonnées :</PBold>
          <PTxt>
            La Blaquèrerie 12230 La Couvertoirade - France
            <br />
            09 77 61 11 90
            <br />
            contact@kardabel.com
            <br />
            <ALinksMention href="http://kardabel.com">www.kardabel.com</ALinksMention>
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PBold>Responsable de la publication : </PBold>
          <PTxt>Mélanie Sarrouy</PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Hebergement */}
      <SectionsH3>
        <H3MentionsTitle>Hébergement</H3MentionsTitle>
        <DivMentionsContainer>
          <PBold>OVH</PBold>
          <PTxt>
            2 rue Kellermann - 59100 Roubaix - France
            <br />
            <ALinksMention href="https://www.ovhcloud.com/fr/">www.ovhcloud.com</ALinksMention>
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Webmaster */}
      <SectionsH3>
        <H3MentionsTitle>Développement</H3MentionsTitle>
        <DivMentionsContainer>
          <PBold>KARDABEL</PBold>
          <PTxt>www.kardabel.com</PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PBold>Responsable :</PBold>
          <PTxt>
            Mélanie Sarrouy
            <br />
            La Blaquèrerie 12230 La Couvertoirade - France
            <br />
            09 77 61 11 90
            <br />
            contact@kardabel.com
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Crédits */}
      <SectionsH3>
        <H3MentionsTitle>Crédits</H3MentionsTitle>
        <DivMentionsContainer>
          <PBold>Photos :</PBold>
          <ul>
            <LiCredits>
              Page portfolio-web - site 'Kardabel' : Photo by Sharon Pittaway on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'L'Abet'Mobile 34' : La Ferme du Contrevent
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'HRNet' : Photo by barbaracascao on Pixabay
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'ArgentBank' : Photo by micheile dot com on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'SportSee' : Photo by Clem Onojeghuo on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'Kasa' : Photo by Kalen Emsley on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'Les Petits Plats' : Photo by Chad Montano on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'FishEye' : Photo by Joanna Malinowska on freestocks
            </LiCredits>
            <LiCredits>Page portfolio-web - site 'GameOn' : Anton / Adobe Stock</LiCredits>
            <LiCredits>
              Page portfolio-web - site 'Ohmyfood' : Photo by Marissa Grootes on Unsplash
            </LiCredits>
            <LiCredits>
              Page portfolio-web - site 'Reservia' : Photo by Annie Spratt on Unsplash
            </LiCredits>
          </ul>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PBold>Illustrations :</PBold>
          <ul>
            <LiCredits>
              Page services/identite/prestations : Image par Loke_Artemis de Pixabay
            </LiCredits>
            <LiCredits>
              Page services/web/prestations : Image par Image par Rano Purnomo de Pixabay
            </LiCredits>
            <LiCredits>Page services/android/prestations : Image de freepng</LiCredits>
          </ul>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Conditions d’utilisation*/}
      <SectionsH3>
        <H3MentionsTitle>Conditions d’utilisation</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la
            Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client
            ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou
            partie des éléments ou travaux du Site.
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            L’utilisation du site{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> implique
            l’acceptation pleine et entière des conditions générales d’utilisation ci-après
            décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées
            à tout moment, les utilisateurs du site{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> sont donc
            invités à les consulter de manière régulière.
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            Ce site internet est normalement accessible à tout moment aux utilisateurs. Une
            interruption pour raison de maintenance technique peut être toutefois décidée par{' '}
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention>, qui s’efforcera
            alors de communiquer préalablement aux utilisateurs les dates et heures de
            l’intervention. Le site web{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> est mis à
            jour régulièrement par{' '}
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> responsable. De la
            même façon, les mentions légales peuvent être modifiées à tout moment : elles s’imposent
            néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent possible afin
            d’en prendre connaissance.
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            Ce site (<ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention>
            ) est proposé en différents langages web (HTML5, Javascript, CSS3, etc…) pour un
            meilleur confort d'utilisation et un graphisme plus agréable, nous vous recommandons de
            recourir à des navigateurs modernes comme Google Chrome, Firefox, MicrosoftEdge ou
            Safari. Les mentions légales ont été générées sur le site{' '}
            <ALinksMention href="http://www.generateur-de-mentions-legales.com">
              Générateur de mentions légales
            </ALinksMention>
            , offert par{' '}
            <ALinksMention title="imprimerie paris, imprimeur paris" href="http://welye.com">
              Welye
            </ALinksMention>
            .
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> met en œuvre tous
            les moyens dont elle dispose, pour assurer une information fiable et une mise à jour
            fiable de ses sites internet. Toutefois, des erreurs ou omissions peuvent survenir.
            L'internaute devra donc s'assurer de l'exactitude des informations auprès de{' '}
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> et signaler toutes
            modifications du site qu'il jugerait utile.{' '}
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> n'est en aucun cas
            responsable de l'utilisation faite de ces informations, et de tout préjudice direct ou
            indirect pouvant en découler.
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Cookies*/}
      <SectionsH3>
        <H3MentionsTitle>Cookies</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Le site <ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention>{' '}
            peut-être amené à vous demander l’acceptation des cookies pour des besoins de
            statistiques et d'affichage. Un cookies est une information déposée sur votre disque dur
            par le serveur du site que vous visitez. Il contient plusieurs données qui sont stockées
            sur votre ordinateur dans un simple fichier texte auquel un serveur accède pour lire et
            enregistrer des informations . Certaines parties de ce site ne peuvent être
            fonctionnelles sans l’acceptation de cookies.{' '}
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            Les articles de ce site peuvent inclure du contenu intégré (par exemple des vidéos, des
            images, des articles, etc.). Le contenu intégré provenant d’autres sites web se comporte
            exactement de la même manière que si le visiteur avait visité l’autre site web.
          </PTxt>
          <PTxt>
            Ces sites web peuvent recueillir des données vous concernant, utiliser des cookies,
            intégrer un suivi supplémentaire par des tiers et surveiller votre interaction avec ce
            contenu intégré, y compris le suivi de votre interaction avec le contenu intégré si vous
            avez un compte et êtes connecté à ce site web.
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Liens hypertextes*/}
      <SectionsH3>
        <H3MentionsTitle>Liens hypertextes</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Les sites internet de{' '}
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention> peuvent offrir
            des liens vers d’autres sites internet ou d’autres ressources disponibles sur Internet.{' '}
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention> ne dispose
            d'aucun moyen pour contrôler les sites en connexion avec ses sites internet.
          </PTxt>
          <PTxt>
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention> ne répond pas de
            la disponibilité de tels sites et sources externes, ni ne la garantit. Elle ne peut être
            tenue pour responsable de tout dommage, de quelque nature que ce soit, résultant du
            contenu de ces sites ou sources externes, et notamment des informations, produits ou
            services qu’ils proposent, ou de tout usage qui peut être fait de ces éléments. Les
            risques liés à cette utilisation incombent pleinement à l'internaute, qui doit se
            conformer à leurs conditions d'utilisation.
          </PTxt>
        </DivMentionsContainer>
        <DivMentionsContainer>
          <PTxt>
            Les utilisateurs, les abonnés et les visiteurs des sites internet de ne peuvent mettre
            en place un hyperlien en direction de ce site sans l'autorisation expresse et préalable
            de <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention>.
          </PTxt>
          <PTxt>
            Dans l'hypothèse où un utilisateur ou visiteur souhaiterait mettre en place un hyperlien
            en direction d’un des sites internet de{' '}
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention>, il lui
            appartiendra d'adresser un email accessible sur le site afin de formuler sa demande de
            mise en place d'un hyperlien.{' '}
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention> se réserve le
            droit d’accepter ou de refuser un hyperlien sans avoir à en justifier sa décision.{' '}
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Services fournis */}
      <SectionsH3>
        <H3MentionsTitle>Services fournis</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            L'ensemble des activités de la société ainsi que ses informations sont présentés sur
            notre site{' '}
            <ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention>.<br />
            <ALinksMention href="https://www.kardabel.com"> Kardabel</ALinksMention> s’efforce de
            fournir sur le site{' '}
            <ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention> des
            informations aussi précises que possible.{' '}
          </PTxt>
          <PTxt>
            les renseignements figurant sur le site{' '}
            <ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention> ne sont
            pas exhaustifs et les photos non contractuelles. Ils sont donnés sous réserve de
            modifications ayant été apportées depuis leur mise en ligne. Par ailleurs, tous les
            informations indiquées sur le site{' '}
            <ALinksMention href="https://www.kardabel.com">www.kardabel.com</ALinksMention> sont
            données à titre indicatif, et sont susceptibles de changer ou d’évoluer sans préavis.{' '}
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Limitations contractuelles sur les données */}
      <SectionsH3>
        <H3MentionsTitle>Limitations sur les données</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Les informations contenues sur ce site sont aussi précises que possible et le site remis
            à jour à différentes périodes de l’année, mais peut toutefois contenir des inexactitudes
            ou des omissions. Si vous constatez une lacune, erreur ou ce qui parait être un
            dysfonctionnement, merci de bien vouloir le signaler par email, à l’adresse
            contact@kardabel.com, en décrivant le problème de la manière la plus précise possible
            (page posant problème, type d’ordinateur et de navigateur utilisé, …).
          </PTxt>
          <PTxt>
            Si vous téléchargez des images sur le site, vous devez éviter de télécharger des images
            contenant des données de localisation intégrées (GPS EXIF). Les visiteurs du site Web
            peuvent télécharger et extraire toutes les données de localisation des images du site.{' '}
          </PTxt>
          <PTxt>
            Tout contenu téléchargé se fait aux risques et périls de l'utilisateur et sous sa seule
            responsabilité. En conséquence,{' '}
            <ALinksMention href="https://www.kardabel.com">Kardabel</ALinksMention> ne saurait être
            tenu responsable d'un quelconque dommage subi par l'ordinateur de l'utilisateur ou d'une
            quelconque perte de données consécutives au téléchargement. De plus, l’utilisateur du
            site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de
            virus et avec un navigateur de dernière génération mis-à-jour.
          </PTxt>
          <PTxt>
            Les liens hypertextes mis en place dans le cadre du présent site internet en direction
            d'autres ressources présentes sur le réseau Internet ne sauraient engager la
            responsabilité de Kardabel.{' '}
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Limitations de responsabilité */}
      <SectionsH3>
        <H3MentionsTitle>Limitations de responsabilité</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> agit en tant
            qu’éditeur du site. <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention>{' '}
            est responsable de la qualité et de la véracité du contenu qu’il publie.
          </PTxt>
          <PTxt>
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> ne pourra être tenu
            responsable des dommages directs et indirects causés au matériel de l’utilisateur, lors
            de l’accès au site internet{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> et résultant
            soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées, soit
            de l’apparition d’un bug ou d’une incompatibilité.
          </PTxt>
          <PTxt>
            <ALinksMention href="https://kardabel.com">Kardabel</ALinksMention> ne pourra également
            être tenu responsable des dommages indirects (tels par exemple qu’une perte de marché ou
            perte d’une chance) consécutifs à l’utilisation du site{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention>. Des espaces
            interactifs (possibilité de poser des questions dans l’espace contact) sont à la
            disposition des utilisateurs.{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> se réserve
            le droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet
            espace qui contreviendrait à la législation applicable en France, en particulier aux
            dispositions relatives à la protection des données. Le cas échéant,{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> se réserve
            également la possibilité de mettre en cause la responsabilité civile et/ou pénale de
            l’utilisateur, notamment en cas de message à caractère raciste, injurieux, diffamant, ou
            pornographique, quel que soit le support utilisé (texte, photographie …).
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Propriété intellectuelle et contrefaçons */}
      <SectionsH3>
        <H3MentionsTitle>Propriété intellectuelle</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Tout le contenu du présent sur le site{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention>, incluant,
            de façon non limitative, les graphismes, images, textes, vidéos, animations, sons,
            logos, gifs et icônes ainsi que leur mise en forme sont la propriété exclusive de la
            société à l'exception des marques, logos ou contenus appartenant à d'autres sociétés
            partenaires ou auteurs.{' '}
          </PTxt>
          <PTxt>
            Toute reproduction, distribution, modification, adaptation, retransmission ou
            publication, même partielle, de ces différents éléments est strictement interdite sans
            l'accord exprès par écrit de Kardabel. Cette représentation ou reproduction, par quelque
            procédé que ce soit, constitue une contrefaçon sanctionnée par les articles L.335-2 et
            suivants du Code de la propriété intellectuelle. Le non-respect de cette interdiction
            constitue une contrefaçon pouvant engager la responsabilité civile et pénale du
            contrefacteur. En outre, les propriétaires des Contenus copiés pourraient intenter une
            action en justice à votre encontre.{' '}
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Déclaration à la CNIL :  */}
      <SectionsH3>
        <H3MentionsTitle>CNIL</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Conformément à la loi 78-17 du 6 janvier 1978 (modifiée par la loi 2004-801 du 6 août
            2004 relative à la protection des personnes physiques à l'égard des traitements de
            données à caractère personnel) relative à l'informatique, aux fichiers et aux libertés,
            ce site n'a pas fait l'objet d'une déclaration auprès de la Commission nationale de
            l'informatique et des libertés (
            <ALinksMention href="https://www.cnil.fr/">www.cnil.fr</ALinksMention>).
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Litiges */}
      <SectionsH3>
        <H3MentionsTitle>Litiges</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            Les présentes conditions du site{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention> sont régies
            par les lois françaises et toute contestation ou litiges qui pourraient naître de
            l'interprétation ou de l'exécution de celles-ci seront de la compétence exclusive des
            tribunaux dont dépend le siège social de la société. La langue de référence, pour le
            règlement de contentieux éventuels, est le français.
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
      {/* Données personnelles */}
      <SectionsH3>
        <H3MentionsTitle>Données personnelles</H3MentionsTitle>
        <DivMentionsContainer>
          <PTxt>
            De manière générale, vous n’êtes pas tenu de nous communiquer vos données personnelles
            lorsque vous visitez notre site Internet{' '}
            <ALinksMention href="https://kardabel.com">www.kardabel.com</ALinksMention>.
          </PTxt>
          <PTxt>
            Cependant, ce principe comporte certaines exceptions. En effet, pour certains services
            proposés par notre site, vous pouvez être amenés à nous communiquer certaines données
            telles que : votre nom, votre fonction, le nom de votre société, votre adresse
            électronique, et votre numéro de téléphone. Tel est le cas lorsque vous remplissez le
            formulaire qui vous est proposé en ligne, dans la rubrique « contact ». Dans tous les
            cas, vous pouvez refuser de fournir vos données personnelles. Dans ce cas, vous ne
            pourrez pas utiliser les services du site, notamment celui de solliciter des
            renseignements sur notre société, ou de recevoir les lettres d’information.
          </PTxt>
          <PTxt>
            Enfin, nous pouvons collecter de manière automatique certaines informations vous
            concernant lors d’une simple navigation sur notre site Internet, notamment : des
            informations concernant l’utilisation de notre site, comme les zones que vous visitez et
            les services auxquels vous accédez, votre adresse IP, le type de votre navigateur, vos
            temps d'accès. De telles informations sont utilisées exclusivement à des fins de
            statistiques internes, de manière à améliorer la qualité des services qui vous sont
            proposés. Les bases de données sont protégées par les dispositions de la loi du 1er
            juillet 1998 transposant la directive 96/9 du 11 mars 1996 relative à la protection
            juridique des bases de données.{' '}
          </PTxt>
        </DivMentionsContainer>
      </SectionsH3>
    </>
  )
}
// EXPORT // ______________________________________________________________

export default MentionsLegales
