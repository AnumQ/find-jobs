import { NavLink } from "@remix-run/react";
import { SunIcon, PersonCircleIcon } from "@navikt/aksel-icons";
import "@styles/navbar.css";
import { HStack, Box } from "@navikt/ds-react";
import { useTheme } from "./useClassName";
import { useGlobalContext } from "~/contexts/GlobalContext";

export function Navigation() {
  const { getClassName } = useTheme();
  const { toggleDarkMode } = useGlobalContext();

  return (
    <nav className={getClassName("navbar")}>
      <ul>
        <Box>
          <HStack justify={"space-between"}>
            <HStack gap="1">
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
            </HStack>
            <HStack gap="1">
              <li>
                <button
                  aria-label="Toggle dark mode"
                  title="Toggle dark mode"
                  onClick={toggleDarkMode}
                >
                  <SunIcon fontSize={"1.5rem"} title="Toggle dark mode" />
                </button>
              </li>
              <li>
                <PersonCircleIcon fontSize={"1.5rem"} title="Profile" />
              </li>
            </HStack>
          </HStack>
        </Box>
      </ul>
    </nav>
  );
}
