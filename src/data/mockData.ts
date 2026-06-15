import type {
  CashFlowPoint,
  DashboardMetrics,
  EntityFinancials,
  OpportunitySummary,
  ProfileStatusItem,
  SchemeParams,
  TreasuryOpportunity,
} from '../types'

export const dashboardMetrics: DashboardMetrics = {
  totalFund: 4850000000000,
  cfo: 125000000000,
  cfi: -85000000000,
  cff: -42000000000,
  expectedIncome: 320000000000,
  expectedExpense: 245000000000,
  expectedBalance: 75000000000,
  totalTransactionValue: 890000000000,
  totalEfficiency: 12.8,
  bonusFund: 45000000000,
}

export const entityFinancials: EntityFinancials[] = [
  { entity: 'SHI', totalFund: 980000000000, cfo: 28000000000, cfi: -18000000000, cff: -8000000000, expectedIncome: 65000000000, expectedExpense: 48000000000, expectedBalance: 17000000000 },
  { entity: 'SHE', totalFund: 720000000000, cfo: 22000000000, cfi: -15000000000, cff: -6000000000, expectedIncome: 48000000000, expectedExpense: 38000000000, expectedBalance: 10000000000 },
  { entity: 'SHG', totalFund: 650000000000, cfo: 18000000000, cfi: -12000000000, cff: -5000000000, expectedIncome: 42000000000, expectedExpense: 35000000000, expectedBalance: 7000000000 },
  { entity: 'SHM', totalFund: 580000000000, cfo: 15000000000, cfi: -10000000000, cff: -4000000000, expectedIncome: 38000000000, expectedExpense: 30000000000, expectedBalance: 8000000000 },
  { entity: 'SHQT', totalFund: 420000000000, cfo: 12000000000, cfi: -8000000000, cff: -3000000000, expectedIncome: 28000000000, expectedExpense: 22000000000, expectedBalance: 6000000000 },
  { entity: 'SYV', totalFund: 380000000000, cfo: 10000000000, cfi: -7000000000, cff: -2500000000, expectedIncome: 25000000000, expectedExpense: 20000000000, expectedBalance: 5000000000 },
  { entity: 'ALUBA', totalFund: 320000000000, cfo: 8000000000, cfi: -5000000000, cff: -2000000000, expectedIncome: 20000000000, expectedExpense: 16000000000, expectedBalance: 4000000000 },
]

export const topOpportunities: OpportunitySummary[] = [
  { id: 'KDTC-2026-001', title: 'Tối ưu dòng tiền SHI Q2', entity: 'SHI', amount: 85000000000, efficiency: 15.2, status: 'Đang duyệt' },
  { id: 'KDTC-2026-002', title: 'Đầu tư ngắn hạn SHE', entity: 'SHE', amount: 62000000000, efficiency: 13.8, status: 'Đã duyệt' },
  { id: 'KDTC-2026-003', title: 'Tái cấu trúc SHG', entity: 'SHG', amount: 48000000000, efficiency: 12.5, status: 'Đang duyệt' },
  { id: 'KDTC-2026-004', title: 'Quản lý FX ALUBA', entity: 'ALUBA', amount: 35000000000, efficiency: 11.9, status: 'Mới' },
  { id: 'KDTC-2026-005', title: 'Tối ưu SHQT', entity: 'SHQT', amount: 28000000000, efficiency: 10.4, status: 'Đang duyệt' },
]

export const profileStatus: ProfileStatusItem[] = [
  { status: 'Mới tạo', count: 12, color: '#66aaff' },
  { status: 'Đang duyệt', count: 28, color: '#0066ff' },
  { status: 'Đã duyệt', count: 45, color: '#10b981' },
  { status: 'Từ chối', count: 5, color: '#ef4444' },
  { status: 'Hoàn thành', count: 38, color: '#0a1628' },
]

export const cashFlowData: CashFlowPoint[] = [
  { month: 'T1', inflow: 280, outflow: 220, net: 60 },
  { month: 'T2', inflow: 310, outflow: 245, net: 55 },
  { month: 'T3', inflow: 295, outflow: 260, net: 35 },
  { month: 'T4', inflow: 340, outflow: 280, net: 60 },
  { month: 'T5', inflow: 320, outflow: 250, net: 70 },
  { month: 'T6', inflow: 350, outflow: 290, net: 60 },
  { month: 'T7', inflow: 380, outflow: 310, net: 70 },
  { month: 'T8', inflow: 360, outflow: 295, net: 65 },
  { month: 'T9', inflow: 390, outflow: 320, net: 70 },
  { month: 'T10', inflow: 410, outflow: 340, net: 70 },
  { month: 'T11', inflow: 400, outflow: 330, net: 70 },
  { month: 'T12', inflow: 420, outflow: 350, net: 70 },
]

export const schemeParams: SchemeParams[] = [
  { type: 'A', label: 'Phương án A', description: 'Đầu tư ngắn hạn — lợi suất ổn định, rủi ro thấp', interestRate: 8.5, durationDays: 90, riskFactor: 0.15 },
  { type: 'B', label: 'Phương án B', description: 'Tối ưu dòng tiền — cân bằng hiệu quả và rủi ro', interestRate: 11.2, durationDays: 180, riskFactor: 0.35 },
  { type: 'C', label: 'Phương án C', description: 'Đầu tư tăng trưởng — hiệu quả cao, rủi ro cao', interestRate: 14.8, durationDays: 365, riskFactor: 0.55 },
]

export const sampleOpportunity: TreasuryOpportunity = {
  id: 'KDTC-2026-001',
  title: 'Tối ưu dòng tiền SHI Q2',
  entity: 'SHI',
  amount: 85000000000,
  expectedReturn: 0,
  scheme: 'B',
  createdBy: 'Nguyễn Văn A',
  createdAt: '2026-06-01',
  status: 'in_progress',
  workflow: [
    { role: 'User', status: 'approved', approver: 'Nguyễn Văn A', date: '2026-06-01', note: 'Đề xuất phương án B' },
    { role: 'Manager', status: 'approved', approver: 'Trần Thị B', date: '2026-06-03', note: 'Đồng ý phương án' },
    { role: 'CFO', status: 'in_review', approver: 'Lê Văn C', date: '2026-06-05' },
    { role: 'CEO', status: 'pending' },
    { role: 'HR', status: 'pending' },
  ],
}
