import logo from "./../assets/SmallSquareLogoJpg.jpg";
export function Header() {
  return (
    <>
      <header className="navbar w-full py-8">
        <nav className="container flex mx-auto justify-between items-center">
          <div className="w-12 h-12">
            <a href="/">
              <img
                src={logo}
                alt="Logo Debjobs"
                className="w-full h-auto rounded-full"
              />
            </a>
          </div>
          <a href="/search" className="cursor-pointer">
            Publicar un empleo
          </a>
        </nav>
      </header>
    </>
  );
}
