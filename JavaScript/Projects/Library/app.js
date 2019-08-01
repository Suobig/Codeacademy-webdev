class Media {
  constructor(title) {
    this._title = title;
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

  getAverageRating() {
    if (!this.ratings.length) return 0;
    return (
      this._ratings.reduce((total, rating) => total + rating, 0) /
      this._ratings.length
    );
  }

  toggleCheckOutStatus() {
    this._isCheckedOut = !this.isCheckedOut;
    return this._isCheckedOut;
  }

  addRating(rating) {
    this._ratings.push(rating);
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }

  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }
  get runTime() {
    return this._runTime;
  }
}

class CD extends Media {
  constructor(artist, title, songs) {
    super(title);
    this._artist = artist;
    this._songs = songs;
  }

  get artist() {
    return this._artist;
  }
  get songs() {
    return this._songs;
  }
}

//Test section
console.log("===============Testing a book===================")
const testBook = new Book("King", "Fear", 450);
console.log(`${testBook.author} = "King"?`);
console.log(`${testBook.title} = "Fear"?`);
console.log(`${testBook.pages} = "450"?`);
console.log(`${testBook.isCheckedOut} = false?`);
console.log(`${testBook.ratings} = []?`);
console.log(`${testBook.getAverageRating()} = 0?`);
testBook.toggleCheckOutStatus();
console.log(`${testBook.isCheckedOut} = true?`);
testBook.addRating(1);
testBook.addRating(2);
console.log(`${testBook.ratings} = [1, 2]?`);
console.log(`${testBook.getAverageRating()} = 1.5?`);

const testMovie = new Movie("Spielberg", "Avatar", 240);
console.log("===============Testing a movie===================")
console.log(`${testMovie.author} = "Spielberg"?`);
console.log(`${testMovie.title} = "Avatar"?`);
console.log(`${testMovie.runTime} = "240"?`);
console.log(`${testMovie.isCheckedOut} = false?`);
console.log(`${testMovie.ratings} = []?`);
console.log(`${testMovie.getAverageRating()} = 0?`);
testMovie.toggleCheckOutStatus();
console.log(`${testMovie.isCheckedOut} = true?`);
testMovie.addRating(1);
testMovie.addRating(2);
console.log(`${testMovie.ratings} = [1, 2]?`);
console.log(`${testMovie.getAverageRating()} = 1.5?`);

const testCd = new CD("Beatles", "Help", [
  "Help",
  "Ticket to ride",
  "Yesterday"
]);
console.log("===============Testing a CD===================")
console.log(`${testCd.artist} = "Beatles"?`);
console.log(`${testCd.title} = "Help"?`);
console.log(`${testCd.songs} = "Help", "Ticket to ride", "Yesterday"?`);
console.log(`${testCd.isCheckedOut} = false?`);
console.log(`${testCd.ratings} = []?`);
console.log(`${testCd.getAverageRating()} = 0?`);
testCd.toggleCheckOutStatus();
console.log(`${testCd.isCheckedOut} = true?`);
testCd.addRating(1);
testCd.addRating(2);
console.log(`${testCd.ratings} = [1, 2]?`);
console.log(`${testCd.getAverageRating()} = 1.5?`);
