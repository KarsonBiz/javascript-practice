const getSleepHours = day => {
    if (day === 'monday') {
      return '8';
    } else if (day === 'tuesday') {
      return '8';
    } else if (day === 'wednesday') {
      return '7.5';
    } else if (day === 'thursday') {
      return '7';
    } else if (day === 'friday') {
      return '7';
    } else if (day === 'saturday') {
      return '6';
    } else if (day === 'sunday') {
      return '8';
    } else {
      return "error";
    }
  };
  
  const getActualSleepHours = () => {
    return (
    getSleepHours('monday') + 
    getSleepHours('tuesday') + 
    getSleepHours('wednesday') + 
    getSleepHours('thursday') + 
    getSleepHours('friday') + 
    getSleepHours('saturday') + 
    getSleepHours('sunday')
    );
  };
  
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours > idealSleepHours) {
      console.log("You got more sleep than you needed this week. You got" + (actualHoursofSleep - idealSleepHours) + "hours more than you needed.");
    } else if (actualSleepHours < idealSleepHours) {
      console.log(`You didn't get enough sleep this week. You should have` + (idealSleepHours - actualSleepHours) + `hours more per week.`);
    } else {
      console.log('You got the perfect amount of sleep this week.');
    };
  };
  
  calculateSleepDebt();