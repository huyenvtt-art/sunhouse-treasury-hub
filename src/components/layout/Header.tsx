export function Header() {
  return (
    <header className="bg-white border-b border-slate-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg font-bold text-navy-900 tracking-tight">
            QUẢN TRỊ VÀ KINH DOANH TÀI CHÍNH
          </h1>
          <p className="text-sm text-electric-500 font-semibold mt-0.5">
            TẬP ĐOÀN SUNHOUSE
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="text-right">
            <p className="text-sm font-medium text-navy-900">Nguyễn Văn A</p>
            <p className="text-xs text-slate-500">CFO — Tập đoàn</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-navy-700 text-white flex items-center justify-center text-sm font-semibold">
            NA
          </div>
        </div>
      </div>
    </header>
  )
}
