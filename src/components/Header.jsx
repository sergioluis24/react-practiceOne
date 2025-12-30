export default function Header() {
  return (
    <div>
      <header className="navbar w-full py-8">
        <nav className="container flex mx-auto justify-between">
          <h3>DevJobs</h3>
          <p>Empleos</p>
          <button>Publicar un empleo</button>
        </nav>
      </header>
    </div>
  );
}
