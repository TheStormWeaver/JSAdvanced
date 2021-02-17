lass ChristmasDinner {
    constructor(budget) {
        this.budget = budget;
        this.dishes = [];
        this.products = [];
        this.guests = {};
    }
 
    get budget() {
        return this._budget;
    }
 
    set budget(value) {
        if (value < 0) {
            throw new Error("The budget cannot be a negative number");
        }
 
        this._budget = value;
    }
 
    shopping(product) {
        const productName = product[0];
        const price = product[1];
 
        if (this.budget < price) {
            throw new Error("Not enough money to buy this product");
        }
 
        this.products.push(productName);
        this.budget -= price;
        return `You have successfully bought ${productName}!`
    };
 
    recipes(recipe) {
        for (let i = 0; i < recipe.productsList.length; i++) {
            if (this.products.some(x => x === recipe.productsList[i]) === false) {
                throw new Error('We do not have this product');
            }
        }
 
        this.dishes.push(recipe);
        return `${recipe.recipeName} has been successfully cooked!`;
    };
 
    inviteGuests(name, dish) {
        if (this.dishes.some(x => x.recipeName === dish) === false) {
            throw new Error("We do not have this dish");
        }
 
        if (this.guests[name]) {
            throw new Error("This guest has already been invited");
        }
 
        this.guests[name] = dish;
 
        return `You have successfully invited ${name}!`;
    }
 
    showAttendance() {
        let result = [];
 
        for(let guest in this.guests) {
            const dishName = this.guests[guest];
            const products = this.dishes.find(x => x.recipeName === dishName).productsList;
            result.push(`${guest} will eat ${dishName}, which consists of ${products.join(', ')}`);
        }
 
        return result.join('\n');
    }
}
