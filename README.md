# Frontend Developer Task

## Application Link
[Remix App - Hosted on Vercel](https://find-jobs-kappa.vercel.app/)

## Installation

```shellscript
npm i
```

## Local Development

Run the development server by executing the command:

```shellscript
npm run dev
```

## Tests

### Instructions for Running Tests

At least two tests have been created, as required by the task. One test checks all the links in the navigation menu. The other tests check the functionality of the list view and detail view.

1. Open the test suite by running:

```sh
npx cypress open
```

2. Click on `E2E Testing`.

3. Select a browser and click `Start E2E Testing`. A new browser window will open.

4. Choose `Specs` from the sidebar. A list of tests will be displayed in the main content area.

5. Select a test, for example, `navigation.cy.ts`. The test will run automatically.

## Functionality

1. **List View**  
   The application displays a list of job postings.

2. **Detail View**  
   Clicking on an item in the list takes the user to a detailed view of the selected item.

3. **Navigation**  
   The user can navigate to different pages by clicking on links in the navigation menu.

4. **API Integration**  
   The application is integrated with an external API. This API has a maximum limit on the number of allowed requests for unpaid subscriptions. Therefore, it is configured by default to use test data to avoid exceeding this limit.

   To fetch data from the API, enable the "Use live data" toggle on the front page. The application will display the remaining number of allowed requests. If you run out of requests, please contact Anum.

5. **Night Mode**  
   The user can toggle between day and night mode by clicking on the icon in the navigation menu.

6. **Mobile Support**  
   The application supports all platforms. More information about this is provided below.

## Documentation on API Selection

Job postings appear on various platforms and are continuously updated. Therefore, it is crucial to retrieve data from an API that is updated without requiring us to update the frontend application every time the data changes.

For this task, I chose to use the [JSearch API](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch) from Rapid API.

JSearch by OpenWeb Ninja offers fast and reliable job searches by collecting the latest job information and salary data from Google for Jobs in real-time. It covers a wide range of major and minor job sites such as LinkedIn, Indeed, and Glassdoor. With over 30 data points per job and advanced search, query, and filtering capabilities, JSearch stands out as the most comprehensive and well-maintained job API available, designed to provide users with access to a rich collection of job opportunities.

Using the API provides access to up-to-date information, increased flexibility, and improved scalability. It is more cost-effective and reduces development and operational costs, as well as accelerates the development process by eliminating the need to collect, structure, and maintain our own data on the frontend. New data updated in a database is immediately retrieved on the frontend using the API.

### Design Choices - NAV Aksel Design System

As requested in the task, I have used the NAV Aksel design system in the application. All colors, icons, and components in the application are from the NAV Aksel library.

There are three levels when using the NAV Aksel design system. I have used all three.

1. **Level 1** is design tokens. They are used in all SCSS files. See `_index.scss` for example.
2. **Level 2** is components. These are used in several component files. See `JobList.tsx` for example.
3. **Level 3** is a template. I have used a template called [404 Template](https://aksel.nav.no/monster-maler/maler/404-side) from the design system. This is used in `ErrorPage.tsx` and is displayed when the user tries to access a broken or non-existent link.

The design system's documentation explains the appropriate and inappropriate use of components. This has been taken into account in the application. Accordion is a component that is suitable for a list of frequently asked questions, which is why Accordion is used to display data on the `/faq` page. Another component I have implemented is ExpansionCard, which can be seen on the `/tips` page.

By using standard components such as Page, Box, Heading, and BodyShort from the design system, the application's style is standardized and meets the requirements for universal design and accessibility.

#### List of NAV Aksel Components Used in the Application:

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
- List
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

### Usability and Universal Design

The application is built with a focus on usability and universal design.

#### Accessibility

By using the NAV Aksel design system, the application's accessibility is automatically ensured, as NAV's digital toolkit is intended to be accessible to everyone.

However, in some cases, adjustments are needed. I have implemented these according to the guidelines in the component documentation. See `advice.tsx` where icons that are purely decorative have `aria-hidden="true"` set. The same applies to icons wrapped in `Button` elements in the navigation. See `Navigation.tsx`.

#### Universal Design

The entire application is designed to be usable on mobile platforms. Breakpoints are taken from the NAV Aksel design system.

##### Night Mode

Support for toggling between day and night mode is available in the application. Design tokens are overridden at the semantic and component levels to achieve this. The entire application supports night mode.

#### Assumptions

Some assumptions have been made, particularly concerning the table (list view) on the front page:

- Only 4 columns in the table should be displayed on tablet-sized screens.
- Only 2 columns in the table should be displayed on mobile-sized screens.
- Only four pages of table data are available. The pagination number is set to 4.
