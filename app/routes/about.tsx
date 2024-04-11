import type { MetaFunction } from "@remix-run/node";
import { BodyShort, Box, Heading, Link, Page, VStack } from "@navikt/ds-react";
import { getMeta } from "~/utils/utils";

export const meta: MetaFunction = () => getMeta("About");

export default function About() {
  return (
    <Page.Block as="main" className="about" width="md">
      <Box padding={{ xs: "4", sm: "8", md: "10", lg: "12" }}>
        <VStack gap="4">
          <Heading level="1" size="medium">
            About page
          </Heading>
          <BodyShort>
            This app leverages the{" "}
            <Link href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch">
              JSearch API
            </Link>{" "}
            to search for the latest job postings across multiple platforms.
          </BodyShort>
          <BodyShort>
            This app was created using React, Typescript & Remix. The app
            demonstrates the ability to produce reusable, maintaible and
            implement components from{" "}
            <span>
              <Link href="https://aksel.nav.no/" inlineText>
                NAV Aksel Design System.
              </Link>{" "}
            </span>
          </BodyShort>
          <Box>
            <img
              width="100%"
              src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg"
              alt="people working"
            />
          </Box>
        </VStack>
      </Box>
    </Page.Block>
  );
}
