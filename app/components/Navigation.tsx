import { NavLink } from "@remix-run/react";
import { SunIcon, PersonCircleIcon } from "@navikt/aksel-icons";
import "@styles/navbar.css";
import { HStack } from "@navikt/ds-react";

export function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <HStack gap="5" justify={"end"}>
          <li>
            <NavLink to={`/`}>Jobs</NavLink>
          </li>
          <li>
            <NavLink to={`/advice`}>Advice for Job Seekers</NavLink>
          </li>
          <li>
            <NavLink to={`/faq`}>Got any questions?</NavLink>
          </li>
          <li>
            <NavLink to={`/tips`}>Tips to improve CV</NavLink>
          </li>
          <li>
            <NavLink to={`/about`}>About Us</NavLink>
          </li>
          <li>
            <button
              aria-label="Toggle dark mode"
              title="Toggle dark mode"
              // style={{ background: "none", border: "none" }}
            >
              <SunIcon title="Toggle dark mode" />
            </button>
          </li>
          <li>
            <PersonCircleIcon title="Profile" />
          </li>
        </HStack>
      </ul>
    </nav>
  );
}
