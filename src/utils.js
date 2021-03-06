/**
 * Utils
 */

const units = [
  { symbol: 'D', value: 24 * 60 * 60 * 1000 },
  { symbol: 'H', value: 60 * 60 * 1000 },
  { symbol: 'm', value: 60 * 1000 },
  { symbol: 's', value: 1000 },
  { symbol: 'S', value: 100 }
]

// Decompose time into time units
export function resolveCountdown(countdown, format = 'HH:mm:ss') {
  const res = {}
  const thisUnits = units.filter(
    unit => (
      format.indexOf(unit.symbol) > -1 &&
      format.indexOf('~' + unit.symbol) < 0
    )
  )
  for (let i = 0, l = thisUnits.length; i < l; i++) {
    const { symbol, value } = thisUnits[i]

    // Use ceil method when only unit
    const unitValue = (
      l === 1
        ? Math.ceil(countdown / value)
        : Math.floor(countdown / value)
    )
    res[symbol] = unitValue
    res[symbol + symbol] = unitValue < 10 ? `0${unitValue}` : unitValue
    countdown %= value
  }
  return res
}

// Format countdown
export function formatCountdown(countdown, format = 'HH:mm:ss') {
  // Check whether resolved
  const time = (
    typeof countdown === 'number'
      ? resolveCountdown(countdown, format)
      : countdown
  )

  // Sort the keys from long to short to replace long placeholders first
  // to prevent long placeholders from being replaced by short ones
  const keys = Object.keys(time).sort((a, b) => b.length - a.length)
  let rs = format
  keys.forEach(key => {
    if (rs.indexOf(key) > -1 && rs.indexOf('~' + key) < 0) {
      rs = rs.replace(key, time[key])
    }
  })

  // Escape
  rs = rs.replace(/~([DHmsS])/g, '$1')

  return rs
}
