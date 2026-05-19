import React from 'react'

export default function ProjectCard({ project, isLoggedIn }) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/40 p-6 sm:p-8 backdrop-blur-md transition-all duration-300 hover:border-emerald-500/30 hover:bg-slate-900/60 group flex flex-col justify-between h-full">
      <div>
        {/* ชื่อธุรกิจ */}
        <h3 className="text-xl font-mono tracking-wide text-white mb-3 group-hover:text-emerald-400 transition-colors">
          {project.title}
        </h3>

        {/* คำอธิบายธุรกิจ */}
        <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">
          {project.description}
        </p>
      </div>

      {/* โซนปุ่มกดลิงก์แอปพลิเคชัน */}
      <div className="mt-4">
        {isLoggedIn ? (
          // 🔓 พรึ่บ! เมื่อล็อกอินผ่าน: จะแบ่งออกเป็น 2 ปุ่มซ้าย-ขวาคู่กัน (User App และ Admin App)
          <div className="grid grid-cols-2 gap-3">
            <a 
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="block text-center py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase font-bold bg-gradient-to-r from-emerald-500 to-teal-500 text-black hover:from-emerald-400 hover:to-teal-400 shadow-lg shadow-emerald-500/10 transition-all duration-300"
            >
              ⚡ USER APP
            </a>
            <a 
              href={project.adminLink}
              target="_blank"
              rel="noreferrer"
              className="block text-center py-2.5 rounded-xl font-mono text-xs tracking-wider uppercase font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-black hover:from-amber-400 hover:to-orange-400 shadow-lg shadow-amber-500/10 transition-all duration-300"
            >
              ⚙️ ADMIN APP
            </a>
          </div>
        ) : (
          // 🔒 เมื่อยังไม่ล็อกอิน: แสดงปุ่มเดียวล็อกไว้เพื่อความปลอดภัย
          <div className="w-full block text-center py-2.5 rounded-xl font-mono text-xs tracking-widest uppercase font-bold bg-white/5 text-gray-500 border border-white/5 cursor-not-allowed opacity-40">
            🔒 LINK LOCKED
          </div>
        )}
      </div>
    </div>
  )
}