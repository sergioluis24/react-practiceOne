import logo from "./../assets/SmallSquareLogoJpg.jpg";
export default function Header() {
  return (
    <div>
      <header className="navbar w-full py-8">
        <nav className="container flex mx-auto justify-between">
          <div className="w-12 h-12">
            <img
              src={logo}
              alt="Logo Debjobs"
              className="w-full h-auto rounded-full"
            />
          </div>
          <button className="cursor-pointer">Publicar un empleo</button>
        </nav>
      </header>
    </div>
  );
}
