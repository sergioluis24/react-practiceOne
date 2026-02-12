import { useEffect, useState } from "react";
import { IconArrowUp } from "../icons/IconArrowUp";

export function ButtonBack() {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    if (isActive) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [isActive]);
  function handleClick() {
    if (!isActive) {
      setIsActive(true);
    } else setIsActive(false);
  }

  return (
    <>
      <article
        onClick={handleClick}
        className="p-2 rounded-full  bg-yellow-200 w-12 h-12 fixed z-50 bottom-10 right-6 cursor-pointer hover:brightness-105 hover:shadow-md hover:shadow-yellow-200/50 transition"
      >
        <IconArrowUp
          onClick={handleClick}
          className="fill-zinc-950 w-full h-auto pointer-events-none"
        />
      </article>
    </>
  );
}
