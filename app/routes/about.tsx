import type { MetaFunction } from "@remix-run/node";
import { LinksFunction } from "@remix-run/node";
import styles from "@styles/about.css";

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
      <h1>About page</h1>
      <p>
        Find you next job easily, search fast through jobs posted on linkedln,
        google etc.
      </p>
      <p>
        This page leverages the{" "}
        <span>
          <a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch">
            JSearch
          </a>{" "}
        </span>
      </p>
    </div>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
