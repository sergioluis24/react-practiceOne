import logo from "./../assets/SmallSquareLogoJpg.jpg";
import { Link } from "./Link";
export function Header() {
  return (
    <>
      <header className="navbar w-full py-8">
        <nav className=" md:max-w-[920px] md:mx-auto flex mx-auto justify-between items-center">
          <div className="w-12 h-12">
            <Link href="/">
              <img
                src={logo}
                alt="Logo Debjobs"
                className="w-full h-auto rounded-full"
              />
            </Link>
          </div>
          <div className="flex gap-4">
            <Link href="/search">Buscar un empleo</Link>
            <Link href="/contact">Contacto</Link>
          </div>
        </nav>
      </header>
    </>
  );
}
