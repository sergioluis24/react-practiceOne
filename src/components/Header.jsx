import logo from "./../assets/DevJobs-logo-web.webp";
import { Link } from "./Link";
import { NavLink } from "react-router";
import { ButtonPrimary } from "./ButtonPrimary";
import { useAuthStore } from "./../store/authStore.js";
import { useFavStore } from "./../store/favStore.js";

export function Header() {
  const { isLogged, logIn, logOut } = useAuthStore();
  const { numFavorites, resetFav } = useFavStore();

  function handleLogout() {
    logOut();
    resetFav();
  }
  return (
    <>
      <header className="navbar w-full py-8 mb-8">
        <nav className=" md:max-w-[920px] md:mx-auto flex mx-auto justify-between items-center">
          <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-gray-400/40 ">
            <NavLink to="/">
              <img src={logo} alt="Logo Debjobs" className="w-full h-auto" />
            </NavLink>
          </div>
          <div className="flex gap-6 items-center">
            {isLogged && (
              <NavLink to="/profile">Profile ❤️({numFavorites()})</NavLink>
            )}
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
              bg={`${!isLogged ? "bg-blue-400/70" : "bg-red-400/70"}`}
              shadow={`${!isLogged ? "shadow-blue-400/70" : "shadow-red-400/70"}`}
              size="md"
              onClick={isLogged ? handleLogout : logIn}
            >
              {!isLogged ? "Iniciar sesion" : "Cerrar sesion"}
            </ButtonPrimary>
          </div>
        </nav>
      </header>
    </>
  );
}
