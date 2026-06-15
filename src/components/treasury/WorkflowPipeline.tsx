import type { WorkflowStep } from '../../types'

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  approved: { label: 'Đã duyệt', color: 'text-emerald-700', bg: 'bg-emerald-100 border-emerald-300' },
  in_review: { label: 'Đang xem xét', color: 'text-electric-500', bg: 'bg-electric-200 border-electric-400' },
  pending: { label: 'Chờ duyệt', color: 'text-slate-500', bg: 'bg-slate-100 border-slate-300' },
  rejected: { label: 'Từ chối', color: 'text-red-600', bg: 'bg-red-100 border-red-300' },
}

const roleLabels: Record<string, string> = {
  User: 'Người tạo',
  Manager: 'Quản lý',
  CFO: 'CFO',
  CEO: 'CEO',
  HR: 'Nhân sự',
}

export function WorkflowPipeline({ steps }: { steps: WorkflowStep[] }) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-5">
      <h3 className="text-sm font-semibold text-navy-900 mb-5">
        Quy trình phê duyệt
      </h3>
      <div className="flex items-start gap-0">
        {steps.map((step, index) => {
          const config = statusConfig[step.status]
          const isLast = index === steps.length - 1

          return (
            <div key={step.role} className="flex items-start flex-1 min-w-0">
              <div className="flex flex-col items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold ${config.bg} ${config.color}`}
                >
                  {index + 1}
                </div>
                <p className="text-xs font-semibold text-navy-900 mt-2">{roleLabels[step.role]}</p>
                <p className="text-xs text-slate-500">{step.role}</p>
                <span
                  className={`text-xs mt-1 px-2 py-0.5 rounded-full ${config.bg} ${config.color}`}
                >
                  {config.label}
                </span>
                {step.approver && (
                  <p className="text-xs text-slate-400 mt-1 truncate max-w-full px-1">
                    {step.approver}
                  </p>
                )}
                {step.date && (
                  <p className="text-xs text-slate-400">{step.date}</p>
                )}
              </div>
              {!isLast && (
                <div className="flex items-center h-10 shrink-0">
                  <div className="w-full h-0.5 bg-slate-300 min-w-[24px]" />
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
