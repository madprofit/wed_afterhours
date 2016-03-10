var students = ['Sean', 'Jenny', 'Singh', 'Mark', 'Lisa'];
for(var i = 0; i < students.length; i++) {
  console.log("My name is " + students[i] + " and I'm going to be a developer.");
}

var moreStudents = ['Ilya', 'David', 'Evan', 'Carlos', 'Ian'];
var index = 0;
while(index < moreStudents.length) {
  console.log("My name is " + moreStudents[index] + " and I also go WDI in Santa Monica.");
  index++;
}

var students2 = ['Erik', 'Jenny', 'David', 'Carlos', 'Adam', 'Lisa'];
for (var i = 0; i < students2.length; i++ ) {
  console.log("My name is " + moreStudents[index] + " and I'm going to be a developer.");
  index++;
}

var i = 0;
var staff = ['Phil', 'Matt', 'Kate', 'John', 'Philip'];
while (i < staff.length) {
  console.log("This wonderful person is teaching us everything we know about code: " + staff[i]);
  i++;
}
