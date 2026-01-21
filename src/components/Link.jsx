export function Link({ href, children, ...restOfTheProps }) {
  function handleClick(event) {
    event.preventDefault();

    window.history.pushState({}, "", href);
    window.dispatchEvent(new PopStateEvent("popstate"));
  }
  return (
    <a href={href} onClick={handleClick} {...restOfTheProps}>
      {children}
    </a>
  );
}
