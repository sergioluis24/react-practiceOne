import { useRouter } from "../hooks/useRouter";

export function Link({ href, children, ...restOfTheProps }) {
  const { navigateTo } = useRouter();

  function handleClick(event) {
    event.preventDefault();
    navigateTo(href);
  }
  return (
    <a href={href} onClick={handleClick} {...restOfTheProps}>
      {children}
    </a>
  );
}
