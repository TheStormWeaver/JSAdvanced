class ChristmasDinner {
  constructor(budget) {
    if (budget < 0) {
      throw new Error("The budget cannot be a negative number");
    }
    this.budget = budget;
    this.dishes = [];
    this.products = [];
    this.guests = [];
  }
  shopping(product) {
    for (let i = 0; i < product.length; i+= 2) {
      let name = product[i];
      let price = product[i + 1];
      if (this.budget - price > 0) {
        this.budget -= price;
        this.products.push(name);
        return `You have successfully bought ${name}!`;
      } else {
        throw new Error("Not enough money to buy this product");
      }
    }
  }
  recipes(recipe) {
    let recipeName = recipe.recipeName;
    let productList = recipe.productsList;
    let consistsProducts = 0;
    for (const line of productList) {
      for (const current of this.products) {
        if (line == current) {
          consistsProducts++;
        }
      }
    }
    if (consistsProducts == productList.length) {
      this.dishes.push({
        recipeName,
        productList,
      });
      return `${recipe.recipeName} has been successfully cooked!`;
    } else {
      throw new Error("We do not have this product");
    }
  }
  inviteGuests(name, dish) {
    let consistsDish = false;
    for (const line of this.dishes) {
      if (dish === line.recipeName) {
        consistsDish = true;
      }
      if (consistsDish) {
        for (const line of this.guests) {
          if (line.hasOwnProperty(name)) {
            throw new Error("This guest has already been invited");
          }
        }
        this.guests.push({ [name]: dish });
        return `You have successfully invited ${name}!`;
      }
    }
    if (!consistsDish) {
      throw new Error("We do not have this dish");
    }
  }
  showAttendance() {
    let result = "";
    for (const line of this.guests) {
      for (const key in line) {
        let dish = line[key];
        let index = this.dishes.find((current) => current.recipeName == dish)
        let ingridients = index.productList
        result += `${key} will eat ${dish}, which consists of ${ingridients.join(", ")}\n`;
      }
    }
    return result.trim()
  }
}

let dinner = new ChristmasDinner(300);

dinner.shopping(["Salt", 150]);
dinner.shopping(["Beans", 3]);
dinner.shopping(["Cabbage", 4]);
dinner.shopping(["Rice", 2]);
dinner.shopping(["Savory", 1]);
dinner.shopping(["Peppers", 1]);
dinner.shopping(["Fruits", 40]);
dinner.shopping(["Honey", 10]);

dinner.recipes({
  recipeName: "Oshav",
  productsList: ["Fruits", "Honey"],
});
dinner.recipes({
  recipeName: "Folded cabbage leaves filled with rice",
  productsList: ["Cabbage", "Rice", "Salt", "Savory"],
});
dinner.recipes({
  recipeName: "Peppers filled with beans",
  productsList: ["Beans", "Peppers", "Salt"],
});

dinner.inviteGuests("Ivan", "Oshav");
dinner.inviteGuests("Petar", "Folded cabbage leaves filled with rice");
dinner.inviteGuests("Georgi", "Peppers filled with beans");

console.log(dinner.showAttendance());

/*
Ivan will eat Oshav, which consists of Fruits, Honey
Petar will eat Folded cabbage leaves filled with rice, which consists of Cabbage, Rice, Salt, Savory
Georgi will eat Peppers filled with beans, which consists of Beans, Peppers, Salt
*/

