import { NavLink } from "@remix-run/react";
import { SunIcon, PersonCircleIcon } from "@navikt/aksel-icons";
import "@styles/navbar.css";
import { HStack, Box, VStack } from "@navikt/ds-react";
import { useTheme } from "./useClassName";
import { useGlobalContext } from "~/contexts/GlobalContext";

export function Navigation() {
  const { getClassName } = useTheme();
  const { toggleDarkMode } = useGlobalContext();

  return (
    <nav className={getClassName("navbar")}>
      <ul>
        <HStack gap={"3"} justify={"space-between"}>
          <HStack gap={{ xs: "2", sm: "4", md: "8", lg: "10", xl: "12" }}>
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
              <button title="Profile" onClick={() => alert("not implemented")}>
                <PersonCircleIcon fontSize={"1.5rem"} title="Profile" />
              </button>
            </li>
          </HStack>
        </HStack>
      </ul>
    </nav>
  );
}
