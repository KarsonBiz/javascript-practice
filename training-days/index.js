// The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else if (random === 2) {
        return 'Pentathlon';
    }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
    let days = 50;
    if (event === 'Marathon') {
        let days = 50;
    } else if (event === 'Triathlon') {
        let days = 100;
    } else if (event === 'Pentathlon') {
        let days = 200;
    }

    return days;
};

const name1 = 'Nala';

const logEvent = (event, name) => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = (days, name) => {
    console.log(`${name}'s time to train is: ${days} days`);
};


const event = getRandEvent();
const days = getTrainingDays(event1);

logEvent(event1, name1);
logTime(days1, name1);

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';

logEvent(event2, name2);
logTime(days2, name2);
