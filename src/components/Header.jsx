import logo from "./../assets/SmallSquareLogoJpg.jpg";
import { Link } from "./Link";
export function Header() {
  return (
    <>
      <header className="navbar w-full py-8">
        <nav className="container flex mx-auto justify-between items-center">
          <div className="w-12 h-12">
            <Link href="/">
              <img
                src={logo}
                alt="Logo Debjobs"
                className="w-full h-auto rounded-full"
              />
            </Link>
          </div>
          <Link href="/search" className="cursor-pointer">
            Publicar un empleo
          </Link>
        </nav>
      </header>
    </>
  );
}
