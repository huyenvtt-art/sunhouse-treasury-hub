import { topOpportunities } from '../../data/mockData'
import { formatCurrency } from '../../utils/format'

const statusColors: Record<string, string> = {
  'Mới': 'bg-electric-200 text-navy-900',
  'Đang duyệt': 'bg-electric-500 text-white',
  'Đã duyệt': 'bg-emerald-500 text-white',
}

export function TopOpportunities() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">Top cơ hội KDTC</h3>
      <div className="space-y-3">
        {topOpportunities.map((opp, index) => (
          <div
            key={opp.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <span className="w-7 h-7 rounded-full bg-navy-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
              {index + 1}
            </span>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-navy-900 truncate">{opp.title}</p>
              <p className="text-xs text-slate-500">
                {opp.entity} · {formatCurrency(opp.amount)}
              </p>
            </div>
            <div className="text-right shrink-0">
              <p className="text-sm font-semibold text-electric-500">{opp.efficiency}%</p>
              <span
                className={`text-xs px-2 py-0.5 rounded-full ${
                  statusColors[opp.status] ?? 'bg-slate-200 text-slate-700'
                }`}
              >
                {opp.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
