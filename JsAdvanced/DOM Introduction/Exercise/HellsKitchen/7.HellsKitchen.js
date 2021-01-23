function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

	let input = document.querySelector("#inputs>textarea");
	const bestRestorantP = document.querySelector('#bestRestaurant>p')
	const workersP = document.querySelector('#workers>p')

  function onClick() {
    let arr = JSON.parse(input.value);
    let restorants = {};
    arr.forEach((line) => {
      const [name, workersString] = line.split(" - ");
      let workersArr = workersString.split(", ");
      let workers = [];
      for (const worker of workersArr) {
        let [name, salary] = worker.split(" ");
        salary = Number(salary);
        workers.push({
          name: name,
          salary: salary,
        });
      }
      if (restorants[name]) {
        workers = workers.concat(restorants[name].workers);
      }
      workers.sort((worker1, worker2) => worker2.salary - worker1.salary);

      let bestSalary = workers[0].salary;
      let averageSalary =
        workers.reduce((sum, worker) => sum + worker.salary, 0) /
        workers.length;

      restorants[name] = {
        workers,
        averageSalary,
        bestSalary,
      };
    });
    let bestRestorantSalary = 0;
    let best = undefined;
    for (const name in restorants) {
      if (restorants[name].averageSalary > bestRestorantSalary) {
        best = {
          name,
          workers: restorants[name].workers,
          bestSalary: restorants[name].bestSalary,
          averageSalary: restorants[name].averageSalary,
				};
				bestRestorantSalary = restorants[name].averageSalary
			}
		}
		bestRestorantP.textContent = `Name: ${best.name} Average Salary: ${best.averageSalary.toFixed(2)} Best Salary: ${best.bestSalary.toFixed(2)}`
		let workersResult = []
		best.workers.forEach(worker => {
			workersResult.push(`Name: ${worker.name} With Salary: ${worker.salary}`)
		})

		workersP.textContent = workersResult.join(" ")
  }
}
