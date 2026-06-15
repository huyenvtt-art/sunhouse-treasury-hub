interface MetricCardProps {
  label: string
  value: string
  subValue?: string
  trend?: 'up' | 'down' | 'neutral'
  accent?: boolean
}

export function MetricCard({ label, value, subValue, trend, accent }: MetricCardProps) {
  const trendColor =
    trend === 'up' ? 'text-emerald-600' : trend === 'down' ? 'text-red-500' : 'text-slate-500'

  return (
    <div
      className={`rounded-xl p-4 border transition-shadow hover:shadow-md ${
        accent
          ? 'bg-navy-900 border-navy-700 text-white'
          : 'bg-white border-slate-200'
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-wider ${
          accent ? 'text-electric-300' : 'text-slate-500'
        }`}
      >
        {label}
      </p>
      <p
        className={`text-xl font-bold mt-1 ${
          accent ? 'text-white' : 'text-navy-900'
        }`}
      >
        {value}
      </p>
      {subValue && (
        <p className={`text-xs mt-1 ${accent ? 'text-slate-300' : trendColor}`}>
          {subValue}
        </p>
      )}
    </div>
  )
}
