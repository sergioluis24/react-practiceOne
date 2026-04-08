import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    name: "Alex Rivera",
    title: "Senior Product Designer",
    location: "San Francisco, CA",
    image: "https://i.pravatar.cc/300?img=12",
    stats: {
      favorites: 28,
      saved: 8,
      recommended: 13,
    },
    about:
      "Passionate Product Designer with 8+ years of experience in building digital products. Specialized in user-centric design systems and cross-platform experiences. Currently focused on AI-driven interfaces.",
  };

  const experience = [
    {
      id: 1,
      title: "Senior Product Designer",
      company: "Meta • Full-time",
      period: "Jan 2021 - Present • 3 yrs 2 mos",
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Spotify • Contract",
      period: "Jun 2018 - Dec 2020 • 2 yrs 7 mos",
    },
  ];

  const skills = [
    "Product Strategy",
    "Figma",
    "User Research",
    "React Native",
    "Prototyping",
    "Design Systems",
  ];

  const education = {
    school: "Stanford University",
    degree: "Master of Science, Human-Computer Interaction",
    period: "2014 - 2016",
  };

  return (
    <div className="bg-gradient-to-br from-slate-950 to-slate-900 min-h-screen text-white pb-12">
      {/* Header */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Perfil
        </h1>
        <p className="text-slate-400 mt-1">
          Visión general de actividad y favoritos
        </p>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center py-8 px-6">
        <div className="relative w-32 h-32 mx-auto mb-6">
          <img
            src={profileData.image}
            alt={profileData.name}
            className="w-full h-full rounded-full object-cover border-4 border-slate-800"
          />
          <div className="absolute bottom-2 right-2 w-8 h-8 bg-blue-500 rounded-full border-2 border-slate-950"></div>
        </div>

        <h2 className="text-3xl font-bold mb-2">{profileData.name}</h2>
        <p className="text-blue-400 text-lg mb-1">{profileData.title}</p>
        <p className="text-slate-400 flex items-center justify-center gap-1">
          📍 {profileData.location}
        </p>
      </div>

      {/* Favorites Stats */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-3">Estadísticas de favoritos</h3>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div className="bg-slate-900 rounded-xl border border-amber-500/40 p-5 shadow-xl shadow-amber-500/20">
            <p className="text-amber-300 text-xs uppercase tracking-wider mb-2">
              Favoritos guardados
            </p>
            <p className="text-4xl font-extrabold text-amber-400">
              {profileData.stats.favorites}
            </p>
            <p className="text-slate-400 text-sm mt-1">
              Tus trabajos guardados como favoritos
            </p>
          </div>
        </div>
      </div>

      {/* Sobre mí */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Sobre mí</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-amber-300 text-sm"
          >
            Editar
          </button>
        </div>
        <p className="text-slate-300 leading-relaxed">{profileData.about}</p>
      </div>

      {/* Experiencia */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Experiencia</h3>
          <button className="text-amber-300 text-2xl">➕</button>
        </div>

        <div className="space-y-4">
          {experience.map((exp) => (
            <div key={exp.id} className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-lg font-bold flex-shrink-0">
                {exp.title[0]}
              </div>
              <div>
                <p className="font-semibold">{exp.title}</p>
                <p className="text-sm text-slate-400">{exp.company}</p>
                <p className="text-xs text-slate-500 mt-1">{exp.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Habilidades */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Habilidades</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <button
              key={skill}
              className="px-4 py-2 rounded-full border border-blue-500 text-blue-400 text-sm hover:bg-blue-500/10 transition"
            >
              {skill}
            </button>
          ))}
        </div>
      </div>

      {/* Educación */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Educación</h3>
        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-lg bg-blue-900/40 flex items-center justify-center text-lg flex-shrink-0">
            🎓
          </div>
          <div>
            <p className="font-semibold">{education.school}</p>
            <p className="text-sm text-slate-400">{education.degree}</p>
            <p className="text-xs text-slate-500 mt-1">{education.period}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
