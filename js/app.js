window.alert("It works!");
var students = ['Sean', 'Jenny', 'Singh', 'Mark', 'Lisa'];
for(var i = 0; i < students.length; i++) {
  console.log("My name is " + students[i] + " and I go WDI in Santa Monica.");
}

var moreStudents = ['Ilya', 'David', 'Evan', 'Carlos', 'Ian'];
var index = 0;
while(index < moreStudents.length) {
  console.log("My name is " + moreStudents[index] + " and I also go WDI in Santa Monica.");
  index++;
}
