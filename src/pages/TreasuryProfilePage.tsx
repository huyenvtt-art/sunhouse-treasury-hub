import { useState } from 'react'
import { sampleOpportunity, schemeParams } from '../data/mockData'
import type { SchemeType } from '../types'
import {
  calculateBonus,
  calculateEfficiency,
  calculateExpectedReturn,
} from '../utils/calculations'
import { formatCurrency, formatPercent } from '../utils/format'
import { CashFlowDiagram } from '../components/treasury/CashFlowDiagram'
import { SchemeSelector } from '../components/treasury/SchemeSelector'
import { WorkflowPipeline } from '../components/treasury/WorkflowPipeline'

export function TreasuryProfilePage() {
  const [selectedScheme, setSelectedScheme] = useState<SchemeType>(sampleOpportunity.scheme)
  const [amount, setAmount] = useState(sampleOpportunity.amount)

  const scheme = schemeParams.find((s) => s.type === selectedScheme)!
  const efficiency = calculateEfficiency(amount, scheme)
  const bonus = calculateBonus(amount, efficiency, scheme)
  const expectedReturn = calculateExpectedReturn(amount, scheme)

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-navy-900">Hồ sơ kinh doanh tài chính</h2>
          <p className="text-sm text-slate-500 mt-1">
            {sampleOpportunity.id} — {sampleOpportunity.title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full">
            {sampleOpportunity.entity}
          </span>
          <span className="text-xs font-medium text-electric-500 bg-electric-500/10 px-3 py-1.5 rounded-full">
            Đang duyệt
          </span>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-5">
        <h3 className="text-sm font-semibold text-navy-900 mb-4">Thông tin hồ sơ</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <InfoField label="Người tạo" value={sampleOpportunity.createdBy} />
          <InfoField label="Ngày tạo" value={sampleOpportunity.createdAt} />
          <InfoField label="Pháp nhân" value={sampleOpportunity.entity} />
          <div>
            <label className="text-xs text-slate-500 font-medium">Số tiền (VND)</label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="mt-1 w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold text-navy-900 mb-3">Chọn phương án</h3>
        <SchemeSelector
          schemes={schemeParams}
          selected={selectedScheme}
          onSelect={setSelectedScheme}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <CalcCard
          label="Hiệu quả (tự tính)"
          value={formatPercent(efficiency)}
          sub="Dựa trên lợi suất, rủi ro và kỳ hạn"
          accent
        />
        <CalcCard
          label="Lợi nhuận dự kiến"
          value={formatCurrency(expectedReturn)}
          sub={`Lợi suất ${scheme.interestRate}%`}
        />
        <CalcCard
          label="Thưởng (tự tính)"
          value={formatCurrency(bonus)}
          sub="Dựa trên hiệu quả và rủi ro"
          accent
        />
      </div>

      <div>
        <h3 className="text-sm font-semibold text-navy-900 mb-3">Luồng tiền</h3>
        <CashFlowDiagram scheme={selectedScheme} amount={amount} />
      </div>

      <WorkflowPipeline steps={sampleOpportunity.workflow} />
    </div>
  )
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-slate-500 font-medium">{label}</p>
      <p className="text-sm font-semibold text-navy-900 mt-1">{value}</p>
    </div>
  )
}

function CalcCard({
  label,
  value,
  sub,
  accent,
}: {
  label: string
  value: string
  sub: string
  accent?: boolean
}) {
  return (
    <div
      className={`rounded-xl p-5 border ${
        accent ? 'bg-navy-900 border-navy-700 text-white' : 'bg-white border-slate-200'
      }`}
    >
      <p
        className={`text-xs font-medium uppercase tracking-wider ${
          accent ? 'text-electric-300' : 'text-slate-500'
        }`}
      >
        {label}
      </p>
      <p className={`text-2xl font-bold mt-2 ${accent ? 'text-white' : 'text-navy-900'}`}>
        {value}
      </p>
      <p className={`text-xs mt-1 ${accent ? 'text-slate-300' : 'text-slate-400'}`}>{sub}</p>
    </div>
  )
}
