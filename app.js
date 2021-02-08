var correctAnswers = ['B', 'D', 'A', 'A', 'C', 'D', 'B', 'A', 'D', 'D'];
var form = document.querySelector('.quiz-form');
var scoreDisplay = document.querySelector('.score');
var display = document.querySelector('.d');
var reset = document.querySelector('.reset');
var hide1 = document.querySelector('.hide1');
var hide2 = document.querySelector('.hide2');
var goto = document.querySelector('.goto');
var q1 = document.querySelectorAll('.q1');
var q2 = document.querySelectorAll('.q2');
var q3 = document.querySelectorAll('.q3');
var q4 = document.querySelectorAll('.q4');
var q5 = document.querySelectorAll('.q5');
var q6 = document.querySelectorAll('.q6');
var q7 = document.querySelectorAll('.q7');
var q8 = document.querySelectorAll('.q8');
var q9 = document.querySelectorAll('.q9');
var right = document.querySelectorAll('.right');
var correct = document.querySelectorAll('.correct');

q1.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,300);
    })
});

q2.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,500);
    })
});

q3.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,750);
    })
});

q4.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,975);
    })
});

q5.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,1205);
    })
});

q6.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,1465);
    })
});

q7.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,1700);
    })
});

q8.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,1950);
    })
});

q9.forEach(option => {
    option.addEventListener('click', () => {
        scrollTo(0,2100);
    })
});

form.addEventListener('submit', e => {

    e.preventDefault();

    let score = 0;

    var userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];

    userAnswer.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            score += 10;
        }
    });

    let count = 0;

    scrollTo(0,0);

    hide1.style.display = 'block';
    hide2.style.display = 'inline';
    display.style.display = 'block';

    let timer = setInterval(() => {
        scoreDisplay.textContent = count + "%";
        if(count === score){
            clearInterval(timer);
        }
        else{
            count++;
        }
    },15);

    right.forEach(e => {
        e.style.display = 'inline';
    });

    correct.forEach(e => {
        e.style.backgroundColor = "green";
    });
});

reset.addEventListener('click', () => {
    display.style.display = 'none';

    right.forEach(e => {
        e.style.display = 'none';
    });

    correct.forEach(e => {
        e.style.backgroundColor = "transparent";
    });

    hide1.style.display = 'none';
    hide2.style.display = 'none';
    scrollTo(0,0);
})

goto.addEventListener('click', () => {
    scrollTo(0,2240);
});