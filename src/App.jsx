import React, { useState } from 'react'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'

export default function App() {
  // 1. ระบบเช็กสถานะการล็อกอิน
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // 🔑 ยืนยันรหัสผ่านปลดล็อก (User: admin / Pass: promcare2026)
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'promcare2026') {
      setIsLoggedIn(true);
      setShowLoginModal(false);
      setError('');
    } else {
      setError('รหัสผ่านไม่ถูกต้องครับพี่! กรุณาลองใหม่อีกครั้ง');
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-gradient-to-br from-emerald-950/80 via-slate-950 to-blue-950/85 font-sans text-white flex items-center justify-center p-4 sm:p-8 overflow-x-hidden antialiased">
      
      {/* ลูกเล่นแสงไฟนีออนพรีเมียมเบื้องหลัง */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* หน้ากากแก้วครอบระบบ (Glassmorphism Container) */}
      <div className="relative z-10 w-full max-w-7xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-2xl p-6 sm:p-12 md:p-16 shadow-2xl my-8">
        
        {/* 🔑 ปุ่มล็อกอินดีไซน์ Quiet Luxury มุมขวาบน */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-8 z-20">
          <button
            onClick={() => isLoggedIn ? setIsLoggedIn(false) : setShowLoginModal(true)}
            className={`px-4 py-1.5 rounded-full text-xs font-mono tracking-wider border transition-all duration-300 backdrop-blur-md ${
              isLoggedIn 
                ? 'bg-red-500/10 border-red-500/30 text-red-400 hover:bg-red-500/20' 
                : 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
            }`}
          >
            {isLoggedIn ? '🔒 LOCK HUB' : '🔑 UNLOCK LINKS'}
          </button>
        </div>

        {/* หัวข้อแบรนด์หลัก */}
        <header className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-[0.3em] uppercase bg-gradient-to-r from-emerald-400 via-indigo-200 to-blue-400 bg-clip-text text-transparent">
            ECOSYSTEM HUB
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extralight tracking-wider text-white mt-3 mb-6 font-mono">
            SKYZPETERGRUB
          </h1>
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/40 to-transparent mx-auto mb-6" />
          
          {/* ✨ ข้อความแสดงความมุ่งมั่นพัฒนาธุรกิจพรีเมียมที่พี่เลือก */}
          <p className="text-sm sm:text-base text-gray-300 font-light leading-relaxed max-w-xl mx-auto">
            เรามุ่งมั่นร่วมสร้างและผลักดันทุกเป้าหมายทางธุรกิจ บ่มเพาะศักยภาพเพื่อก้าวสู่ความสำเร็จที่ไร้ขีดจำกัด
          </p>

          {!isLoggedIn && (
            <p className="text-xs font-mono text-emerald-400/70 mt-4 animate-pulse">
              * กรุณาปลดล็อกระบบที่มุมขวาบน เพื่อเข้าใช้งานลิงก์แอปพลิเคชัน
            </p>
          )}
        </header>

        {/* โซนแสดงการ์ดจริง (ดึงจากไฟล์ดาต้าหลักของพี่โดยตรง ครบ 4 ใบ ไม่สลับแน่นอน) */}
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} isLoggedIn={isLoggedIn} />
          ))}
        </main>

        {/* ส่วนท้ายแสดงลิขสิทธิ์ */}
        <footer className="text-center mt-12 sm:mt-16 pt-6 border-t border-white/5 text-xs font-mono text-gray-500 tracking-widest">
          © {new Date().getFullYear()} SKYZPETERGRUB. ALL RIGHTS RESERVED.
        </footer>
      </div>

      {/* หน้าต่าง Popup สําหรับ Login */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-sm rounded-2xl border border-white/10 bg-slate-950/95 p-8 shadow-2xl">
            <button type="button" onClick={() => setShowLoginModal(false)} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">✕</button>
            <h3 className="text-center text-lg font-mono tracking-wider text-emerald-400 mb-6">🔒 AUTHORIZED ACCESS ONLY</h3>
            {error && <p className="text-red-400 text-xs text-center mb-4 font-sans bg-red-500/10 py-1.5 rounded border border-red-500/20">{error}</p>}
            <form onSubmit={handleLoginSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">USERNAME</label>
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-black/50 text-white font-mono text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="admin" required />
              </div>
              <div>
                <label className="block text-xs font-mono text-gray-400 mb-1.5">PASSWORD</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-4 py-2.5 rounded-lg border border-white/10 bg-black/50 text-white font-mono text-sm focus:outline-none focus:border-emerald-500/50 transition-colors" placeholder="••••••••" required />
              </div>
              <button type="submit" className="w-full mt-2 py-3 rounded-lg bg-emerald-500 text-black font-mono font-bold text-sm tracking-wider hover:bg-emerald-400 transition-colors shadow-lg shadow-emerald-500/20">VERIFY PASSWORD</button>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}