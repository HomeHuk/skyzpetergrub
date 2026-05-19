import React from 'react';

export default function ProjectCard({ project }) {
  return (
    <div 
      className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-xl p-8 transition-all duration-500 ease-out hover:border-white/20 hover:-translate-y-2"
      style={{
        boxShadow: `0 20px 40px ${project.shadowColor}`
      }}
    >
      {/* เอฟเฟกต์แสงนีออนเรืองแสงเบื้องหลังการ์ดตอน Hover */}
      <div className={`absolute -inset-px bg-gradient-to-r ${project.accentColor} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-sm`} />

      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* Subtitle เล็กๆ ล้ำๆ */}
          <span className={`inline-block text-xs font-mono tracking-widest uppercase bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent mb-3`}>
            {project.subtitle}
          </span>
          
          {/* ชื่อโปรเจกต์ */}
          <h3 className="text-2xl font-light text-white tracking-wide mb-4">
            {project.title}
          </h3>
          
          {/* คำอธิบาย */}
          <p className="text-sm text-gray-400 font-light leading-relaxed mb-8">
            {project.description}
          </p>
        </div>

        {/* แผงปุ่มกดแบบคู่ (Flexbox Layout) */}
        <div className="flex gap-3 w-full">
          {/* ปุ่มที่ 1: เข้าสู่หน้าเว็บหลัก */}
          <a 
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-between px-5 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-xs font-medium tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
          >
            <span>LAUNCH APP</span>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* ปุ่มที่ 2: เข้าสู่หน้าแอดมิน */}
          <a 
            href={project.adminLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-red-500/20 bg-red-500/5 text-xs font-medium tracking-wider text-red-400 transition-all duration-300 hover:bg-red-500 hover:text-white hover:border-red-500"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span>ADMIN</span>
          </a>
        </div>

      </div>
    </div>
  );
}