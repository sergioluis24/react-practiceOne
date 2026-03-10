export function ButtonPrimary({
  children,
  bg = "bg-[#0466c8]",
  color = "text-slate-50",
  ...props
}) {
  // const size ={
  //   medium:"w-40"
  // }
  if (props.size === "sm") {
    props.size = "w-35 py-4";
  }
  if (props.size === "md") {
    props.size = "w-40 py-4";
  }
  if (props.size === "lg") {
    props.size = "w-50 py-6";
  }
  return (
    <>
      <button
        {...props}
        className={`${bg}  ${color} ${props.size} h-fit inline-block  rounded-xl shadow-lg shadow-blue-500/40 px-4  text-lg font-bold cursor-pointer hover:scale-110 transition`}
      >
        {children}
      </button>
    </>
  );
}
