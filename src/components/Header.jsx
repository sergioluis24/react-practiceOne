import logo from "./../assets/SmallSquareLogoJpg.jpg";
import { Link } from "./Link";
import { NavLink } from "react-router";
import { ButtonPrimary } from "./ButtonPrimary";
import { useAuth } from "../context/authContext.jsx";
export function Header() {
  const { isLogged, logIn, logOut } = useAuth();
  return (
    <>
      <header className="navbar w-full py-8 mb-8">
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
          <div className="flex gap-6 items-center">
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive
                  ? "opacity-60 pointer-events-none select-none "
                  : "hover:text-shadow-sm hover:text-shadow-slate-50/40 transition"
              }
            >
              Buscar un empleo
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "opacity-60 pointer-events-none select-none"
                  : "hover:text-shadow-sm hover:text-shadow-slate-50/40 transition"
              }
            >
              Contacto
            </NavLink>
            <ButtonPrimary
              bg={`${isLogged ? "bg-blue-400/70" : "bg-red-400/70"}`}
              shadow={`${isLogged ? "shadow-blue-400/70" : "shadow-red-400/70"}`}
              size="md"
              onClick={isLogged ? logOut : logIn}
            >
              {isLogged ? "Iniciar sesion" : "Cerrar sesion"}
            </ButtonPrimary>
          </div>
        </nav>
      </header>
    </>
  );
}
