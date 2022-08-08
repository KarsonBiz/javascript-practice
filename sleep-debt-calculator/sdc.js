const getSleepHours = day => {
    if (day === 'Sunday') {
        return '8';
    } else if (day === 'Monday') {
        return '8';
    } else if (day === 'Tuesday') {
        return '7.5';
    } else if (day === 'Wednesday') {
        return '7';
    } else if (day === 'Thursday') {
        return '7';
    } else if (day === 'Friday') {
        return '6';
    } else {
        return '6';
    }
};

const getActualSleepHours = () => {
    getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday')
};

console.log(getActualSleepHours());

const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
};

console.log(getIdealSleepHours());