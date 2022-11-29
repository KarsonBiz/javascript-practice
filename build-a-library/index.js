class Media {
    constructor(title) {
      this._title = title,
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
    }
    getAverageRating() {
      let ratingSum = this.ratings.reduce((currentSum, rating) => currentSum +rating, 0);
      return Math.floor(ratingSum / this._ratings.length);
    }
    addRating(inputValue) {
      if(inputValue <= 5) {
        this._ratings.push(inputValue);
      } else {
        console.log('The rating must be under 5.');
      }
    }
    set isCheckedOut(checkIn) {
      this._isCheckedOut = checkIn;
    }
  }
  
  // Book Subclass
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    } get author() {
      return this._author;
    } get pages() {
      return this._pages;
    }
  }
  
  // Movie Subclass
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    } get director() {
      return this._director;
    } get runTime() {
      return this._runTime;
    }
  }
  
  
  // Book Instance
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  historyOfEverything.toggleCheckOutStatus();
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  
  console.log(historyOfEverything.getAverageRating());
  
  // Movie Instance
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  
  console.log(speed.getAverageRating());