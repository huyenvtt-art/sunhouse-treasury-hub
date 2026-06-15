import { entityFinancials } from '../../data/mockData'
import { formatCurrency } from '../../utils/format'

export function EntityTable() {
  return (
    <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-navy-900">Tài chính theo pháp nhân</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-50 text-left">
              <th className="px-4 py-3 font-medium text-slate-600">Pháp nhân</th>
              <th className="px-4 py-3 font-medium text-slate-600">Tổng quỹ</th>
              <th className="px-4 py-3 font-medium text-slate-600">CFO</th>
              <th className="px-4 py-3 font-medium text-slate-600">CFI</th>
              <th className="px-4 py-3 font-medium text-slate-600">CFF</th>
              <th className="px-4 py-3 font-medium text-slate-600">Dự thu</th>
              <th className="px-4 py-3 font-medium text-slate-600">Dự chi</th>
              <th className="px-4 py-3 font-medium text-slate-600">Dự tồn</th>
            </tr>
          </thead>
          <tbody>
            {entityFinancials.map((row) => (
              <tr key={row.entity} className="border-t border-slate-100 hover:bg-slate-50">
                <td className="px-4 py-3 font-semibold text-navy-900">{row.entity}</td>
                <td className="px-4 py-3">{formatCurrency(row.totalFund)}</td>
                <td className="px-4 py-3 text-emerald-600">{formatCurrency(row.cfo)}</td>
                <td className="px-4 py-3 text-red-500">{formatCurrency(row.cfi)}</td>
                <td className="px-4 py-3 text-red-500">{formatCurrency(row.cff)}</td>
                <td className="px-4 py-3">{formatCurrency(row.expectedIncome)}</td>
                <td className="px-4 py-3">{formatCurrency(row.expectedExpense)}</td>
                <td className="px-4 py-3 font-medium text-electric-500">
                  {formatCurrency(row.expectedBalance)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
