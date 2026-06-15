export function formatCurrency(value: number): string {
  if (value >= 1e12) return `${(value / 1e12).toFixed(2)} nghìn tỷ`
  if (value >= 1e9) return `${(value / 1e9).toFixed(1)} tỷ`
  if (value >= 1e6) return `${(value / 1e6).toFixed(1)} triệu`
  return value.toLocaleString('vi-VN')
}

export function formatPercent(value: number): string {
  return `${value.toFixed(1)}%`
}

export function formatShortCurrency(value: number): string {
  return `${value} tỷ`
}
