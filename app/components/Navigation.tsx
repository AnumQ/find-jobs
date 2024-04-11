import { NavLink } from "@remix-run/react";
import {
  SunIcon,
  PersonCircleIcon,
  MenuHamburgerIcon,
  XMarkIcon,
} from "@navikt/aksel-icons";
import { HStack, Box, Page, Button } from "@navikt/ds-react";
import { useGlobalContext } from "~/contexts/GlobalContext";
import { ReactNode, useState } from "react";
import "@styles/navbar.scss";

const ListItem = ({ children }: { children: ReactNode }) => {
  return <li className={"list-item"}>{children}</li>;
};

export function Navigation() {
  const { toggleDarkMode } = useGlobalContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    if (isMenuOpen) {
      toggleMenu();
    }
  };
  return (
    <Box as="nav" id="nav" className={"navbar"}>
      <Page.Block>
        <HStack className={"navbar-mobile"} justify="start">
          <Button
            variant="tertiary-neutral"
            title={!isMenuOpen ? "Open menu" : "close menu"}
            aria-expanded={isMenuOpen}
            icon={
              !isMenuOpen ? (
                <MenuHamburgerIcon aria-hidden fontSize="1.5rem" />
              ) : (
                <XMarkIcon aria-hidden fontSize="1.5rem" />
              )
            }
            className={"menu-button"}
            onClick={toggleMenu}
          />
        </HStack>
        <Box as="ul" className={`${"nav-bar-ul"} ${isMenuOpen ? "open" : ""}`}>
          <HStack
            gap={{ xs: "2", sm: "3", md: "4", lg: "5" }}
            justify={"space-between"}
            className={"menu-stack"}
            align={"center"}
          >
            <HStack
              className={"nav-link-list"}
              gap={{ xs: "2", sm: "3", md: "4", lg: "5" }}
            >
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={"nav-link"}
                  data-cy="jobsLink"
                  to={`/`}
                >
                  Jobs
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={"nav-link"}
                  data-cy="adviceLink"
                  to={`/advice`}
                >
                  Advice
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={"nav-link"}
                  data-cy="faqLink"
                  to={`/faq`}
                >
                  FAQ
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={"nav-link"}
                  data-cy="tipsLink"
                  to={`/tips`}
                >
                  CV Tips
                </NavLink>
              </ListItem>
              <ListItem>
                <NavLink
                  onClick={closeMenu}
                  className={"nav-link"}
                  data-cy="aboutUsLink"
                  to={`/about`}
                >
                  About
                </NavLink>
              </ListItem>
            </HStack>
            <HStack className={"right-menu"} gap="1">
              <ListItem>
                <Button
                  data-cy="darkModeToggle"
                  variant="tertiary-neutral"
                  title="Toggle dark mode"
                  onClick={toggleDarkMode}
                  icon={<SunIcon aria-hidden fontSize={"1.5rem"} />}
                />
              </ListItem>
              <ListItem>
                <Button
                  data-cy="profileButton"
                  variant="tertiary-neutral"
                  title="View Profile"
                  onClick={() =>
                    alert("Not yet implemented. Come back later. ")
                  }
                  icon={<PersonCircleIcon aria-hidden fontSize={"1.5rem"} />}
                />
              </ListItem>
            </HStack>
          </HStack>
        </Box>
      </Page.Block>
    </Box>
  );
}
