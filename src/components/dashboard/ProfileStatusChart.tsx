import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'
import { profileStatus } from '../../data/mockData'

export function ProfileStatusChart() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-4">Tình trạng hồ sơ</h3>
      <ResponsiveContainer width="100%" height={280}>
        <PieChart>
          <Pie
            data={profileStatus}
            dataKey="count"
            nameKey="status"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={100}
            paddingAngle={2}
          >
            {profileStatus.map((entry) => (
              <Cell key={entry.status} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              borderRadius: '8px',
              border: '1px solid #e2e8f0',
              fontSize: '13px',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
      <div className="flex flex-wrap gap-3 mt-2 justify-center">
        {profileStatus.map((item) => (
          <div key={item.status} className="flex items-center gap-1.5 text-xs text-slate-600">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            {item.status} ({item.count})
          </div>
        ))}
      </div>
    </div>
  )
}
