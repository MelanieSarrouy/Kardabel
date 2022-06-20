export const formatDate = (dateStr) => {
  const array = dateStr.split('-')
  const year = array[1]
  const month = array[0]
  const date = new Date(year, month - 1)
  const ye = new Intl.DateTimeFormat('fr', { year: 'numeric' }).format(date)
  const mo = new Intl.DateTimeFormat('fr', { month: 'short' }).format(date)
  const goodMonth = mo.charAt(0).toUpperCase() + mo.slice(1)
  return `${goodMonth} ${ye.toString()}`
}
