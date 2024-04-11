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
import { Page } from "@navikt/ds-react";
import {
  GlobalContextProvider,
  useGlobalContext,
} from "./contexts/GlobalContext";
import "@styles/_index.scss";
import { Footer } from "./Footer";
import { ErrorPage } from "./ErrorPage";

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);
  let errorMessage = "unknown";
  if (error && (error as Error) && (error as Error).message) {
    errorMessage = (error as Error).message;
  }
  return <ErrorPage errorMessage={errorMessage}></ErrorPage>;
}

const Body = ({ children }: { children: React.ReactNode }) => {
  const { isDarkMode } = useGlobalContext();

  return (
    <body data-theme={!isDarkMode ? "light" : "dark"}>
      <Page footer={<Footer />}>
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
