import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const profileData = {
    name: "Alex Rivera",
    title: "Senior Product Designer",
    location: "San Francisco, CA",
    image: "https://i.pravatar.cc/300?img=12",
    stats: {
      applied: 12,
      views: 45,
      saved: 8,
    },
    about:
      "Passionate Product Designer with 8+ years of experience in building digital products. Specialized in user-centric design systems and cross-platform experiences. Currently focused on AI-driven interfaces.",
  };

  const recentApplications = [
    {
      id: 1,
      title: "Senior UX Designer",
      company: "Google • California, USA",
      status: "IN REVIEW",
      color: "orange",
    },
    {
      id: 2,
      title: "Lead Interface Designer",
      company: "Apple • Remote",
      status: "INTERVIEWING",
      color: "green",
    },
  ];

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
    <div className="bg-slate-950 min-h-screen text-white pb-24">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-6 border-b border-slate-800">
        <button className="text-2xl">←</button>
        <h1 className="text-2xl font-bold">My Profile</h1>
        <button className="text-2xl">⚙️</button>
      </div>

      {/* Profile Section */}
      <div className="text-center py-8 px-6">
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

      {/* Stats Section */}
      <div className="grid grid-cols-3 gap-4 px-6 mb-8">
        <div className="bg-slate-900 rounded-lg p-4 text-center border border-slate-800">
          <p className="text-blue-400 text-3xl font-bold">{profileData.stats.applied}</p>
          <p className="text-slate-400 text-sm mt-2">APPLIED</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 text-center border border-slate-800">
          <p className="text-blue-400 text-3xl font-bold">{profileData.stats.views}</p>
          <p className="text-slate-400 text-sm mt-2">VIEWS</p>
        </div>
        <div className="bg-slate-900 rounded-lg p-4 text-center border border-slate-800">
          <p className="text-blue-400 text-3xl font-bold">{profileData.stats.saved}</p>
          <p className="text-slate-400 text-sm mt-2">SAVED</p>
        </div>
      </div>

      {/* About Me Section */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">About Me</h3>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="text-blue-400 text-sm"
          >
            Edit
          </button>
        </div>
        <p className="text-slate-300 leading-relaxed">{profileData.about}</p>
      </div>

      {/* Recent Applications Section */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Recent Applications</h3>
          <button className="text-blue-400 text-sm">View All</button>
        </div>

        <div className="space-y-4">
          {recentApplications.map((app) => (
            <div
              key={app.id}
              className="bg-slate-900 rounded-lg p-4 border border-slate-800 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-lg font-bold">
                {app.title[0]}
              </div>
              <div className="flex-1">
                <p className="font-semibold mb-1">{app.title}</p>
                <p className="text-sm text-slate-400">{app.company}</p>
              </div>
              <span
                className={`text-xs font-bold px-3 py-1 rounded ${
                  app.color === "orange"
                    ? "bg-orange-900/40 text-orange-400"
                    : "bg-green-900/40 text-green-400"
                }`}
              >
                {app.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Experience Section */}
      <div className="px-6 mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold">Experience</h3>
          <button className="text-blue-400 text-2xl">➕</button>
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

      {/* Skills Section */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Skills</h3>
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

      {/* Education Section */}
      <div className="px-6 mb-8">
        <h3 className="text-xl font-bold mb-4">Education</h3>
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

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-950 border-t border-slate-800 flex justify-around items-center py-3">
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400">
          <span className="text-2xl">🔍</span>
          <p className="text-xs">Search</p>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400">
          <span className="text-2xl">💬</span>
          <p className="text-xs">Messages</p>
        </button>
        <button className="flex flex-col items-center gap-1 text-slate-400 hover:text-blue-400">
          <span className="text-2xl">💼</span>
          <p className="text-xs">Jobs</p>
        </button>
        <button className="flex flex-col items-center gap-1 text-blue-400">
          <span className="text-2xl">👤</span>
          <p className="text-xs">Profile</p>
        </button>
      </div>
    </div>
  );
}
