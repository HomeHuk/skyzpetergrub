import React from 'react'

export default function ProjectCard({ project, isLoggedIn }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 group flex flex-col justify-between h-full">
      <div>
        {/* รูปภาพพรีเมียมของแต่ละโปรเจกต์ */}
        <div className="relative h-48 w-full overflow-hidden rounded-xl mb-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
        </div>

        {/* ชื่อระบบงาน */}
        <h3 className="text-xl font-mono tracking-wide text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* รายละเอียดคำอธิบายระบบ */}
        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* ปุ่มกดเปิดลิงก์ระบบงาน (ผูกติดสิทธิ์รับคำสั่งจากปุ่มใหญ่ด้านบน) */}
      <div className="mt-auto">
        <a 
          href={isLoggedIn ? project.link : undefined}
          target={isLoggedIn ? "_blank" : undefined}
          rel="noreferrer"
          className={`w-full block text-center py-3 rounded-xl font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
            isLoggedIn 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/10 cursor-pointer opacity-100' 
              : 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed opacity-50'
          }`}
        >
          {isLoggedIn ? '⚡ CONNECT SYSTEM' : '🔒 SYSTEM LOCKED'}
        </a>
      </div>
    </div>
  )
}