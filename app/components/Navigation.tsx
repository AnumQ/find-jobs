import { NavLink } from "@remix-run/react";
import { SunIcon, PersonCircleIcon } from "@navikt/aksel-icons";
import "@styles/navbar.css";
import { HStack, Box } from "@navikt/ds-react";
import { useTheme } from "./useClassName";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { ReactNode } from "react";

const ListItem = ({ children }: { children: ReactNode }) => {
  const { getClassName } = useTheme();

  return <li className={getClassName("list-item")}>{children}</li>;
};

export function Navigation() {
  const { toggleDarkMode } = useGlobalContext();

  return (
    <Box as="nav">
      <Box as="ul">
        <HStack gap={"3"} justify={"space-between"}>
          <HStack gap={{ xs: "1", sm: "2", md: "3", lg: "4" }}>
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
