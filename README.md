# Frontend developer task

## Installation

```shellscript
npm i
```

## Development

Run the Vite dev server:

```shellscript
npm run dev
```

## Deployment

First, build your app for production:

```sh
npm run build
```

## Tests

1. Open the test suite by running

```sh
npx cypress open
```

2. Click on `E2E Testing`

3. Select a browser and click `Start E2E Testing`. A browser window will open.

4. Select `Specs` from Side bar. You should see a list of tests as the main content.

5. Select a test for instance `navigation.cy.ts`. The test will run automatically.

## Dokumentasjon på valg av API

Det dukker det nye jobbutlysninger på ulike plattformer som blir utfylt løpende. Det er derfor viktig å hente data fra API som har denne oppdateringen uten at vi trenger å oppdatere frontend applikasjonen på ny hver gang dataen endrer seg.

Til denne oppgaven har jeg valgt å bruke [JSearch API ](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) fra Rapid API.

JSearch av OpenWeb Ninja tilbyr raske og pålitelige jobbsøk ved å samle inn den nyeste jobbinformasjonen og lønnsdataene fra Google for Jobs i sanntid. Den dekker et bredt spekter av store og mindre jobbsider som LinkedIn, Indeed og Glassdoor. Med over 30 datapunkter per jobb og avanserte søke-, spørre- og filtreringsmuligheter, står JSearch frem som det mest omfattende og vedlikeholdte jobb-APIet tilgjengelig, designet for å gi brukere tilgang til en rikholdig samling av jobbmuligheter.

Bruk av API gir tilgang til oppdatert informasjon, økt fleksibilitet, og forbedret skalerbarhet. Dette valget er også mer kostnadseffektivt ved å redusere både utviklings- og driftskostnader, samt akselerere utviklingsprosessen ved å fjerne behovet for å samle, strukturere, og vedlikeholde egen data på front end. Dataene oppdateres i databasen forløpende og hentes fortløpende ved behov.

### Bruk av NAV Aksel Design system

Som ønsket har jeg brukt designsystemet NAV Aksel ved implementering av applikasjonen. Alle farger, ikoner og komponenter i applikasjonen er implementert slik beskrevet i dokumentasjon fra NAV Aksel.

Det finnes 3 nivåer når man bruker designsystemet NAV Aksel. Jeg har brukt alle 3.

1. Nivå 1 er design tokens. De er brukt i alle scss filer. Se `_index.scss` for eksempel.
2. Nivå 2 er komponenter. Disse er brukt i flere komponent filer. Se `JobList.tsx` for eksempel.
3. Nivå 3 er mal. Jeg har brukt en mal som heter [404 Mal] (https://aksel.nav.no/monster-maler/maler/404-side) fra designsystemt. Denne er brukt i `ErrorPage.tsx` og vises når brukeren prøver å gå til en lenke som er ødelagt/ikke finnes.

#### Liste over komponenter som er brukt i applikasjonen:

- Page
- Box
- HStack
- VStack
- Table
- Table.Header
- Table.Row
- Table.HeaderCell
- Table.DataCell
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

#### Andre kommentarer

Applikasjonen er laget med fokus på brukervennlighet og universell utforming.

#### Universell utforming

Hele applikasjonen er designet slik at den kan brukes på mobile flater.

##### Antagelser

På landingssiden (Jobs) har jeg har antatt at vi kun viser 4 kolonner i tabellen på på flater tilegnet tablett. På flater tilsvarende mobil, vises kun 2 kolonner.
