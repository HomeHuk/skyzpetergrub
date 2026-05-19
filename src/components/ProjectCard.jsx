import React from 'react'

export default function ProjectCard({ project, isLoggedIn }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 group flex flex-col justify-between h-full">
      <div>
        {/* ชื่อระบบงานของการ์ดแต่ละใบ */}
        <h3 className="text-xl font-mono tracking-wide text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* รายละเอียดคำอธิบายระบบเดิมของพี่ทั้งหมด */}
        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* ⚡ ปุ่มกดเข้าลิงก์ที่ถูกควบคุมด้วยสถานะล็อกอิน */}
      <div className="mt-4">
        <a 
          href={isLoggedIn ? project.link : undefined}
          target={isLoggedIn ? "_blank" : undefined}
          rel="noreferrer"
          className={`w-full block text-center py-2.5 rounded-xl font-mono text-xs tracking-widest uppercase font-bold transition-all duration-300 ${
            isLoggedIn 
              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/10 cursor-pointer opacity-100' 
              : 'bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed opacity-40'
          }`}
        >
          {isLoggedIn ? '⚡ CONNECT SYSTEM' : '🔒 LINK LOCKED'}
        </a>
      </div>
    </div>
  )
}