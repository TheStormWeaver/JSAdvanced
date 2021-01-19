function carFactory(input) {
  return {
    model: input.model,
    engine:  getEngine(input.power),
    carriage: getCarriage(input.carriage, input.color),
    wheelsize: getWheelSize(input.wheelsize)
  }

  function getEngine(power) {
    const engines = [
      { power: 90, volume: 1800 },
      { power: 120, volume: 2400 },
      { power: 200, volume: 3500 },
    ].sort((a, b) => a.power - b.power)
    let result = ""
    for (let i = 0; i < engines.length; i++) {
      if(engines[i].power >= power){
        result = engines[i]
        break;
      }
    }
    return result
  }
  function getCarriage(carriage, color){
    let result = ""
    const carriages = [{type: "hatchback", color: color}, {type: "coupe", color:color}]
    for (let i = 0; i < carriages.length; i++) {
      if(carriages[i].type == carriage){
        result = carriages[i]
      }
    }
    return result
  }
  function getWheelSize(size){
    if(size % 2 == 0){
      size--
    }
    let result = [size, size, size, size]
    return result
  }
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
