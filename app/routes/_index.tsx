import type { MetaFunction } from "@remix-run/node";
import { Navgiation } from "../components/Navgiation";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Find Your Next Job Easily" },
    {
      name: "description",
      content: "Find job listings fast from google, linkedln etc.",
    },
  ];
};

export default function Index() {
  return (
    <div>
      <p>Inside HOME</p>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
