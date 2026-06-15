import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { cashFlowData } from '../../data/mockData'

export function CashFlowChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">
        Bản đồ dòng tiền (tỷ VND)
      </h3>
      <ResponsiveContainer width="100%" height={320}>
        <BarChart data={cashFlowData} barGap={2}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#64748b' }} />
          <YAxis tick={{ fontSize: 12, fill: '#64748b' }} />
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontSize: '13px',
            }}
            formatter={(value) => [`${value} tỷ`, undefined]}
          />
          <Legend wrapperStyle={{ fontSize: '13px' }} />
          <Bar dataKey="inflow" name="Dòng vào" fill="#0066ff" radius={[4, 4, 0, 0]} />
          <Bar dataKey="outflow" name="Dòng ra" fill="#1b2a4a" radius={[4, 4, 0, 0]} />
          <Bar dataKey="net" name="Ròng" fill="#66aaff" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
