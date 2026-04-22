
    var a = 50
    a = 100
    console.log(a)
    //100
    
    let b = 80
    c = b + 10
    console.log(c)
    //90

    const d = 500
    const result = d + 100
    console.log(result)
    //600

    let e = "welcome team"
    console.log(e)
    //welcome team

    let f  = "2026"
    console.log(f)
    //2026

    let g = "true"
    console.log(g)
    //true

    let name="javaScript"
    console.log(name)
    //javascript

    let num=250
    console.log(num)
    //250

    let boo = true
     console.log(boo)
     //true

    let fruit = ["apple", "grapes", "mango", "watermelon", "banana"]
    console.log(fruit)
    console.log(fruit[0])
    console.log(fruit[fruit.length-1])
    // apple, grapes, mango, watermelon, banana
    //apple
    //banana
    
    let student={
        name:"Thippesh",
        age:26,
        course:"fullstackdeveloper"
    }
    console.log(student.name)
    console.log(student.age)
    // Thippesh
    // 26

    let x = 5
    x++
    console.log(x)
    //6

    let y = 10
    y--
    console.log(y)
    //9

    let ab=5>2&&10>3
    console.log(ab)
    //true

    let ac=7<5||8>2
    console.log(ac)
    //true

    let ad=!(10>5)
    console.log(ad)
    //false

    let age = 18
     age>=18 ? console.log("Eligible"):console.log("noteligible")
     //Eligible

    
     console.clear()

     // Task 2 ------------------------------------------------------------

      //let students = [
        //{id:1, name:"Thippesh", mark:85, course:"MERN"}
        //{id:2, name:"jhon", mark:45, course:"python"}
        //{id:3, name:"priya", mark:72, course:"java"}
        //{id:4, name:"arun", mark:95, course:"React"}
     //]

     // task 1 Print all students
             let obj = {
                 id : "1",
                  name : "Thippesh",
                 mark : "85", 
                 course : "Mern"
              }
     

             for (let s in obj){
             console.log(obj[s]);
        
              }
            //ans 1 Naveen 85 Men

              let objt = {
                 id : "12",
                 name : "jhon",
                 mark : "45", 
                course : "python"
              }
     

             for (let t in objt){
             console.log(objt[t]);
        
            }
            //ans 2 jhon 45 python

    // task 2: pass/fail

     let Thippesh = 85;
     let jhon = 45;

     function checkresult(marks){
        if (marks>=50){
            return "pass";
        }else{
            return "fail"
        }
    }
        console.log("Thippesh: " + checkresult(Thippesh));
        console.log("jhon: " + checkresult(jhon));
        //Thippesh pass
        //jhin fail

    // task 3 grade system
    
      const students = [
       { name: "Thippesh", marks: 85 },
       { name: "Jhon", marks: 45 },
       { name: "Priya", marks: 72 },
       { name: "Arun", marks: 95 }
         ];

      function getGrade(marks) {
         if (marks >= 90) return "A Grade";
         else if (marks >= 75) return "B Grade";
         else if (marks >= 50) return "C Grade";
         else return "Fail";
        }
        students.forEach(student => {
        const grade = getGrade(student.marks);
        console.log(`${student.name}: - ${grade}`);
        });

        // ans- Thippesh: - B Grade
              //Jhon: - Fail
              //Priya: - C Grade
               //Arun: - A Grade


    // task 4: topper student

    const students1 = [
       { name: "Thippesh", marks: 85 },
       { name: "Jhon", marks: 45 },
       { name: "Priya", marks: 72 },
       { name: "Arun", marks: 95 }
         ];
         let topper = students1[0];

         for (let i = 1; i < students1.length; i++) {
            if (students1[i].marks > topper.marks) {
               topper = students1[i];
              }
              }

       console.log(`Topper is ${topper.name} - ${topper.marks}`);
       // ans - Topper is arun - 95

       // Task 5  

        let course = "mern"
           if (course = "mern"){
            console.log("Thippesh");
          }else if (course = "python"){
            console.log("jhon");
            
          }else if (course = "java"){
            console.log("priya");
            
          }else if (course= "react"){
            console.log("Arun");
            
          }

     // task 6
        
       students.push({id:5, name:"Rahul", mark:88, course:"Node JS"});

        console.log(students);

    // task 7

      let status = "present"

     switch (status) {
        case "present": console.log("Welcome");break;
        case "absent": console.log("Mark Absent"); break;
        case "leave": console.log("Approve Leave");break;

        
    
        default: console.log("Welcome");
        
            break;
         }
       // ans - let status is present - Welcome
       //       let status is absent - mark absent
       //       let status is leave - Approve leave 
           
    //task 8
    let username = "Admin"
    let password = "1234"

    let inputusername = prompt("enter your user name")
    let inputpassword = prompt("enter your password")

    if (inputusername === "Admin"){
        if (inputpassword === "1234"){
            alert("Login Success");
            
        }else{
            alert("invalid user");
            
        }
    alert("Login Success");
        
    } else {
        alert("Invalid user");
        
    }
       
       


        
     



     
         

