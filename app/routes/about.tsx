import type { MetaFunction } from "@remix-run/node";
import "@styles/about.css";
import { BodyShort, Box, Heading, Link, List, Page } from "@navikt/ds-react";

export const meta: MetaFunction = () => {
  return [
    { title: "About | Find Your Next Job" },
    {
      name: "description",
      content:
        "Find you next job easily, search fast through jobs posted on linkedln, google etc.",
    },
  ];
};

export default function About() {
  return (
    <div className="about">
      <Heading level="1" size="medium">
        About page
      </Heading>
      <BodyShort>
        Find you next job easily, search fast through jobs posted on linkedln,
        google etc.
      </BodyShort>
      <BodyShort>
        This app leverages the{" "}
        <span>
          <a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch">
            JSearch API
          </a>{" "}
        </span>
        to search for the latest job postings across multiple platforms.
      </BodyShort>
    </div>
  );
}
