export const ENTITIES = ['SHI', 'SHE', 'SHG', 'SHM', 'SHQT', 'SYV', 'ALUBA'] as const
export type Entity = typeof ENTITIES[number]

export const ROLES = ['User', 'Manager', 'CFO', 'CEO', 'HR'] as const
export type Role = typeof ROLES[number]

export type WorkflowStatus = 'pending' | 'approved' | 'rejected' | 'in_review'

export interface WorkflowStep {
  role: Role
  status: WorkflowStatus
  approver?: string
  date?: string
  note?: string
}

export type SchemeType = 'A' | 'B' | 'C'

export interface SchemeParams {
  type: SchemeType
  label: string
  description: string
  interestRate: number
  durationDays: number
  riskFactor: number
}

export interface TreasuryOpportunity {
  id: string
  title: string
  entity: Entity
  amount: number
  expectedReturn: number
  scheme: SchemeType
  workflow: WorkflowStep[]
  createdBy: string
  createdAt: string
  status: 'draft' | 'in_progress' | 'approved' | 'rejected'
}

export interface EntityFinancials {
  entity: Entity
  totalFund: number
  cfo: number
  cfi: number
  cff: number
  expectedIncome: number
  expectedExpense: number
  expectedBalance: number
}

export interface DashboardMetrics {
  totalFund: number
  cfo: number
  cfi: number
  cff: number
  expectedIncome: number
  expectedExpense: number
  expectedBalance: number
  totalTransactionValue: number
  totalEfficiency: number
  bonusFund: number
}

export interface OpportunitySummary {
  id: string
  title: string
  entity: Entity
  amount: number
  efficiency: number
  status: string
}

export interface ProfileStatusItem {
  status: string
  count: number
  color: string
}

export interface CashFlowPoint {
  month: string
  inflow: number
  outflow: number
  net: number
}
