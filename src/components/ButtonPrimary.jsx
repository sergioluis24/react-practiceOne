export function ButtonPrimary({
  children,
  bg = "bg-blue-700",
  color = "text-slate-50",
  shadow = "shadow-blue-500/60",
  textSize = "text-md",
  ...props
}) {
  // const size ={
  //   medium:"w-40"
  // }
  if (props.size === "sm") {
    props.size = "w-30 py-2";
  }
  if (props.size === "md") {
    props.size = "w-40 py-2";
  }
  if (props.size === "lg") {
    props.size = "w-50 py-4";
  }
  return (
    <>
      <button
        {...props}
        className={`${bg}   ${color} ${props.size} ${textSize} disabled:bg-gray-700 disabled:shadow-none
        disabled:pointer-none disabled:pointer-events-none disabled:opacity-50
        h-fit inline-block  rounded-xl shadow-lg ${shadow}   px-4   font-bold cursor-pointer hover:scale-110 transition`}
      >
        {children}
      </button>
    </>
  );
}
