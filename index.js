module.exports = (option = {}, dayjsClass) => {
    dayjsClass.prototype.addBusinessDays = function (date, days) {
        if(!option.holidays) {
            option.holidays = []
        }

        if (!date.isValid()) {
            throw new Error('Invalid date')
        }

        let weekDays = 0;
        let currentDay = date;

        while (weekDays < days) {
            currentDay = currentDay.add(1, 'day');

            if ([0, 6].includes(currentDay.day()) || option.holidays.some(day => day.isSame(currentDay, 'day'))) {
                continue;
            }

            weekDays++;
        }

        return currentDay
    };
};