import React from 'react'
import styled from 'styled-components'
import colors from '../../styles/bases/colors'
import SectionH2IntroMentionsLegal from '../components/pageMentionsLégales/SectionH2IntroMentionsLegal'
import H3TrioTitle from '../layout/H3TrioTitle'

export const SectionsH3 = styled.section`
  padding: 1rem 7%;
  margin: 0 auto;
  @media (max-width: 420px) {
    padding: 1rem 2rem;
  }

  & > div {
    padding: 0.5rem 0;
    & > p,
    & > p > a,
    & > p > span {
      font-size: 1.6rem;
      line-height: 2.3rem;
    }
    & > p {
      padding: .5rem 0;
    }
    & > p > a {
      font-weight: 500;
      color: ${colors.secondary};
    }
  }
`
export const PBold = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
`
const MentionsLegales = () => {
  return (
    <>
      <SectionH2IntroMentionsLegal />
      <SectionsH3>
        <H3TrioTitle title="Editeur"></H3TrioTitle>
        <div>
          <PBold>KARDABEL</PBold>
          <p>Entreprise Individuelle (EI)</p>
        </div>
        <div>
          <PBold>Coordonnées :</PBold>
          <p>
            La Blaquèrerie 12230 La Couvertoirade - France
            <br />
            09 77 61 11 90
            <br />
            contact@kardabel.com
          </p>
        </div>
        <div>
          <PBold>Responsable de la publication : </PBold>
          <p>Mélanie Sarrouy</p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Hébergement"></H3TrioTitle>
        <div>
          <PBold>OVH</PBold>
        </div>
        <div>
          <p>2 rue Kellermann - 59100 Roubaix - France</p>
        </div>
        <div>
          <p>
            <a href="https://www.ovhcloud.com/fr/">www.ovhcloud.com</a>.
          </p>{' '}
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Webmaster"></H3TrioTitle>
        <div>
          <PBold>KARDABEL</PBold>
          <p>www.kardabel.com</p>
        </div>
        <div>
          <PBold>Responsable :</PBold>
          <p>
            Mélanie Sarrouy
            <br />
            La Blaquèrerie 12230 La Couvertoirade - France
            <br />
            09 77 61 11 90
            <br />
            contact@kardabel.com
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Crédits"></H3TrioTitle>
        <div>
          <PBold>Photos :</PBold>
          <ul>
            <li>
              Image de couverture site 'ArgentBank' (page Portfolio-Web) : micheile dot com /
              Unsplash
            </li>
            <li>Image de couverture site 'HRNet' (page Portfolio-Web) : barbaracascao / Pixabay</li>
            <li>
              Image fournie par OpenClassrooms pour le site 'GameOn' (page Portfolio-Web) : Anton /
              Adobe Stock
            </li>
          </ul>
        </div>
        <div>
          <PBold>Illustrations :</PBold>
          <p>...</p>
        </div>
        <div>
          <PBold>Citations :</PBold>
          <p>...</p>
        </div>
      </SectionsH3>

      <SectionsH3>
        <H3TrioTitle title="Propriété intellectuelle et contrefaçons"></H3TrioTitle>
        <div>
          <p>
            <a href="https://kardabel.com"> www.kardabel.com</a> est propriétaire des droits de
            propriété intellectuelle et détient les droits d’usage sur tous les éléments accessibles
            sur le site internet, notamment les textes, images, graphismes, logos, vidéos, icônes et
            sons.
          </p>
          <p>
            Toute reproduction, représentation, modification, publication, adaptation de tout ou
            partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est
            interdite, sauf autorisation écrite préalable de :{' '}
            <a href="https://kardabel.com"> www.kardabel.com </a>
          </p>
          <p>
            Toute exploitation non autorisée du site ou de l’un quelconque des éléments qu’il
            contient sera considérée comme constitutive d’une contrefaçon et poursuivie conformément
            aux dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Conditions générales d’utilisation du site et des services proposés"></H3TrioTitle>
        <div>
          <p>
            Le Site constitue une œuvre de l’esprit protégée par les dispositions du Code de la
            Propriété Intellectuelle et des Réglementations Internationales applicables. Le Client
            ne peut en aucune manière réutiliser, céder ou exploiter pour son propre compte tout ou
            partie des éléments ou travaux du Site.
          </p>
          <p>
            L’utilisation du site
            <a href="https://kardabel.com">https://kardabel.com</a>
            implique l’acceptation pleine et entière des conditions générales d’utilisation ci-après
            décrites. Ces conditions d’utilisation sont susceptibles d’être modifiées ou complétées
            à tout moment, les utilisateurs du site
            <a href="https://kardabel.com">https://kardabel.com</a>
            sont donc invités à les consulter de manière régulière.
          </p>
          <p>
            Ce site internet est normalement accessible à tout moment aux utilisateurs. Une
            interruption pour raison de maintenance technique peut être toutefois décidée par{' '}
            <a href="https://kardabel.com">https://kardabel.com</a>, qui s’efforcera alors de
            communiquer préalablement aux utilisateurs les dates et heures de l’intervention. Le
            site web <a href="https://kardabel.com">https://kardabel.com</a> est mis à jour
            régulièrement par <a href="https://kardabel.com">https://kardabel.com</a> responsable.
            De la même façon, les mentions légales peuvent être modifiées à tout moment : elles
            s’imposent néanmoins à l’utilisateur qui est invité à s’y référer le plus souvent
            possible afin d’en prendre connaissance.
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Description des services fournis"></H3TrioTitle>
        <div>
          <p>
            Le site internet <a href="https://kardabel.com">https://kardabel.com</a> a pour objet de
            fournir une information concernant l’ensemble des activités de la société.{' '}
            <a href="https://kardabel.com">https://kardabel.com</a> s’efforce de fournir sur le site{' '}
            <a href="https://kardabel.com">https://kardabel.com </a> des informations aussi précises
            que possible. Toutefois, il ne pourra être tenu responsable des oublis, des
            inexactitudes et des carences dans la mise à jour, qu’elles soient de son fait ou du
            fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p>
            Toutes les informations indiquées sur le site{' '}
            <a href="https://kardabel.com">https://kardabel.com</a> sont données à titre indicatif,
            et sont susceptibles d’évoluer. Par ailleurs, les renseignements figurant sur le site{' '}
            <a href="https://kardabel.com">https://kardabel.com</a> ne sont pas exhaustifs. Ils sont
            donnés sous réserve de modifications ayant été apportées depuis leur mise en ligne.
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Limitations contractuelles sur les données techniques"></H3TrioTitle>
        <div>
          <p>
            Le site utilise la technologie JavaScript. Le site Internet ne pourra être tenu
            responsable de dommages matériels liés à l’utilisation du site. De plus, l’utilisateur
            du site s’engage à accéder au site en utilisant un matériel récent, ne contenant pas de
            virus et avec un navigateur de dernière génération mis-à-jour Le site{' '}
            <a href="https://kardabel.com"> https://kardabel.com </a> est hébergé chez un
            prestataire sur le territoire de l’Union Européenne conformément aux dispositions du
            Règlement Général sur la Protection des Données (RGPD : n° 2016-679)
          </p>
          <p>
            L’objectif est d’apporter une prestation qui assure le meilleur taux d’accessibilité.
            L’hébergeur assure la continuité de son service 24 Heures sur 24, tous les jours de
            l’année. Il se réserve néanmoins la possibilité d’interrompre le service d’hébergement
            pour les durées les plus courtes possibles notamment à des fins de maintenance,
            d’amélioration de ses infrastructures, de défaillance de ses infrastructures ou si les
            Prestations et Services génèrent un trafic réputé anormal.
          </p>
          <p>
            <a href="https://kardabel.com"> https://kardabel.com </a> et l’hébergeur ne pourront
            être tenus responsables en cas de dysfonctionnement du réseau Internet, des lignes
            téléphoniques ou du matériel informatique et de téléphonie lié notamment à
            l’encombrement du réseau empêchant l’accès au serveur.
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Limitations de responsabilité"></H3TrioTitle>
        <div>
          <p>
            <a href="https://kardabel.com">https://kardabel.com</a> agit en tant qu’éditeur du site.{' '}
            <a href="https://kardabel.com">https://kardabel.com</a> est responsable de la qualité et
            de la véracité du Contenu qu’il publie.
          </p>
          <p>
            <a href="https://kardabel.com">https://kardabel.com</a> ne pourra être tenu responsable
            des dommages directs et indirects causés au matériel de l’utilisateur, lors de l’accès
            au site internet <a href="https://kardabel.com">https://kardabel.com</a>, et résultant
            soit de l’utilisation d’un matériel ne répondant pas aux spécifications indiquées au
            point 4, soit de l’apparition d’un bug ou d’une incompatibilité.
          </p>
          <p>
            <a href="https://kardabel.com">https://kardabel.com</a> ne pourra également être tenu
            responsable des dommages indirects (tels par exemple qu’une perte de marché ou perte
            d’une chance) consécutifs à l’utilisation du site{' '}
            <a href="https://kardabel.com">https://kardabel.com</a>. Des espaces interactifs
            (possibilité de poser des questions dans l’espace contact) sont à la disposition des
            utilisateurs. <a href="https://kardabel.com">https://kardabel.com</a> se réserve le
            droit de supprimer, sans mise en demeure préalable, tout contenu déposé dans cet espace
            qui contreviendrait à la législation applicable en France, en particulier aux
            dispositions relatives à la protection des données. Le cas échéant,{' '}
            <a href="https://kardabel.com">https://kardabel.com</a> se réserve également la
            possibilité de mettre en cause la responsabilité civile et/ou pénale de l’utilisateur,
            notamment en cas de message à caractère raciste, injurieux, diffamant, ou
            pornographique, quel que soit le support utilisé (texte, photographie …).
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Liens hypertextes et cookies"></H3TrioTitle>
        <div>
          <p>
            Le site <a href="https://kardabel.com">https://kardabel.com</a> contient un certain
            nombre de liens hypertextes vers d’autres sites, mis en place avec l’autorisation de{' '}
            <a href="https://kardabel.com">https://kardabel.com</a>. Cependant,{' '}
            <a href="https://kardabel.com"> https://kardabel.com</a> n’a pas la possibilité de
            vérifier le contenu des sites ainsi visités, et n’assumera en conséquence aucune
            responsabilité de ce fait.
          </p>
          <p>
            Sauf si vous décidez de désactiver les cookies, vous acceptez que le site puisse les
            utiliser. Vous pouvez à tout moment désactiver ces cookies et ce gratuitement à partir
            des possibilités de désactivation qui vous sont offertes et rappelées ci-après, sachant
            que cela peut réduire ou empêcher l’accessibilité à tout ou partie des Services proposés
            par le site.
          </p>
          <p>
            Un « cookie » est un petit fichier d’information envoyé sur le navigateur de
            l’Utilisateur et enregistré au sein du terminal de l’Utilisateur (ex : ordinateur,
            smartphone), (ci-après « Cookies »). Ce fichier comprend des informations telles que le
            nom de domaine de l’Utilisateur, le fournisseur d’accès Internet de l’Utilisateur, le
            système d’exploitation de l’Utilisateur, ainsi que la date et l’heure d’accès. Les
            Cookies ne risquent en aucun cas d’endommager le terminal de l’Utilisateur.
          </p>
          <p>
            <a href="https://kardabel.com"> https://kardabel.com</a> est susceptible de traiter les
            informations de l’Utilisateur concernant sa visite du Site, telles que les pages
            consultées, les recherches effectuées. Ces informations permettent à{' '}
            <a href="https://kardabel.com"> https://kardabel.com </a> d’améliorer le contenu du
            Site, de la navigation de l’Utilisateur.
          </p>
          <p>
            Les Cookies facilitant la navigation et/ou la fourniture des services proposés par le
            Site, l’Utilisateur peut configurer son navigateur pour qu’il lui permette de décider
            s’il souhaite ou non les accepter de manière à ce que des Cookies soient enregistrés
            dans le terminal ou, au contraire, qu’ils soient rejetés, soit systématiquement, soit
            selon leur émetteur. L’Utilisateur peut également configurer son logiciel de navigation
            de manière à ce que l’acceptation ou le refus des Cookies lui soient proposés
            ponctuellement, avant qu’un Cookie soit susceptible d’être enregistré dans son terminal.{' '}
            <a href="https://kardabel.com"> https://kardabel.com</a> informe l’Utilisateur que, dans
            ce cas, il se peut que les fonctionnalités de son logiciel de navigation ne soient pas
            toutes disponibles.
          </p>
          <p>
            Si l’Utilisateur refuse l’enregistrement de Cookies dans son terminal ou son navigateur,
            ou si l’Utilisateur supprime ceux qui y sont enregistrés, l’Utilisateur est informé que
            sa navigation et son expérience sur le Site peuvent être limitées. Cela pourrait
            également être le cas lorsque, <a href="https://kardabel.com"> https://kardabel.com</a>{' '}
            ou l’un de ses prestataires ne peut pas reconnaître, à des fins de compatibilité
            technique, le type de navigateur utilisé par le terminal, les paramètres de langue et
            d’affichage ou le pays depuis lequel le terminal semble connecté à Internet.
          </p>
          <p>
            Le cas échéant, <a href="https://kardabel.com"> https://kardabel.com </a> décline toute
            responsabilité pour les conséquences liées au fonctionnement dégradé du Site et des
            services éventuellement proposés par{' '}
            <a href="https://kardabel.com"> https://kardabel.com</a>, résultant (i) du refus de
            Cookies par l’Utilisateur (ii) de l’impossibilité pour{' '}
            <a href="https://kardabel.com"> https://kardabel.com</a> d’enregistrer ou de consulter
            les Cookies nécessaires à leur fonctionnement du fait du choix de l’Utilisateur. Pour la
            gestion des Cookies et des choix de l’Utilisateur, la configuration de chaque navigateur
            est différente. Elle est décrite dans le menu d’aide du navigateur, qui permettra de
            savoir de quelle manière l’Utilisateur peut modifier ses souhaits en matière de Cookies.
          </p>
          <p>
            À tout moment, l’Utilisateur peut faire le choix d’exprimer et de modifier ses souhaits
            en matière de Cookies. <a href="https://kardabel.com"> https://kardabel.com </a> pourra
            en outre faire appel aux services de prestataires externes pour l’aider à recueillir et
            traiter les informations décrites dans cette section.
          </p>
          <p>
            Enfin, en cliquant sur les icônes dédiées aux réseaux sociaux Twitter, Facebook,
            Linkedin et Google Plus figurant sur le Site de{' '}
            <a href="https://kardabel.com"> https://kardabel.com </a> ou dans son application mobile
            et si l’Utilisateur a accepté le dépôt de cookies en poursuivant sa navigation sur le
            Site Internet ou l’application mobile de{' '}
            <a href="https://kardabel.com"> https://kardabel.com </a>, Twitter, Facebook, Linkedin
            et Google Plus peuvent également déposer des cookies sur vos terminaux (ordinateur,
            tablette, téléphone portable).
          </p>
          <p>
            Ces types de cookies ne sont déposés sur vos terminaux qu’à condition que vous y
            consentiez, en continuant votre navigation sur le Site Internet ou l’application mobile
            de <a href="https://kardabel.com"> https://kardabel.com </a>. À tout moment,
            l’Utilisateur peut néanmoins revenir sur son consentement à ce que{' '}
            <a href="https://kardabel.com"> https://kardabel.com </a> dépose ce type de cookies.
          </p>
        </div>
      </SectionsH3>
      <SectionsH3>
        <H3TrioTitle title="Droit applicable et attribution de juridiction"></H3TrioTitle>
        <div>
          <p>
            Tout litige en relation avec l’utilisation du site{' '}
            <a href="https://kardabel.com"> www.kardabel.com </a> est soumis au droit français. En
            dehors des cas où la loi ne le permet pas, il est fait attribution exclusive de
            juridiction aux tribunaux compétents de <span>Rodez</span>
          </p>
        </div>
      </SectionsH3>
    </>
  )
}

export default MentionsLegales
