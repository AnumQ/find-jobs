import { BodyShort, Box, Heading, Link, List, Page } from "@navikt/ds-react";


export function ErrorPage({ errorMessage }: { errorMessage: string }) {
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
              Details about the problem: <span>{errorMessage}</span>
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
