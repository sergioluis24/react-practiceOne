import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Iniciar sesión", { email, password, remember });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md bg-slate-900/80 border border-slate-700 rounded-2xl shadow-2xl shadow-amber-900/50 p-8 backdrop-blur-sm">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Inicia sesión
          </h1>
          <p className="text-slate-400 mt-2">Accede a tu perfil y favoritos</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              placeholder="ejemplo@correo.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-300 mb-1"
            >
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/60 p-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-amber-400"
              placeholder="********"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-300">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="h-4 w-4 rounded border-slate-600 bg-slate-800 text-amber-400 focus:ring-amber-400"
              />
              Recuérdame
            </label>
            <button
              type="button"
              className="text-amber-300 hover:text-amber-200"
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 px-4 py-2 text-base font-bold text-slate-950 shadow-lg shadow-amber-500/40 hover:opacity-90 transition"
          >
            Entrar
          </button>
        </form>

        <p className="mt-6 text-center text-slate-400 text-sm">
          ¿No tienes cuenta?{" "}
          <a
            href="#"
            className="text-amber-300 hover:text-amber-200 font-semibold"
          >
            Regístrate
          </a>
        </p>
      </div>
    </div>
  );
}
