# Installation

Use a package manager like yarn or npm to install dayjs-business-days:

npm i @dakitec/dayjs-business-day
yarn add @dakitec/dayjs-business-day

# How to use this library

```
const dayjs = require('dayjs');
const dayjsBusinessDays = require('@dakitec/dayjs-business-days');

dayjs.extend(dayjsBusinessDays, {
    holidays: [
        dayjs('2024-04-25'),
        dayjs('2024-04-26'),
        dayjs('2024-04-27')
    ]
})

const date = dayjs().addBusinessDays(dayjs('2024-04-24'), 3);

console.log(date.format('YYYY-MM-DD'));
```

Pass your holidays as dayjs date objects to the holidays option when extending dayjs-business-days.

Then you can use the addBusinessDays method to add business days to a date.