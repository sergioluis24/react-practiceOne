import { useState } from "react";

export function CardAvatar({ figure }) {
  const [isHover, setIsHover] = useState(false);
  const [isExpand, setIsExpand] = useState(false);
  function handleHover() {
    setIsHover(true);
  }
  function handleClick() {
    setIsExpand(true);
  }
  return (
    <>
      <article
        onMouseEnter={handleHover}
        onMouseLeave={() => setIsHover(false)}
        className={`${isExpand ? "fixed inset-0 max-w-[800px] z-50 m-auto h-fit pb-20 bg-slate-50 overflow-y-hidden" : "overflow-y-visible relative bg-slate-50/90"}  shrink h-[400px]  p-10 rounded-lg shadow-md shadow-slate-50/70 `}
      >
        <h3
          className="text-slate-900 font-bold text-2xl mb-2
          "
        >
          {figure.nombre}
        </h3>
        <h4 className="italic font-semibold text-lg text-yellow-500/90 mb-2 text-pretty">
          "{figure.frase}"
        </h4>

        <p
          className={` text-slate-700/70 text-base text-balance ${isExpand ? "" : "[mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)][-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"}`}
        >
          {figure.filosofia}
        </p>
        {isHover && !isExpand && (
          <div
            onClick={handleClick}
            className="w-full h-full rounded-lg absolute top-0 left-0 flex justify-center items-center bg-slate-700/60 cursor-pointer"
          >
            <p className="text-slate-50 text-3xl">Ver mas</p>
          </div>
        )}
      </article>
      {isExpand && (
        <div
          onClick={() => setIsExpand(false)}
          className="w-full h-full rounded-lg absolute top-0 left-0 flex justify-center items-center bg-slate-700/60 cursor-pointer z-40"
        ></div>
      )}
    </>
  );
}
