const { expect, assert } = require("chai");
const ChristmasMovies = require("./Project");

describe("Christmas Movies", function () {
  let christmas = new ChristmasMovies();

  it("Testing the constructor", function () {
    expect(christmas).to.have.property("movieCollection")
    expect(christmas).to.have.property("watched")
    expect(christmas).to.have.property("actors")
  });

  it("Testing buyMovie", function () {
    expect(christmas.buyMovie('Last Christmas', ['Madison Ingoldsby', 'Emma Thompson', 'Boris Isakovic', 'Madison Ingoldsby'])).to.equal("You just got Last Christmas to your collection in which Madison Ingoldsby, Emma Thompson, Boris Isakovic are taking part!")
    expect(christmas.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal("You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!")
    expect(christmas.buyMovie('Home Alone 2', ['Macaulay Culkin'])).to.equal("You just got Home Alone 2 to your collection in which Macaulay Culkin are taking part!")
    expect(christmas.buyMovie('The Grinch', ['Benedict Cumberbatch', 'Rashida Jones'])).to.equal("You just got The Grinch to your collection in which Benedict Cumberbatch, Rashida Jones are taking part!")
  });

  it("Testing watchMovie", function(){
    expect(christmas.watchMovie("The Grinch")).to.equal(undefined)
    expect(christmas.watchMovie("Home Alone")).to.equal(undefined)
    expect(christmas.watchMovie("Home Alone")).to.equal(undefined)
    expect(christmas.watchMovie("Home Alone")).to.equal(undefined)
    expect(christmas.watchMovie("Last Christmas")).to.equal(undefined)
    expect(christmas.watchMovie("Last Christmas")).to.equal(undefined)
  })

  it("Testing discardMovie", function(){
    expect(christmas.discardMovie('The Grinch')).to.equal("You just threw away The Grinch!")
  })

  it("Testing favoriteMovie", function(){
    expect(christmas.favouriteMovie()).to.equal("Your favourite movie is Home Alone and you have watched it 3 times!")
  })

  it("Testing mostStarredActors", function (){
    expect(christmas.mostStarredActor()).to.equal("The most starred actor is Macaulay Culkin and starred in 2 movies!")
  })
});
