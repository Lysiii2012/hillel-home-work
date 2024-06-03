let company = {
    sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600}],
    development: {
        web: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800}],
        internals: [{name: 'Jack', salary: 1300}]
    }
};

function calculateSalary(obj){
   let totalSalary = 0;

   for (let key in obj){
        if (Array.isArray(obj[key])){
            obj[key].forEach(item => {
                if (item.salary){
                     totalSalary += item.salary;
                }
            });
        } else if (typeof obj[key] === 'object' && obj[key] !== null){
            totalSalary += calculateSalary(obj[key]);
        }
   }
   return totalSalary;

}

console.log(calculateSalary(company))