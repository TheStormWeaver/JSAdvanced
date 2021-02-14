const { expect, assert } = require("chai");
const Repository = require("./Project");

describe("Repository", function () {
  let properties = {
    name: "string",
    age: "number",
    birthday: "object",
  };
  let entity = {
    name: "Peter",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };
  let entity1 = {
    age:21,
    birthday: new Date(1998, 0, 7),
  }
  let entity2 = {
    name: 1,
    age: 21,
    birthday: new Date(1998, 0, 7),
  }
  let entity3 = {
    name: "George",
    age: 22,
    birthday: new Date(1998, 0, 7),
  };
  it("Testing props and data", function () {
    let repository = new Repository(properties);
    expect(repository).to.have.property('props')
    assert.deepEqual(repository.props, {name: "string", age: "number", birthday: "object"});
  });
  it("Testing count function", function () {
    let repository = new Repository(properties);
    assert.equal(repository.count, 0)
  });
  it("Testing add function", function (){
    let repository = new Repository(properties);
    assert.equal(repository.add(entity), 0)
    assert.throw(() => repository.add(entity1), 'Property name is missing from the entity!')
    assert.throw(() => repository.add(entity2), 'Property name is not of correct type!')
  })
  it("Testing get id", function (){
    let repository = new Repository(properties);
    repository.add(entity)
    assert.throw(() => repository.getId(2), 'Entity with id: 2 does not exist!')
    assert.deepEqual(repository.getId(0), entity)
  })
  it('Testing update', function(){
    let repository = new Repository(properties);
    repository.add(entity)
    assert.throw(() => repository.update(2, entity3), 'Entity with id: 2 does not exist!')
    assert.deepEqual(repository.getId(0), entity)
    repository.update(0, entity3)
    assert.deepEqual(repository.getId(0), entity3)
  })
  it("Testing del", function(){
    let repository = new Repository(properties);
    repository.add(entity)
    assert.throw(() => repository.del(2), 'Entity with id: 2 does not exist!')
    assert.deepEqual(repository.getId(0), entity)
    repository.del(0)
    assert.throw(() => repository.getId(0), 'Entity with id: 0 does not exist!')
  })
});

