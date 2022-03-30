const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = [
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

const dateObj = d => ({
  day: days[d.getDay()],
  date: d.getDate(),
  month: months[d.getMonth()],
  year: d.getFullYear(),
})

module.exports = {
  dateObj,
}
