import React from 'react'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'

export default function App() {
  return (
    // เปลี่ยนมาใช้สไตล์ Gradient ยุคใหม่ (ฝั่งซ้ายเขียวเกษตรออร์แกนิก ฝั่งขวาน้ำเงิน-เทาไซเบอร์วิศวกรรม)
    <div className="relative min-h-screen w-full bg-gradient-to-br from-emerald-950/80 via-slate-950 to-blue-950/85 font-sans text-white flex items-center justify-center p-4 sm:p-8 overflow-x-hidden antialiased">
      
      {/* เพิ่มลูกเล่นแสงไฟนีออนพรีเมียมดวงใหญ่ (Glow Effect) กระจายอยู่เบื้องหลัง */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* หน้ากากแก้วครอบระบบ (Glassmorphism Container) เด่นๆ คลีนๆ */}
      <div className="relative z-10 w-full max-w-7xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-6 sm:p-12 md:p-16 shadow-2xl my-8">
        
        {/* หัวข้อแบรนด์หลัก */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.3em] uppercase bg-gradient-to-r from-emerald-400 via-indigo-200 to-blue-400 bg-clip-text text-transparent">
            ECOSYSTEM HUB
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wider text-white mt-3 mb-6 font-mono">
            SKYZPETERGRUB
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6" />
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            ศูนย์รวมนวัตกรรมและการพัฒนาซอฟต์แวร์แบบองค์รวม ขับเคลื่อนทุกธุรกิจสู่ระบบดิจิทัลอย่างเต็มรูปแบบ
          </p>
        </header>

        {/* โซนแสดงการ์ดจริง ครบทั้ง 4 โปรเจกต์แน่นอนตามที่วน Loop ไว้ */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </main>

        {/* ส่วนท้ายแสดงลิขสิทธิ์ */}
        <footer className="text-center mt-12 sm:mt-16 pt-6 border-t border-white/5 text-xs font-mono text-gray-500 tracking-widest">
          © {new Date().getFullYear()} SKYZPETERGRUB. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </div>
  )
}