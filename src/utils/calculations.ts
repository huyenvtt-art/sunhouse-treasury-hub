import type { SchemeParams } from '../types'

export function calculateEfficiency(
  amount: number,
  scheme: SchemeParams,
): number {
  const baseReturn = (amount * scheme.interestRate) / 100
  const riskAdjustment = baseReturn * scheme.riskFactor
  const timeBonus = scheme.durationDays >= 180 ? 1.15 : scheme.durationDays >= 90 ? 1.05 : 1.0
  const efficiency = ((baseReturn - riskAdjustment) * timeBonus / amount) * 100
  return Math.round(efficiency * 10) / 10
}

export function calculateBonus(
  amount: number,
  efficiency: number,
  scheme: SchemeParams,
): number {
  const baseBonusRate = 0.02
  const efficiencyMultiplier = efficiency / 10
  const riskPenalty = scheme.riskFactor * 0.5
  const bonus = amount * baseBonusRate * efficiencyMultiplier * (1 - riskPenalty)
  return Math.round(bonus)
}

export function calculateExpectedReturn(
  amount: number,
  scheme: SchemeParams,
): number {
  return Math.round((amount * scheme.interestRate) / 100)
}
