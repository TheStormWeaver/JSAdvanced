const { expect, assert } = require("chai");
const ChristmasMovies = require("./Project");

describe("Christmas Movies", function () {
  let movie;
  beforeEach(function () {
      movie = new ChristmasMovies;
  });

  describe("Testing the constructor", function () {
    it("Testing the 3 base values", function () {
    expect(movie).to.have.property("movieCollection")
    expect(movie).to.have.property("watched")
    expect(movie).to.have.property("actors")
    })
  });

  describe("Testing buyMovie", function () {
    it("Corect inputs", function (){
      expect(movie.buyMovie("Hello", ["Joe", "Danny"])).to.equal("You just got Hello to your collection in which Joe, Danny are taking part!")
      expect(movie.buyMovie("This World", ["Max", "Scott"])).to.equal("You just got This World to your collection in which Max, Scott are taking part!")
      expect(movie.buyMovie("This Place")).to.equal("You just got This Place to your collection in which  are taking part!")
      expect(movie.buyMovie(0)).to.equal("You just got 0 to your collection in which  are taking part!")
    })
    it("Error for adding the same movie", function(){
      movie.buyMovie("Hello", ["Joe", "Danny"])
      expect(() => movie.buyMovie("Hello", ["Joe", "Danny"])).to.throw(`You already own Hello in your collection!`)
    })
  });

  describe("Testing discardMovie", function(){
    it("Error for not owning movie", function(){
    expect(() => movie.discardMovie("Stuff")).to.throw(`Stuff is not at your collection!`)
  })
  it("Not Watched Error", function(){
    movie.buyMovie("Hello", ["Joe", "Danny"])
    expect(() => movie.discardMovie("Hello")).to.throw(`Hello is not watched!`)
  })
  it("Not Watched Error", function(){
    movie.buyMovie("Hello", ["Joe", "Danny"])
    movie.watchMovie("Hello")
    expect(movie.discardMovie("Hello")).to.equal(`You just threw away Hello!`)
  })
 })

  describe("Testing watchMovie", function(){
    it("Error for not having the movie", function(){
    expect(() => movie.watchMovie("Stuff")).to.throw(`No such movie in your collection!`)
    })
    it("Adding +1 to watchMovie", function(){
      movie.buyMovie("Hello", ["Joe", "Danny"])
      expect(movie.watchMovie("Hello")).to.equal(undefined)
      expect(movie.watched["Hello"]).to.equal(1)
    })
  })

  describe("Testing favoriteMovie", function(){
    it("Error for not having watched any movies", function(){
      expect(() => movie.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
    })
    it("Favorite movie being Hello", function(){
      movie.buyMovie("Hello", ["Joe", "Danny"])
      movie.watchMovie("Hello")
      expect(movie.favouriteMovie()).to.equal('Your favourite movie is Hello and you have watched it 1 times!')
    })
  })

  describe("Testing mostStarredActors", function (){
    it("Error for not having watched any movies", function(){
      expect(() => movie.mostStarredActor()).to.throw('You have not watched a movie yet this year!')
    })
    it("Most starred actor being Joe", function(){
      movie.buyMovie("Hello", ["Joe", "Danny"])
      movie.buyMovie("Welcome To MY World!", ["Joe", "Max"])
      expect(movie.mostStarredActor()).to.equal(`The most starred actor is Joe and starred in 2 movies!`)
    })
  })
});
