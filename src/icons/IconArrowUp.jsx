export function IconArrowUp({ ...props }) {
  return (
    <>
      <div className="text-slate-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-up-dashed"
          {...props}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5v6m0 3v1.5m0 3v.5" />
          <path d="M16 9l-4 -4" />
          <path d="M8 9l4 -4" />
        </svg>
      </div>
    </>
  );
}
