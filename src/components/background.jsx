import Header from "./header";
export default function Background() {
  return (
    <div className="min-h-screen w-full bg-[#0f172a] relative">
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      <Header />
      <main>
        <h1>Hola</h1>
      </main>
      {/* Your Content/Components */}
    </div>
  );
}
