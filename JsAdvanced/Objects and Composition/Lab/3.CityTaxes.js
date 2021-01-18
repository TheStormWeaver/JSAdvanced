function cityTaxes(name, population, treasury) {
  let city = {
    name: name,
    population: population,
    treasury: treasury,
    taxRate: 10,
    collectTaxes() {
      this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
      this.population += Math.floor(this.applyGrowth * percent / 100);
    },
    applyRecession(percent) {
      this.treasury -= Math.floor(this.treasury * percent / 100);
    }
  }
  return city
}
console.log(cityTaxes("Tortuga", 7000, 15000));
