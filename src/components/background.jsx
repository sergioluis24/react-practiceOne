export function Background({ children }) {
  return (
    <div
      id="background"
      className="min-h-screen w-full bg-[#0f172a] relative flex flex-col overflow-x-hidden"
    >
      {/* Blue Radial Glow Background */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle 600px at 50% 50%, rgba(59,130,246,0.3), transparent)`,
        }}
      />
      {children}
      {/* Your Content/Components */}
    </div>
  );
}
