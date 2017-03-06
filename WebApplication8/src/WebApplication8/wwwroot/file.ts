class Test {
    problem: string;
    answer: string;
}

let score = 0;

function addUp() {
    return this.score + 20 + "points";
}

let question1 = new Test();
question1.problem = 'What color is the Sun? \r Blue, \r Green, \r Yellow';
question1.answer = 'Yellow';

alert('Before you begin this quiz you will start off with 0 points. \r Each time you get a question right 25 points will be added to your overall score');

let evaluate = prompt(question1.problem);

if (evaluate == question1.answer) {
    alert('Correct!');
    alert(addUp());
}
else {
    alert('Incorrect!');
}

let question2 = new Test();
question2.problem = 'What President is on the $5 bill? \r Abraham Lincoln \r George Washington \r Chuck Norris';
question2.answer = 'Abraham Lincoln';

let evaluate1 = prompt(question2.problem);

if (evaluate1 == question2.answer) {
    alert('Correct!');
    alert(addUp());
}
else {
    alert('Incorrect!');
}

let question3 = new Test();
question3.problem = 'The color of the American Flag is Red, White and _____? \r Pink \r Magenta \r Blue';
question3.answer = 'Blue';

let evaluate2 = prompt(question3.problem);

if (evaluate2 == question3.answer) {
    alert('Correct!');
    alert(addUp());
}
else {
    alert('Incorrect!');
}

let question4 = new Test();
question4.problem = 'How many hours are in a day? \r 12 \r 24 \r 35';
question4.answer = '24';

let evaluate3 = prompt(question4.problem);

if (evaluate == question4.answer) {
    alert('Correct!');
    alert(addUp());
}
else {
    alert('Incorrect!');
}

let question5 = new Test();
question5.problem = 'Finish the sentence. "Luke i am your _____" \r Father \r Sister \r Long Lost Brother';
question5.answer = 'Father';

let evaluate4 = prompt(question5.problem);

if (evaluate4 == question5.answer) {
    alert('Correct!');
    alert(addUp());
}
else {
    alert('Incorrect!');
}