import { NavLink } from "@remix-run/react";
import {
  SunIcon,
  PersonCircleIcon,
  MenuHamburgerIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";
import { HStack, Box, Page, Button } from "@navikt/ds-react";
import { useTheme } from "./useClassName";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { ReactNode, useState } from "react";
import "@styles/navbar.scss";

const ListItem = ({ children }: { children: ReactNode }) => {
  const { getClassName } = useTheme();

  return <li className={getClassName("list-item")}>{children}</li>;
};

export function Navigation() {
  const { toggleDarkMode } = useGlobalContext();
  const { getClassName } = useTheme();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };
  return (
    <Box as="nav" id="nav" className={getClassName("navbar")}>
      <Page.Block>
        <div className={getClassName("navbar-mobile")}>
          <HStack justify="start">
            <button
              className={getClassName("menu-button")}
              onClick={toggleMenu}
            >
              {!isMenuOpen ? (
                <MenuHamburgerIcon
                  className={getClassName("hamburger-menu-icon")}
                  title="menu"
                  fontSize="1.5rem"
                />
              ) : (
                <XMarkIcon
                  className={getClassName("close-menu-icon")}
                  title="close menu"
                  fontSize="1.5rem"
                />
              )}
            </button>
          </HStack>
        </div>
        <Box
          as="ul"
          className={`${getClassName("nav-bar-ul")} ${
            isMenuOpen ? "open" : ""
          }`}
        >
          <HStack
            gap={"5"}
            justify={"space-between"}
            className={getClassName("menu-stack")}
          >
            <HStack
              className={getClassName("nav-link-list")}
              gap={{ xs: "2", sm: "3", md: "4", lg: "5" }}
            >
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={getClassName("nav-link")}
                  data-cy="jobsLink"
                  to={`/`}
                >
                  Jobs
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={getClassName("nav-link")}
                  data-cy="adviceLink"
                  to={`/advice`}
                >
                  Advice
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={getClassName("nav-link")}
                  data-cy="faqLink"
                  to={`/faq`}
                >
                  FAQ
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={getClassName("nav-link")}
                  data-cy="tipsLink"
                  to={`/tips`}
                >
                  CV Tips
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={getClassName("nav-link")}
                  data-cy="aboutUsLink"
                  to={`/about`}
                >
                  About
                </NavLink>
              </ListItem>
            </HStack>
            <HStack className={getClassName("right-menu")} gap="1">
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
      </Page.Block>
    </Box>
  );
}
