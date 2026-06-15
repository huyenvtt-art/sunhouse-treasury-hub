import { dashboardMetrics } from '../data/mockData'
import { formatCurrency, formatPercent } from '../utils/format'
import { CashFlowChart } from '../components/dashboard/CashFlowChart'
import { EntityTable } from '../components/dashboard/EntityTable'
import { MetricCard } from '../components/dashboard/MetricCard'
import { ProfileStatusChart } from '../components/dashboard/ProfileStatusChart'
import { TopOpportunities } from '../components/dashboard/TopOpportunities'

export function DashboardPage() {
  const m = dashboardMetrics

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-bold text-navy-900">Tổng quan tài chính tập đoàn</h2>
        <p className="text-sm text-slate-500 mt-1">
          Cập nhật dữ liệu tài chính tập đoàn — Q2 2026
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <MetricCard label="Tổng quỹ" value={formatCurrency(m.totalFund)} accent />
        <MetricCard label="CFO" value={formatCurrency(m.cfo)} subValue="Hoạt động" trend="up" />
        <MetricCard label="CFI" value={formatCurrency(m.cfi)} subValue="Đầu tư" trend="down" />
        <MetricCard label="CFF" value={formatCurrency(m.cff)} subValue="Tài chính" trend="down" />
        <MetricCard label="Dự thu" value={formatCurrency(m.expectedIncome)} trend="up" />
        <MetricCard label="Dự chi" value={formatCurrency(m.expectedExpense)} trend="down" />
        <MetricCard label="Dự tồn" value={formatCurrency(m.expectedBalance)} trend="up" />
        <MetricCard label="Tổng GTGD" value={formatCurrency(m.totalTransactionValue)} />
        <MetricCard label="Tổng hiệu quả" value={formatPercent(m.totalEfficiency)} trend="up" />
        <MetricCard label="Quỹ thưởng" value={formatCurrency(m.bonusFund)} accent />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <CashFlowChart />
        </div>
        <ProfileStatusChart />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopOpportunities />
        <EntityTable />
      </div>
    </div>
  )
}
