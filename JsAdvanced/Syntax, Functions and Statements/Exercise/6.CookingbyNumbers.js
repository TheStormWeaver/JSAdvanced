function cookingByNums(num, ...commands) {
  num = Number(num)
  for (const command of commands) {
    switch (command) {
      case "chop":
        console.log(num /= 2);
        break;
      case "dice":
        console.log(num = Math.sqrt(num));
        break;
      case "spice":
        console.log(num += 1);
        break;
      case "bake":
        console.log(num *= 3);
        break;
      case "fillet":
        console.log((num *= 0.80).toFixed(1));
        break;
    }
  }
}
cookingByNums("32", "chop", "chop", "chop", "chop", "chop");
cookingByNums("9", "dice", "spice", "chop", "bake", "fillet");
