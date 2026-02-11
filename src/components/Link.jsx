import { useRouter } from "./../hooks/useRouter.jsx";

export function Link({ href, children, ...restOfTheProps }) {
  const { navigateTo } = useRouter();
  function handleClick(event) {
    event.preventDefault();
    navigateTo(href);
  }

  return (
    <a
      href={href}
      className={`cursor-pointer`}
      onClick={handleClick}
      {...restOfTheProps}
    >
      {children}
    </a>
  );
}
