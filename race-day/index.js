let raceNumber = Math.floor(Math.random() * 1000);

const registeredEarly = true;
const registeredLate = false;

let runnerAge = Math.floor(Math.random() * 60);

raceNumber = 1001;
runnerAge = 18;

if (raceNumber > 1000) {
    console.log('Runner is an early registed adult.');
} else {
    console.log('Runner is an adult who registered late.')
};

if (runnerAge > 18 && raceNumber > 1000) {
    console.log('Your race time is at 9:30am.')
} else if (runnerAge > 18 && raceNumber < 1000) {
    console.log('Your race time is at 11:00am.')
} else if (runnerAge < 18) {
    console.log('Your race time is at 12:30pm.')
} else {
    console.log('Please see the registration desk.')
};