import { useEffect, useState } from "react";
import { IconClose } from "../icons/IconClose.jsx";
export function CardAvatar({ figure }) {
  const [isHover, setIsHover] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  function handleHover() {
    setIsHover(true);
  }
  function handleClick() {
    setIsExpand(true);
  }
  useEffect(() => {
    if (isExpand) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isExpand]);
  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHover(false)}
        className={`${isExpand ? "fixed inset-0 max-w-190 z-50 m-auto h-[280px]  " : "overflow-y-visible relative z-30  "}   shrink h-100   rounded-lg  transition-all `}
      >
        <article
          className={`${isExpand ? " pb-20 " : "  "}   bg-slate-50  w-full h-full  p-10  rounded-lg    transition-all `}
        >
          <div
            className={`${isExpand ? "top-[3%] left-[1%] w-full rounded-lg " : "top-[1.5%] left-[5%] "} h-full w-[96%]   absolute z-[-50]   bg-yellow-500/90  rounded-lg`}
          ></div>
          <div className=" flex items-center justify-between mb-2 align-middle">
            <h3
              className="text-slate-900 font-bold text-2xl 
             "
            >
              {figure.nombre}
            </h3>
            {isExpand && (
              <button onClick={() => setIsExpand(false)}>
                <IconClose classProp={"text-slate-900 cursor-pointer"} />
              </button>
            )}
          </div>
          <h4 className=" italic font-semibold text-lg text-yellow-500/90 mb-2 text-pretty">
            "{figure.frase}"
          </h4>

          <p
            className={`  text-slate-700/70 text-base text-balance ${isExpand ? "" : "overflow-hidden max-h-38   [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"}`}
          >
            {figure.filosofia}
          </p>
          {isHover && !isExpand && (
            <div
              onClick={handleClick}
              className="w-full h-full rounded-lg absolute top-0 left-0 flex justify-center items-center bg-slate-700/60 backdrop-blur-xs cursor-pointer "
            >
              <p className="text-slate-50 text-3xl">Ver mas</p>
            </div>
          )}
        </article>
      </div>{" "}
      {isExpand && (
        <div
          onClick={() => setIsExpand(false)}
          className="w-full h-full rounded-lg absolute top-0 left-0 flex justify-center items-center bg-slate-700/60 cursor-pointer z-40 backdrop-blur-xs"
        ></div>
      )}
    </>
  );
}
