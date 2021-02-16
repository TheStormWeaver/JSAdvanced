const { expect, assert } = require("chai");
const ChristmasMovies = require("./Project");

describe("Christmas Movies", function () {
  let movie = new ChristmasMovies()
  let christmas = new ChristmasMovies();

  it("Testing the constructor", function () {
    expect(movie).to.have.property("movieCollection")
    expect(movie).to.have.property("watched")
    expect(movie).to.have.property("actors")
  });

  it("Testing buyMovie", function () {
    expect(movie.buyMovie("Hello", ["Joe", "Danny"])).to.equal("You just got Hello to your collection in which Joe, Danny are taking part!")
    expect(movie.buyMovie("This World", ["Max", "Scott"])).to.equal("You just got This World to your collection in which Max, Scott are taking part!")
    expect(() => movie.buyMovie("Hello", ["Joe", "Danny"])).to.throw(`You already own Hello in your collection!`)
    expect(movie.buyMovie("This Place")).to.equal("You just got This Place to your collection in which  are taking part!")
    expect(movie.buyMovie(0)).to.equal("You just got 0 to your collection in which  are taking part!")
  });

  it("Testing discardMovie", function(){
    expect(() => movie.discardMovie("Stuff")).to.throw(`Stuff is not at your collection!`)
    expect(() => movie.discardMovie("Hello")).to.throw(`Hello is not watched!`)
    movie.buyMovie("Hello", ["Joe", "Danny"])
    movie.watchMovie("Hello")
    expect(movie.discardMovie("Hello")).to.equal(`You just threw away Hello!`)
  })

  it("Testing watchMovie", function(){
    expect(() => movie.watchMovie("Stuff")).to.throw(`No such movie in your collection!`)
    movie.buyMovie("Hello", ["Joe", "Danny"])
    expect(movie.watchMovie("Hello")).to.equal(undefined)
    expect(movie.watchMovie("This Place")).to.equal(undefined)
  })

  it("Testing favoriteMovie", function(){
    expect(movie.favouriteMovie()).to.equal('Your favourite movie is Hello and you have watched it 1 times!')
    movie.discardMovie("Hello")
    expect(movie.favouriteMovie()).to.equal('Your favourite movie is This Place and you have watched it 1 times!')
    movie.watchMovie("This Place")
    movie.discardMovie("This Place")
    expect(() => movie.favouriteMovie()).to.throw('You have not watched a movie yet this year!')
  })

  it("Testing mostStarredActors", function (){
    expect(movie.mostStarredActor()).to.equal(`The most starred actor is Max and starred in 1 movies!`)
    movie.watchMovie("This World")
    movie.discardMovie("This World")
    expect(() => movie.mostStarredActor()).to.throw('Cannot read property \'0\' of undefined')
    movie.watchMovie(0)
    movie.discardMovie(0)
    expect(() => movie.mostStarredActor()).to.throw('You have not watched a movie yet this year!')
  })
});
