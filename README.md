# Frontend utvikler oppgave

This application allows user to view a list of jobs.

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

1. Open the test testpakken ved å kjøre

```sh
npx cypress open
```

2. Klikk på `E2E Testing`

3. Velg en nettleser og klikk `Start E2E Testing`. Et nytt nettleservindu åpnes.

4. Velg `Specs` fra sidepanel. Du bør nå se en liste over tester som hovedinnhold.

5. Velg en test, for eksempel `navigation.cy.ts`. Testen kjøres automatisk.

## Dokumentasjon på valg av API

Det dukker det nye jobbutlysninger på ulike plattformer som blir utfylt løpende. Det er derfor viktig å hente data fra API som har denne oppdateringen uten at vi trenger å oppdatere frontend applikasjonen på ny hver gang dataen endrer seg.

Til denne oppgaven har jeg valgt å bruke [JSearch API ](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) fra Rapid API.

JSearch av OpenWeb Ninja tilbyr raske og pålitelige jobbsøk ved å samle inn den nyeste jobbinformasjonen og lønnsdataene fra Google for Jobs i sanntid. Den dekker et bredt spekter av store og mindre jobbsider som LinkedIn, Indeed og Glassdoor. Med over 30 datapunkter per jobb og avanserte søke-, spørre- og filtreringsmuligheter, står JSearch frem som det mest omfattende og vedlikeholdte jobb-APIet tilgjengelig, designet for å gi brukere tilgang til en rikholdig samling av jobbmuligheter.

Bruk av API gir tilgang til oppdatert informasjon, økt fleksibilitet, og forbedret skalerbarhet. Det er mer kostnadseffektivt og reduserer utviklings- og driftskostnader, samt akselererer utviklingsprosessen ved å fjerne behovet for å samle, strukturere, og vedlikeholde egen data på front end. Ny data som oppdateres i en database, hentes umiddelbart på frontend ved bruk av API.

### Bruk av NAV Aksel Design system

Som ønsket i oppgaven, har jeg brukt designsystemet NAV Aksel til å designe applikasjonen. Alle farger, ikoner og komponenter i applikasjonen er hentet fra NAV Aksel biblioteket. 

Det finnes 3 nivåer når man bruker designsystemet NAV Aksel. Jeg har brukt alle 3.

1. Nivå 1 er design tokens. De er brukt i alle scss filer. Se `_index.scss` for eksempel.
2. Nivå 2 er komponenter. Disse er brukt i flere komponent filer. Se `JobList.tsx` for eksempel.
3. Nivå 3 er mal. Jeg har brukt en mal som heter [404 Mal](https://aksel.nav.no/monster-maler/maler/404-side) fra designsystemt. Denne er brukt i `ErrorPage.tsx` og vises når brukeren prøver å gå til en lenke som er ødelagt/ikke finnes.

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

#### Siste kommentarer

Applikasjonen er laget med fokus på brukervennlighet og universell utforming.

##### Universell utforming

Hele applikasjonen er designet slik at den kan brukes på mobile flater. Brekkpunkter er hentet fra NAV designsystem.

###### Antagelser

På landingssiden (Jobs) har jeg har antatt at vi kun viser 4 kolonner i tabellen på på flater tilegnet tablett. På flater tilsvarende mobil, vises kun 2 kolonner i tabellen.

##### Nattmodus

Det er støtte for å veksle mellom dag- og nattmodus i applikasjonen.
Design tokens er overstyrt på semantisk og komponentnivå for å oppnå dette. Hele applikasjonen støtter nattmodus.
