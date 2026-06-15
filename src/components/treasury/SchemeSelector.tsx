import type { SchemeParams, SchemeType } from '../../types'

interface SchemeSelectorProps {
  schemes: SchemeParams[]
  selected: SchemeType
  onSelect: (scheme: SchemeType) => void
}

export function SchemeSelector({ schemes, selected, onSelect }: SchemeSelectorProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {schemes.map((scheme) => {
        const isActive = scheme.type === selected
        return (
          <button
            key={scheme.type}
            type="button"
            onClick={() => onSelect(scheme.type)}
            className={`rounded-xl p-4 border-2 text-left transition-all ${
              isActive
                ? 'border-electric-500 bg-electric-500/5 shadow-md'
                : 'border-slate-200 bg-white hover:border-electric-300'
            }`}
          >
            <div className="flex items-center gap-2 mb-2">
              <span
                className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${
                  isActive ? 'bg-electric-500 text-white' : 'bg-navy-900 text-white'
                }`}
              >
                {scheme.type}
              </span>
              <span className="text-sm font-semibold text-navy-900">{scheme.label}</span>
            </div>
            <p className="text-xs text-slate-500 mb-3">{scheme.description}</p>
            <div className="flex gap-4 text-xs">
              <div>
                <span className="text-slate-400">Lợi suất</span>
                <p className="font-semibold text-electric-500">{scheme.interestRate}%</p>
              </div>
              <div>
                <span className="text-slate-400">Kỳ hạn</span>
                <p className="font-semibold text-navy-900">{scheme.durationDays} ngày</p>
              </div>
              <div>
                <span className="text-slate-400">Rủi ro</span>
                <p className="font-semibold text-navy-900">
                  {(scheme.riskFactor * 100).toFixed(0)}%
                </p>
              </div>
            </div>
          </button>
        )
      })}
    </div>
  )
}
