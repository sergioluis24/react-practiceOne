import { Link as LinkRouter } from "react-router";

export function Link({ children, href, ...restOfTheProps }) {
  return (
    <LinkRouter to={href} className={`cursor-pointer`} {...restOfTheProps}>
      {children}
    </LinkRouter>
  );
}
