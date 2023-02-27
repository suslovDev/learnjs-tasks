function topSalary(salaries) {
  let maxSalary = 0;
  let nameWhoMax = null;

  for (const [name, salary] of Object.entries(salaries)) {
    if (salary > maxSalary) {
      maxSalary = salary;
      nameWhoMax = name;
    }
  }

  return nameWhoMax;
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

console.log(topSalary(salaries));
