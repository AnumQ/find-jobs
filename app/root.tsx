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
import {
  BodyShort,
  Box,
  Detail,
  HStack,
  Heading,
  Link,
  List,
  Page,
} from "@navikt/ds-react";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "./contexts/GlobalContext";
import "@styles/_index.scss";

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
    <Box className="footer" padding="8" as="footer">
      <Page.Block gutters width="lg">
        <HStack justify={"center"}>
          <Box className={"footer-text"}>
            <Detail>
              {" "}
              © 2024 Jobs Portal | All rights reserved. App created by Anum
            </Detail>
          </Box>
        </HStack>
      </Page.Block>
    </Box>
  );
}

const Body = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useGlobalContext();
  return (
    <body
      style={{ backgroundColor: isDarkMode ? "var(--a-surface-inverted)" : "" }}
      data-theme={!isDarkMode ? "light" : "dark"}
    >
      <Page
        style={{
          // must override the inline style on - PAGE is still on eksperimental mode
          backgroundColor: isDarkMode ? "var(--a-surface-inverted)" : "",
        }}
        footer={<Footer />}
      >
        <Page.Block>
          <Navigation />
        </Page.Block>
        <Page.Block gutters>{children}</Page.Block>
      </Page>
      <ScrollRestoration />
      <Scripts />
    </body>
  );
};

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <GlobalContextProvider>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <Body>{children}</Body>
      </html>
    </GlobalContextProvider>
  );
}

export default function App() {
  return <Outlet />;
}
