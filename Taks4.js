/// Task 4

// Task 1 -Array Basics
 
  let arr = [10, 20, 30, 40, 50];

   console.log(arr[0]);
   console.log(arr[arr.length - 1]);
   console.log(arr.length);

// Task - 2 Push & pop

  let arrr = [1, 2, 3];

   arrr.push(4, 5);
   arrr.pop();

     console.log(arrr);

// Task 3 - includes check

  let arr3= ["html","css","javascript","react"];

  let exists = arr3.includes("javascript");

   console.log(exists);

// Task 4 - Filter salaries

  let emp4 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
  ];

   let result = emp4.filter(e => e.salary > 20000);

   console.log(result);

// Task 5 - Map names

   let emp5 = [
  {name:"A", salary:10000},
  {name:"B", salary:50000},
  {name:"C", salary:30000}
  ];

  let names = emp5.map(e => e.name);

   console.log(names); 

// Task 6 - Reduce sum

   let emp6 = [
  { name: "A", salary: 10000 },
  { name: "B", salary: 50000 },
  { name: "C", salary: 30000 }
  ];

   let totalSalary = emp6.reduce((sum, employee) => {
    return sum + employee.salary;
    }, 0);

    console.log(totalSalary); 

// Task 7 - Remove duplicates

   let arr7 = [1,2,2,3,4,4,5];
   let uniqueArr = [...new Set(arr7)];

   console.log(uniqueArr); 

// Task 8 - Fund Largest Number

   let arr8 = [10, 200, 5, 90];
    let largest = Math.max(...arr8);
    console.log(largest);

// Task 9 - Reverse string without reverse()

    let str = "hello";
    let reversed = "";

    for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
    }

    console.log(reversed);

// Task 10 - Group by salary

    let emp10 = [
    {name:"A", salary:10000},
    {name:"B", salary:50000},
    {name:"C", salary:10000}
    ];

    let result10 = {};

    for (let i = 0; i < emp10.length; i++) {
    let { name, salary } = emp10[i];

    if (!result10[salary]) {
     result10[salary] = [];
    }

    result10[salary].push(name);
    }

    console.log(result10);

//  Task 11 - Flatten Array (without flat)

    let arr11 = [1, [2, [3, [4]]]];

    function flattenArray(input) {
    let result = [];

    for (let item of input) {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
    }

    return result;
    }

    console.log(flattenArray(arr11));

// Task 12 - Custom Sort (Descending)

   let arr12 = [5, 2, 9, 1];

    arr12.sort((a, b) => b - a);

     console.log(arr12);

// Task 13 - Find second Largest
  
    let arr13 = [10, 50, 20, 40];

    let sorted = [...new Set(arr13)].sort((a, b) => b - a);

    let secondLargest = sorted[1];

     console.log(secondLargest);

// Task 14 - Count characters

    let str14 = "aabbccdde";

    let count = {};

    for (let char of str14) {
    if (count[char]) {
        count[char]++;
    } else {
        count[char] = 1;
    }
    }

    console.log(count);

    

  