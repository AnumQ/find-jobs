import { NavLink } from "@remix-run/react";

export function Navgiation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to={`/`}>Jobs</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About</NavLink>
        </li>
      </ul>
    </nav>
  );
}
