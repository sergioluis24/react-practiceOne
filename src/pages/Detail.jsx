import { useParams } from "react-router";
export function Detail() {
  const { id } = useParams();
  return (
    <>
      <h2>Detail</h2>
      <p>{id}</p>
    </>
  );
}
