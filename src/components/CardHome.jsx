export function CardHome({ job }) {
  return (
    <>
      <div class="w-[350px] flex flex-col shrink-0 bg-neutral-primary-soft   p-10 border border-default border-slate-50/50 rounded-xl shadow-xs cursor-pointer">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="icon icon-tabler icons-tabler-filled icon-tabler-briefcase"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z" />
          </svg>
        </div>
        <a href="#">
          <h5 class="mb-4 text-2xl font-semibold tracking-tight text-heading">
            {job.titulo}
          </h5>
        </a>
        <div className="flex flex-col justify-between h-full ">
          <p
            class="mb-3 text-body text-red-50/80 text-pretty  max-h-56
  overflow-hidden
  [mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]
  [-webkit-mask-image:linear-gradient(to_bottom,black_70%,transparent_100%)]"
          >
            {job.descripcion}
          </p>
          <a
            href="#"
            class="inline-flex text-xl font-medium items-center text-fg-brand hover:underline text-[#1d7dde] hover:text-shadow-sm hover:text-shadow-[#1d7dde]/20"
          >
            Aplicar
          </a>
        </div>
      </div>
    </>
  );
}
