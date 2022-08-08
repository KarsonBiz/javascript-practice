const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
      return userInput;
    } else {
      console.log('Error!');
    }
  };
  
  const getComputerChoice = () => {
    computerInput = Math.floor(Math.random() * 3);
    if (computerInput === 0) {
      console.log('rock');
    } else if (computerInput === 1) {
      console.log('paper');
    } else {
      console.log('scissors')
    }
  }
  
  console.log(getComputerChoice());
  
  function determineWinner (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'Game was a tie!';}
    if (userChoice === 'rock') {
     if (computerChoice === 'paper') {
       return 'The computer won!';
     } else {
       return 'You won!';}
      } if (userChoice === 'paper') {
          if (computerChoice === 'scissors'){
            return 'The computer won!';
          } else {
            return 'You won!';
           }
          }
       if (userChoice === 'scissors') {
          if (computerChoice === 'rock'){
            return 'The computer won!'; 
            } else {
              return "You won!";
              }
        }
    }    
  
  const playGame = () => {
    const userChoice = getUserChoice('rock');
    const computerChoice = getComputerChoice ();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw: ' + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();
  
  