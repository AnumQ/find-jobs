# Frontend utvikler oppgave

## Installasjon

```shellscript
npm i
```

## Utvikling lokalt

Kjør utviklingsserver ved å kjøre kommando:

```shellscript
npm run dev
```

## Tests

### Instruksjoner for å kjøre tester

Det er laget minst to tester, etter kravet i oppgaven. Den ene testen tester ut alle lenkene i meny-en.

1. Åpne testpakken ved å kjøre

```sh
npx cypress open
```

2. Klikk på `E2E Testing`

3. Velg en nettleser og klikk `Start E2E Testing`. Et nytt nettleservindu åpnes.

4. Velg `Specs` fra sidepanel. En liste over tester vises i hovedinnholdet.

5. Velg en test, for eksempel `navigation.cy.ts`. Testen kjøres automatisk.

## Funksjonalitet

1. Listevisning
   Applikasjonen viser en liste med jobbutlysninger.

2. Detaljevisning
   Klikk på et element i listen, fører brukeren til en detaljert visning av det valgte elementet.

3. Navigasjon
   Brukeren kan navigere til forskjellige sider ved å klikke på lenker i navigasjonen.

4. Integrasjon med API
   Applikasjonen er integrert med et eksternt API. Dette API-et har en maksimal grense for antall tillatte forespørsler på ubetalt abonnement. Av den grunn er standard konfigurert til å bruke test data for å ikke overskride denne grensen.

For å hente data fra API-et, aktiver Use live data-bryteren på forsiden. Applikasjonen viser hvor mange tillatte forespørsler som gjenstår. Hvis du går tom for forespørsler, vennligst kontakt Anum.

5. Natt modus
   Brukeren kan veksle mellom dag- og nattmodus ved å klikke på ikonet i navigasjonsmeny-en.

6. Støtte for mobile flater
   Applikasjonen støtter alle flater. Mer informasjon om dette finner du lenger ned.

## Dokumentasjon på valg av API

Jobbutlysninger dukker opp på ulike plattformer og blir utfylt løpende. Det er derfor viktig å hente data fra API som har denne oppdateringen uten at vi trenger å oppdatere frontend applikasjonen på ny hver gang dataen endrer seg.

Til denne oppgaven har jeg valgt å bruke [JSearch API ](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) fra Rapid API.

JSearch av OpenWeb Ninja tilbyr raske og pålitelige jobbsøk ved å samle inn den nyeste jobbinformasjonen og lønnsdataene fra Google for Jobs i sanntid. Den dekker et bredt spekter av store og mindre jobbsider som LinkedIn, Indeed og Glassdoor. Med over 30 datapunkter per jobb og avanserte søke-, spørre- og filtreringsmuligheter, står JSearch frem som det mest omfattende og vedlikeholdte jobb-APIet tilgjengelig, designet for å gi brukere tilgang til en rikholdig samling av jobbmuligheter.

Bruk av API gir tilgang til oppdatert informasjon, økt fleksibilitet, og forbedret skalerbarhet. Det er mer kostnadseffektivt og reduserer utviklings- og driftskostnader, samt akselererer utviklingsprosessen ved å fjerne behovet for å samle, strukturere, og vedlikeholde egen data på front end. Ny data som oppdateres i en database, hentes umiddelbart på frontend ved bruk av API.

### Bruk av NAV Aksel Design system

Som ønsket i oppgaven, har jeg brukt designsystemet NAV Aksel til å designe applikasjonen. Alle farger, ikoner og komponenter i applikasjonen er hentet fra NAV Aksel biblioteket.

Det finnes 3 nivåer når man bruker designsystemet NAV Aksel. Jeg har brukt alle 3.

1. Nivå 1 er design tokens. De er brukt i alle scss filer. Se `_index.scss` for eksempel.
2. Nivå 2 er komponenter. Disse er brukt i flere komponent filer. Se `JobList.tsx` for eksempel.
3. Nivå 3 er mal. Jeg har brukt en mal som heter [404 Mal](https://aksel.nav.no/monster-maler/maler/404-side) fra designsystemet. Denne er brukt i `ErrorPage.tsx` og vises når brukeren prøver å gå til en lenke som er ødelagt/ikke finnes.

#### Liste over komponenter fra NAV Aksel som er brukt i applikasjonen:

- Page
- Box
- HStack
- VStack
- Table
- Table.Header
- Table.Row
- Table.HeaderCell
- Table.DataCell
- SkeletonView
- Pagination
- HelpText
- Button
- Link
- Heading
- BodyShort
- Accordion
- Accordion.Item
- Accordion.Header
- Accordion.Content
- ExpansionCard
- ExpansionCard.Header
- ExpansionCard.Title
- ExpansionCard.Content

#### Siste kommentarer

Applikasjonen er laget med fokus på brukervennlighet og universell utforming.

##### Universell utforming

Hele applikasjonen er designet slik at den kan brukes på mobile flater. Brekkpunkter er hentet fra NAV designsystem.

###### Antagelser

**Tabellen på forsiden:**

- Kun 4 kolonner i tabellen skal vises på flater tilegnet tablett.
- Kun 2 kolonner i tabellen skal vises på flater tilsvarende mobil.
- Kun fire sider av tabell data er tilgjengelig. Pagineringstall er satt til 4.

##### Nattmodus

Det er støtte for å veksle mellom dag- og nattmodus i applikasjonen.
Design tokens er overstyrt på semantisk og komponentnivå for å oppnå dette. Hele applikasjonen støtter nattmodus.
