 // Level 1 - functions basics

 ///  Task 1 - student form function

      function studentForm(name, age, course) {
    console.log("Name: " + name);
    console.log("Age: " + age);
    console.log("Course: " + course);
    }

    studentForm("Naveen", 22, "MERN");

////  Task 2 - Calculation Function
   
     function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
     }
     calc(50,20);

///  Task 3- Reusable Greeting
   
    function greet(name) { 
           console.log(`Hello ${name}`);
        
        }
        ["Kamal", "Praveen", "Sai"].forEach(greet);

/// Task 4- Return value

    function square(num) {
    return num * num;
    }

    console.log(square(5));

/// Task 5 - Scope check
 
    function myFunction() {
    let secret = "javascript";
    console.log(secret);
    }

    //myFunction();

    //console.log(secret); 
    // javascript
    // task3.js:47 Uncaught ReferenceError: secret is not defined
    // Inside the function → secret exists 
    //Outside the function → secret does 

///  Task 6 - Merge Arrays

    let boys = ["car", "bike"];
    let girls = ["doll", "teddy"];
    let merged = [...boys, ...girls];

    console.log(merged);

/// Task 7 - unlimited numbers

   function sumAll(...nums) {
   return nums.reduce((total, num) => total + num, 0);
   }

   console.log(sumAll(10, 20, 30, 40));

/// Task 8 - Array Destructuring

   let colors = ["red", "green", "blue"];
   let [c1, c2, c3] = colors;

   console.log(c1);
   console.log(c2);
   console.log(c3);

/// Task 9 - object destructuring

   let emp = {
   name: "Naveen",
   role: "Developer",
   salary: "5LPA"
   };

   let { name, role } = emp;

   console.log(name, role);

/// Task 10 - offer generater

    function* cashbackOffers() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
    }
    const offers = cashbackOffers();

    console.log(offers.next().value);
    console.log(offers.next().value); 
    console.log(offers.next().value); 
    console.log(offers.next().value); 
    console.log(offers.next().value);

/// Task 11- Curry function

   function add(a) {
   let sum = a;

   function inner(b) {
    sum += b;
    return inner;
   }

    inner.valueOf = () => sum;
    inner.toString = () => sum;

    return inner;
    }
    console.log(add(25)(25) + 0);

/// Task 12 - Students Marks Analyzer

    function marks(...nums) {
    let total = 0;

    for (let num of nums) {
        total += num;
    }

    let average = total / nums.length;

    console.log("Total = " + total);
    console.log("Average = " + average);
    }
    marks(80, 90, 70, 60);

/// Challenge Task (Real Company Level)

    function register(name, role, ...skills) {
    console.log(`Name: ${name}`);
    console.log(`Role: ${role}`);
    console.log(`Skills: ${skills.join(" ")}`);
    }

    register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");