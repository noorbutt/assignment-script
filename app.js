
//chapter 21 to 25
//question 1
//var firstName = prompt ("enter your fristName");
//var lastName = prompt ("enter your lastName");
//var fullName = firstName + lastName ;
//alert (fullName + " "  +"assalam-u-Alikum")



 //question 2
 //var input = prompt("Please Enter Your Favorite Mobile Modeld?");
 // var Length = input.length;
 // document.write("Total Length of String is :" + Length);


//question 3
//var find n index
//var text = "pakistani"
//var indexNum = text.indexOf("n")
//document.write("string: pakistani index of 'n': " + indexNum)





//question 4
//var find last index
//var text = "HeLLo world"
//var indexNum = text.indexOf("l")
//document.write("string: hello world Last index of 'l': "+ indexNum)



//question 5
//var find string index
//var text = "i"
//var indexNum = text.indexOf("i")
//document.write( "string : Pakistani Character at index 3 :" + text)



//question 7
//incomplete
//var replace to string;
//var greeting = 'Hyderabad';
 //var greet = greeting.replace(/hyder/,"islam")
//document.write(greet)
 



//question 9
//var integerString = "472"
 //var num = Number(integerString);
 //document.write( num)



 //question 10
 //string to uppercase
 //var peanuts = prompt( "write peanuts ");
 //peanuts = peanuts.toUpperCase();
 //document.write(peanuts)
 



//question 11
//var sentence = prompt( " what we learn ");
 ///sentence = sentence[0].toUpperCase() + sentence.slice(1);
 //document.write("Title case:" +" " + sentence)



 //question 12
//num to string
//incomplete
//var input =  35.36 ; 
 //document.write(Number.parseInt(input,3));




 // question 13

//var word = prompt("Enter your name");
///var check = word.lenght;
//arr = ["@", "!" , "." , "," ]
//if ( check === word.lenght){
  //alert ( word + "Valid username");
//}
//else if (word === check ){
   // alert (word + "Please enter a valid password");
//}




//question 14

//var user = prompt ("enter your choice")
//var arr = ["cake", "apple pie", "cookie", "chips", "patties"];

//(vai .lenght = 0; i< arr.length ; i++  ){
  //   alert()
//}






//question 15 
//var inputvalue = prompt("Enter  password");
//var pass = checkpass(inputvalue);
//if (pass) {
  //  alert("password is oky");
//} else {
    //alert("please enter a valid password");
//}
//function checkpass(inputvalue) {
   // var result = /^[0-9A-Za-z]+$/;
   // if (inputvalue.match(result)) {
      //  if (inputvalue.charAt(0) != 'c' && inputvalue.length > 6) {
        //    return true;
       // }
  //  }
 //   return false;
//}



//question 16
//incomplete
//var q = " University of Karachi";
//var  split = q.split("")
 //document.write( split)       
 


 //question 17
 //var city =  "pakistan";
 //var slice = city.slice(7)
 //document.write(slice)






//pdf 26 to 30
//question 1
//Number
//var number = 3.45214; 
//document.write("number :" + number + "<br>"); 
// ROUND MATHED  
//document.write("Round of Value :" + Math.floor(number) + "<br>"); 
//var number = 3.45214;
//FLOOR MATHED  
//document.write("floor value :" + Math.floor(number) + "<br>");
//var number = 3.45214;
// CEIL MATHED 
//document.write("Ceil :" + Math.ceil(number) + "<br>");


//question 2
//var number = -2.673
//document.write ("number" + number + "<br>");
//ROUND OFF
//document.write("round of value:" + Math.round(number) + "<br>")
//var number = -2.673
//FLOOR off
//document.write("floor value:" + Math.floor(number) + "<br>");
//var number = -2.673;
//CEIL off
//document.write("ceil value:" + Math.ceil(number) + "<br>")
//var number = -2.673;




//question 3

//var x = -4;
//var y;
//if (x < 0 ){
 // y = x  * -1;
//}
//document.write("Absolute value of" +" "+ + x + "is" + " " + y);

//question 4

//var x = 4;
//var num = Math.floor (Math.random () * 7) ;
//document.write("Random dice Number is:" + x + "<br>" + "random value :" + num);



//question 5
//var Head = prompt ("Enter head username")
//var toss = Math.floor (Math.random () * 2 ) +1;
//document.write(toss + "<br>" + "random coin value: Heads")

//var Tails = prompt ("Enter tails username")
//var toss = Math.floor ( Math.random () * 1) + 1;
//document.write(toss + "<br>" + "random coin value: Tails")




//question 6
   // == random number == //
   //var calc = Math.floor(Math.random () * 100) + 1;
   //document.write("random number between 1 and 100 :" + calc)
   
  



//question 8

//var num = prompt ("Enter a number between 1 and 100")
//var calc = Math.floor(Math.random() * 10 ) + 1  ;

//if (num < 10 ){
  //alert ( "congratulate")
//}
//else if (num > 10){
    //alert ("Tray again!\n Prevent this page from creating additional dialog box")
//}


//pdf 31
//question 1
//var a = new Date () 
//document.write(a)



//question 2
//var months =  ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var d = ne                                                                                                                                                                                                                                                                                                                                                                                      w Date(); 
//var currentMonth = months[d.getMonth()];
//document.write(currentMonth);


//question 3
//var dayNames = ["Sun" , "Mon" , "Tue", "Wed", "Thu", "Fri", "Sat"];
//var d = new Date();
//var Day = dayNames [d.getDay()] ;
//document.write("Today is" + " " + Day); 



//question 4
//var arr = ["Sunday" , "Monday" , "Tuesday", "Wednesday", "Thursday", "Friday", "saturday"]

//if (arr.lenght === "Saturday") {
 // alert ("it is fun  day" )
//}else {
  ///alert ( "it is not fun day" )
//}



//question 5
//var userInput = prompt("hey Please Enter Your number Here!")
//var numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//var now = new Date();
//var theDay = now.getDate();
//if (userInput <= 15) {
    //document.write("First Fifteen days of the month");
//} else {
   // document.write("Last days of the month");
//}


//question 6
//var a = new Date() ;
//document .write (a);

//var a = new Date() ;
//var b = a. getTime(); 
//document.write( "Elapsed milliseconds scince january 1 , 1970:" + " " + b );

//var a = new Date() ;
//var b = a.getTime(); 
//var curr = a.getMinutes() ;
//document.write( "Elapsed minutes scince january 1 , 1970:" + " " + curr); 


//question 7
//var date = new Date ();
//var current_hour = date.getHours ();
//var current_min = date.getMinutes();
    
//if (current_hour < 12){
 
 //alert ("it's Am"  )
//}else {
    
   // alert("it's Pm")
//}



//question 8
// var last = new Date('june 20 2020');
 //var later = "Later Date: " + last;
 //document.write(later);







//question no 10
//var refdate = new Date(2015, 1, 1);
//var endTime = new Date();
//var timeDiff = (endTime - refdate) / 1000;
//document.write("Our Referance Date " + refdate + "<br>");
//document.write(timeDiff + "Seconds had passed since beginning of 2015");




//question no 11
//incomplete
//var date = new Date() ;
//document.write("current date:" +" " + date)
//var d = new Date();
//var currentHrs = d.getHours();
//document.write(currentHrs);



//question no 12
//incomplete
//var date = new Date();
//document.write ("current date :" + " " +date);
//var set = new Date ();
//set.getFullYear();
//Document.write(set);



//question 13
//var yourAge = prompt("Hey Noor please Enter YOur Age?");
//var currentDate = new Date();
//var ref = currentDate.getFullYear() - yourAge;
//document.write("Your Age is :" + yourAge + "<br>" + "Your birth year is :" + ref);



//question no 14
//var Customer_name ="Customer Name:";
//document.write(Customer_name + "  " +"noor butt" + "<br>")
//var month_name = "Month :";
//document.write( month_name + " " + "Feburuary" + "<br>" )
//var unit = "number of units :";
//document.write(unit + " " + "410" + "<br>")
//var charges_of_unit ="charges per unit :" ;
//document.write(charges_of_unit +" " + "16" + "<br>" )
//var net = "Net Amount Payable ( within Due Date )  : ";
//var num = 410 * 16 ;
//var mul = net + num;
//document.write(mul + "<br>" );
//var late_amount =  " Late Payment surcharge :"; 
//document.write (late_amount + " " + 350 +"<br>")
//var l = "Gross Amount Payable (After Due Date) : ";
//var num = 6560 + 350;
//var g = l + num ;
///document.write (g + "<br>");


//pdf no 35 to 38
//question no 1
//function currentdate() {
    //  var now = new Date();      
      //   }       
    //  document.write(new Date());
      


//question no 2
//function greet (){
    //var first = "noor";
   //  var last = "butt";
   //  var full = first + last;
    // alert("assalam-u-alikum" + " " +full);
        
//}
//greet();




//question no 3
//function input ()
//{
   // var input1 =  (6);
   // var input2 = (7);  
   //var h = input1+input2;
    //alert(h);
   //}
  
//input();



//question no 4
//function calculate(num1, num2, op) {
  //if (op == "+")
    //  return Number(num1) + Number(num2);
  //else if (op == "-")
   //   return num1 - num2;
  //else if (op == "*" || op == "x")
  //    return num1 * num2;
 // else if (op == "/")
    //  return num1 / num2;
//}
//var firstnum = prompt("First number");
//var secnum = prompt("Second number");
//var oper = prompt("Operator");
//calculate(firstnum, secnum, oper);
//document.write("Your answer is " + calculate(firstnum, secnum, oper));






//question no 7
//function count(){
   //  for(i=0; i<10; i++){
    //    alert(i);
    //  }
 // }
//count();




 //question 13
 //function char_count(str, letter) 
 //{
 //var letter_Count = 0;
// for (var position = 0; position < str.length; position++) 
 // {
  //  if (str.charAt(position) == letter) 
   //   {
  //   letter_Count += 1;
  //   }
  // }
 // return letter_Count;
//}
 ///console.log(char_count('w3resource.com', 'o'))





//question 12
//function string(){
  //  var m = "Web Development Tutorial";
  // var k = m.slice(4,15);
  //    alert(k);
 /// }

 // string();


 //question 14
 // function Circumference () {
  //     var radius = +prompt("enter the radius")
  //     var cirumf = 2*3.14*radius;
  //     document.write("The circumference is "+" "+cirumf)
  // }
  // circum();
  // function Area() {
  //     var radius = +prompt("enter the radius")
  //     var area = 3.14*radius*radius;
  //     document.write("The circumference is "+" "+area)
  // }
  // Area();