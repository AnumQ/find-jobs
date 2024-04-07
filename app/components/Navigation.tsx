import { NavLink } from "@remix-run/react";

export function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <NavLink to={`/`}>Jobs</NavLink>
        </li>
        <li>
          <NavLink to={`/advice`}>Advice for Job Seekers</NavLink>
        </li>
        <li>
          <NavLink to={`/about`}>About Us</NavLink>
        </li>
      </ul>
    </nav>
  );
}
