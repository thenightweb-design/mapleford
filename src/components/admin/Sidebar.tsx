'use client';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout: () => void;
}

const tabs = [
  { id: 'overview',   label: 'Overview',        icon: '▦'  },
  { id: 'enquiries',  label: 'Enquiries',        icon: '✉'  },
  { id: 'gallery',    label: 'Gallery',          icon: '⊞'  },
  { id: 'blogs',      label: 'Blog Posts',       icon: '✎'  },
  { id: 'seo',        label: 'SEO Management',   icon: '◎'  },
];

export default function Sidebar({ activeTab, setActiveTab, onLogout }: SidebarProps) {
  return (
    <div className="w-64 bg-[#0E1117] text-white flex flex-col h-screen fixed left-0 top-0 z-50 border-r border-white/5">
      {/* Brand */}
      <div className="px-7 py-7 border-b border-white/5">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
            <span className="text-white font-black text-sm">M</span>
          </div>
          <div>
            <p className="font-black text-white text-sm leading-none tracking-tight">Mapleford</p>
            <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mt-0.5">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-5 space-y-1 overflow-y-auto">
        <p className="text-[9px] font-black text-slate-600 uppercase tracking-[0.3em] px-3 mb-3">Navigation</p>
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl transition-all duration-200 group relative ${
                isActive
                  ? 'bg-red-600/15 text-white'
                  : 'text-slate-500 hover:bg-white/5 hover:text-slate-200'
              }`}
            >
              {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-red-500 rounded-r-full" />
              )}
              <span className={`text-base w-5 text-center flex-shrink-0 ${isActive ? 'text-red-400' : 'text-slate-600 group-hover:text-slate-300'}`}>
                {tab.icon}
              </span>
              <span className={`font-bold text-sm tracking-tight ${isActive ? 'text-white' : ''}`}>
                {tab.label}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="px-4 pb-5 space-y-1 border-t border-white/5 pt-4">
        <a
          href="/"
          target="_blank"
          className="w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-slate-500 hover:bg-white/5 hover:text-slate-200 transition-all group"
        >
          <span className="text-base w-5 text-center text-slate-600 group-hover:text-slate-300">↗</span>
          <span className="font-bold text-sm">View Website</span>
        </a>
        <button
          onClick={onLogout}
          className="w-full flex items-center space-x-3 px-3.5 py-3 rounded-xl text-slate-500 hover:bg-red-900/20 hover:text-red-400 transition-all group"
        >
          <span className="text-base w-5 text-center text-slate-600 group-hover:text-red-400">⊗</span>
          <span className="font-bold text-sm">Log Out</span>
        </button>
      </div>
    </div>
  );
}
