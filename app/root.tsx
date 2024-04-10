import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { Navigation } from "./components/Navigation";
import "@navikt/ds-css";
import { BodyShort, Box, Heading, Link, List, Page } from "@navikt/ds-react";
import { GlobalContextProvider } from "./contexts/GlobalContext";


// Error boundary component
export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  let errorString = "unknown";
  if (error && (error as Error) && (error as Error).message) {
    errorString = (error as Error).message;
  }
  return (
    <Page data-aksel-template="404-v2">
      <Page.Block as="main" width="xl" gutters>
        <Box paddingBlock="20 16">
          <div>
            <Heading level="1" size="large" spacing>
              Sorry, page not found
            </Heading>
            <BodyShort>
              This page has either been moved, does not exist or there is
              something wrong with the url.
            </BodyShort>
            <BodyShort>
              Details about the problem: <span>{errorString}</span>
            </BodyShort>
            <BodyShort>Here are potential solutions:</BodyShort>
            <List>
              <List.Item>
                <Link href="/">Go back to the main page</Link>
              </List.Item>
              <List.Item>
                <Link href="/faq">Go to frequently asked questions</Link>
              </List.Item>
            </List>
          </div>
        </Box>
      </Page.Block>
    </Page>
  );
}

function Footer() {
  return (
    <Box background="surface-neutral-moderate" padding="8" as="footer">
      <Page.Block gutters width="lg">
        Footer
      </Page.Block>
    </Box>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <GlobalContextProvider>
          <Page footer={<Footer />}>
            <Page.Block>
              <Navigation />
            </Page.Block>
            <Page.Block gutters>{children}</Page.Block>
          </Page>
          <ScrollRestoration />
          <Scripts />
        </GlobalContextProvider>
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
