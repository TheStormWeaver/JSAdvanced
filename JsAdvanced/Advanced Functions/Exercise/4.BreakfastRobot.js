function solution() {
  const recipes = {
      apple: {
          carbohydrate: 1,
          flavour: 2,
      },
      lemonade: {
          carbohydrate: 10,
          flavour: 20,
      },
      burger: {
          carbohydrate: 5,
          fat: 7,
          flavour: 3,
      },
      eggs: {
          protein: 5,
          fat: 1,
          flavour: 1,
      },
      turkey: {
          protein: 10,
          carbohydrate: 10,
          fat: 10,
          flavour: 10,
      }
  }
  const stocks = {
      protein: 0,
      carbohydrate: 0,
      fat: 0,
      flavour: 0,
  }
  let commands = {
      restock: (product, value) => {
          stocks[product] += Number(value)
          return 'Success';
      },
      prepare: (product, quantity) => {
          let recipe = Object.entries(recipes[product]);

          for (let [item, countNeeded] of recipe) {
              if (stocks[item] < countNeeded * quantity) {
                  return `Error: not enough ${item} in stock`;
              }
          }
          recipe.forEach(([item, countNeeded]) => {
              stocks[item] -= countNeeded * quantity;
          });
          return 'Success';
      },
      report: () => Object.entries(stocks)
          .map(([microElement, count]) => `${microElement}=${count}`)
          .join(' ')
  }
  return (input) => {
      let [command, items, count] = input.split(' ');
      return commands[command](items, +count);
  }
}
let manager = solution();
manager("restock flavour 50");  // Success
manager("prepare lemonade 4");  // Error: not enough carbohydrate in stock
