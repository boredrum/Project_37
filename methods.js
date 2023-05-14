export let employeesMethods = {
    totalSalary(employees){
        let total = 0;
        employees.forEach(element => {
            total += element.salary;
        });
        return total
    },
    departmentsQuantity(employees){
        let departments = [];
        employees.forEach(element => {
            departments.push(element.department)
        });
        departments = Array.from(new Set(departments)).length;
        return departments
    },
    departmentsSalary(employees){
        let departments = {};
        employees.forEach(element => {
            if(!departments[element.department]){
                departments[element.department] = 0;
            };
            departments[element.department] += element.salary;
        });
        return departments
    }
}