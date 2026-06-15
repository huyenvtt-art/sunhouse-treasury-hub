import { NavLink } from 'react-router-dom'

const navItems = [
  { to: '/', label: 'Tổng quan tài chính tập đoàn', icon: '◈' },
  { to: '/ho-so', label: 'Hồ sơ kinh doanh tài chính', icon: '◉' },
]

export function Sidebar() {
  return (
    <aside className="w-64 shrink-0 bg-navy-900 text-white flex flex-col">
      <div className="px-5 py-6 border-b border-navy-700">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-electric-500 flex items-center justify-center font-bold text-lg">
            S
          </div>
          <div>
            <p className="text-xs text-electric-300 font-medium tracking-wide">SUNHOUSE</p>
            <p className="text-sm font-semibold leading-tight">Treasury Hub</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-electric-500 text-white'
                  : 'text-slate-300 hover:bg-navy-700 hover:text-white'
              }`
            }
          >
            <span className="text-electric-300">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="px-5 py-4 border-t border-navy-700">
        <p className="text-xs text-slate-400">Phiên bản 1.0.0</p>
        <p className="text-xs text-slate-500 mt-1">© 2026 Sunhouse Group</p>
      </div>
    </aside>
  )
}
