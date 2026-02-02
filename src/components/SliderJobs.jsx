import styles from "./Slider.module.css";
export function SliderJobs({ children }) {
  return (
    <section
      className={`${styles.sliderWrapper} flex overflow-x-hidden min-w-[1290px] relative left-[-100px]`}
    >
      <article
        className={`${styles.train} animate-loop-train flex  gap-8  pr-8`}
      >
        {children}
      </article>
      <article
        className={`${styles.train} animate-loop-train flex  gap-8  pr-8`}
      >
        {children}
      </article>
    </section>
  );
}
