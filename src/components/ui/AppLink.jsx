import { Link } from 'react-router-dom';

// Renders a router <Link> for internal paths ("to") and a normal <a> for external URLs ("href").
export default function AppLink({ to, href, children, ...rest }) {
  if (to) {
    return (
      <Link to={to} {...rest}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
