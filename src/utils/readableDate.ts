const days: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months: string[] = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
]

export const dateObj = (d: Date): IDateObj => ({
  day: days[d.getDay()],
  date: d.getDate(),
  month: months[d.getMonth()],
  year: d.getFullYear(),
})
