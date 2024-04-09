import { NavLink } from "@remix-run/react";
import { SunIcon, PersonCircleIcon } from "@navikt/aksel-icons";
import { HStack, Box } from "@navikt/ds-react";
import { useTheme } from "./useClassName";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { ReactNode } from "react";
import "@styles/navbar.scss";

const ListItem = ({ children }: { children: ReactNode }) => {
  const { getClassName } = useTheme();

  return <li className={getClassName("list-item")}>{children}</li>;
};

export function Navigation() {
  const { toggleDarkMode } = useGlobalContext();

  const { getClassName } = useTheme();

  return (
    <Box as="nav" className={getClassName("navbar")}>
      <Box as="ul">
        <HStack gap={"5"} justify={"space-between"}>
          <HStack gap={{ xs: "2", sm: "3", md: "4", lg: "5" }}>
            <ListItem>
              <NavLink data-cy="jobsLink" to={`/`}>
                Jobs
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink data-cy="adviceLink" to={`/advice`}>
                Advice for Job Seekers
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink data-cy="faqLink" to={`/faq`}>
                Got any questions?
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink data-cy="tipsLink" to={`/tips`}>
                Tips to improve CV
              </NavLink>
            </ListItem>
            <ListItem>
              <NavLink data-cy="aboutUsLink" to={`/about`}>
                About Us
              </NavLink>
            </ListItem>
          </HStack>
          <HStack gap="1">
            <ListItem>
              <button
                data-cy="darkModeToggle"
                aria-label="Toggle dark mode"
                onClick={toggleDarkMode}
              >
                <SunIcon fontSize={"1.5rem"} />
              </button>
            </ListItem>
            <ListItem>
              <button
                data-cy="profileButton"
                onClick={() => alert("not implemented")}
              >
                <PersonCircleIcon fontSize={"1.5rem"} />
              </button>
            </ListItem>
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
