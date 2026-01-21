import { useRouter } from "../hooks/useRouter";

export function Routing({ path, component: Component }) {
  const { currentPath } = useRouter();
  if (path !== currentPath) return null;
  return <Component />;
}
