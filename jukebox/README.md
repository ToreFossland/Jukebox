# Prosjekt 2 - Gruppe 12


Vi har implementert prosjektet ved bruk av Typescript og Node.js. Programmet kjøres ved å gjøre følgende:
Ved bruk av kommandolinjen går du inn i mappen Jukebox og kjør npm start.
For å kjøre testene skriver du npm test.

## React

Løsningen vår i React er hovedsakelig basert på funksjonelle komponenter. Vi startet med en klassebasert struktur men dette førte til flere problemstillinger. For eksempel bruker vi data fra Context API’et i stor grad på mange av komponentene våre. Det å bruke useContext og hooks til å distribuere dataene viste seg å være en veldig god struktur. Mtp. antallet komponenter som var avhengig av Context førte dette til at resten av prosjektet ble mye lettere.
Vi hadde også bruk for at API-kallet til MusixMatch skulle bli gjort flere ganger. Dette fungerte mye bedre med en “Effect Hook” som “lytter” etter et sangbytte, sammenlignet med de tradisjonelle “life cycle metodene” (ComponentDidMount osv). 
I tillegg ble koden generelt mer kompakt og oversiktlig med denne typen struktur.

Vi har implementert prosjektet med typescript som programmeringsspråk. Vi har tilstrebet å angi spesifikke datatyper til alle variabler og funksjoner. Det er dog en del tilfeller der typen “any” ble det mest hensiktsmessige.

Nettsiden vår er en interaktiv musikkspiller. Dataene knyttet til den aktive sangen er høyst relevant for mange av komponentene våre, så det å bruke context API’et hyppig ble et fornuftig valg. Med Context unngår man å sende props på kryss og tvers av komponentene, og kan heller sette noen felles globale variabler som man har bruk for flere steder. Det vi bestemte oss for å dele globalt var en liste med alle sangobjektene, samt data om den aktive sangen.

## AJAX

Vi valgte å bruke tredjepartsbiblioteket axios til den dynamiske lastingen av tekst med AJAX. Dette gjorde vi fordi at axios tilbyr noen funksjoner som vi anså som gode tillegg til prosjektet. Man slipper for eksempel å sende dataene man får fra http forespørselen gjennom .json() metoden for å få et håndterbart objekt.  Axios er også god på feilhåndtering. Fetch() vil kunne kjøre .then() metoden sin selv om man får en error (404 eller 500), mens axios vil alltid gå rett til .catch(). I tillegg slipper man å gjøre om svaret til strings, dette gjør axios som standard.

## HTML Web Storage

Vi tok i bruk sessionStorage for å lagre informasjon om fargevalg på dancer-komponentene og hvilken av dem som er valgt.(app.tsx og dancers komponentene)
Local storage har blitt brukt for å kunne gjenoppta den valgte sangen der du stoppet sist. Dette gjør vi ved å lagre all informasjonen om nåværende sang jevnlig(app.tsx, player.tsx og songs.tsx).
Nettsiden har også en Dark/Light-mode svitsj nederst på siden som lar brukeren velge om de vil ha et mørkt eller lyst tema på nettsiden. Ved bruk av local storage så vil valget lagres, og lastes inn igjen automatisk ved nytt besøk av nettsiden.

## SVG Animasjoner

Animasjonene er blitt laget med SVG ettersom dette gir bedre mulighet for skalering. Valget om SVG ble også tatt ut i fra våre tidligere erfaringer. 
SVG animasjonene er hentet fra undraw.co, og har blitt redigert i figma. Vi har lagt til interaktivitet og animasjonen ved bruk av keyframes. Brukeren kan velge selv hvilken figur som skal vises øverst på skjermen, ved å trykke på bildene til hver av de figurene. Det er så interaktivitet lagt til i hver figur, enten via hover-effect eller onclick.

## Props og States

Med hensyn til kravet om bruk av props og states har vi implementert valg av fargetema og svg-animasjoner. Eksempelvis kaller vi på en funksjon i app.tsx via footer ved at den arves som props(child to parent). De forskjellige komponentene som skal endre farge ved temabytte mottar derfor bakgrunnsfarge som sine props(parent to child). Det hadde vært mer hensiktsmessig å bruke context-apiet til dette, men vi valgte å løse noen slike utfordringer ved bruk av states, props og arving for å vise at vi også behersker denne typen funksjonalitet fra React-biblioteket. 

## Bruk av Git, koding

Git ble brukt under hele arbeidet med prosjektet. Vi delte arbeidsoppgaver mellom oss jobbet i forskjellige branches med hvert enkelt problem. Det ble på forhånd meddelt at vi bare skulle pushe til master dersom dette ikke påvirket arbeidsflyten til de andre på gruppen. Ellers fikk hver enkelt fritt velge hvordan de ville jobbe mot git. Dessverre var vi litt sent ute med å få med oss at vi skulle registrere issues og linke commits til disse. Vi begynte derfor å ta dette i bruk litt senere i prosjektet. Vi mener likevel at dette ikke har påvirket læringsutbytte mht dette punktet i læringsmålene. Etter at denne praksisen ble tatt i bruk ble hvert enkelt issue linket til hver commit og lukket når de ble fullført.

## Responsive Web Design

For å gjøre nettsiden responsiv har vi brukt Flexbox. Istedenfor piksler har vi ofte brukt %, vh eller vw som skalerer bedre i forhold til størrelsen på skjermvinduet. 
Vi har deklarert viewport som følgende:
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>

Vi har brukt media queries som endrer oppsettet av komponentene basert på vindusstørrelse i kombinasjon med skalering. Prosjektet har to css-filer(layout.css og dancers-design.css). Underveis har vi erfart at det hadde blitt mer ryddig dersom vi hadde hatt en css-fil for hver komponent i tillegg til en som var generell for hele dokumentet.

## Brukergrensesnitt testing

Siden har blitt testet på safari, chrome og firefox. Den har også blitt testet med forskjellige skjermstørrelser ved bruk av chrome sitt utviklerverktøy der vi kunne simulere forskjellige skjermstørrelser og enheter. Siden fungerer tilfredsstillende på alle nettlesere, men kunne blitt optimalisert ytterligere i firefox og chrome på windows. Her ble default scrollbaren til lyrics litt stor.

## Snapshot testing

Vi har utført Jest snapshot testing kontinuerlig gjennom utviklingsprosessen. Dette har vi gjort for å passe på at brukergrensesnittet ikke endrer seg uventet. Vi har en helhetlig test for selve applikasjonskomponenten, som feiler hvis den forrige renderen av komponenten ikke er lik den nåværende. I tillegg har vi en dedikert “snapshot test” tilhørende hver enkelt komponent, for å sikre oss mot at ny kode ikke har uheldige effekter på andre komponenter.


## Kilder

https://reactjs.org/docs/context.html
https://fettblog.eu/typescript-react/context/
https://cors-anywhere.herokuapp.com/
https://reactjs.org/docs/getting-started.html
https://www.npmjs.com/package/axios
https://www.npmjs.com/get-npm
https://www.youtube.com/watch?v=DLX62G4lc44
https://jestjs.io/docs/en/snapshot-testing
https://reactjs.org/docs/components-and-props.html
https://www.codecademy.com/ 
https://www.youtube.com/watch?v=gWai7fYp9PY (@keyframes tutorial)
https://www.typescriptlang.org/docs
https://www.w3schools.com/JSREF/dom_obj_audio.asp
https://css-tricks.com/snippets/css/a-guide-to-flexbox/
Funnet hjelp til feilmeldinger og bugs hos velkjente forum som stackOverflow o.l.
