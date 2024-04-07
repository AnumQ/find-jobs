import type { MetaFunction } from "@remix-run/node";
import "@styles/advice.css";

export const meta: MetaFunction = () => {
  return [
    { title: "Advice for Job Seeker | Find Your Next Job" },
    {
      name: "description",
      content:
        "Find you next job easily, search fast through jobs posted on linkedln, google etc.",
    },
  ];
};

export default function Advice() {
  return (
    <div className="advice">
      <h1>Advice for job seeker</h1>
      <p>
        Find you next job easily, search fast through jobs posted on linkedln,
        google etc.
      </p>
      <p>
        This page leverages the
        <span>
          <a href="https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch">
            JSearch
          </a>{" "}
        </span>
      </p>
    </div>
  );
}
