const dayjs = require('dayjs');
const xxx = require('./index')

dayjs.extend(xxx, {
    holidays: [
        dayjs('2024-04-25'),
        dayjs('2024-04-26'),
        dayjs('2024-04-27')
    ]
})

const date = dayjs().addBusinessDays(dayjs('2024-04-24'), 3);

console.log(date.format('YYYY-MM-DD'));