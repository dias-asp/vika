const questions = [
    {
        image: 'https://via.placeholder.com/300?text=Question+1',
        answers: ['Correct Answer 1', 'Wrong Answer 1', 'Wrong Answer 2', 'Wrong Answer 3']
    },
    {
        image: 'https://via.placeholder.com/300?text=Question+2',
        answers: ['Correct Answer 2', 'Wrong Answer 1', 'Wrong Answer 2', 'Wrong Answer 3']
    },
    {
        image: 'https://via.placeholder.com/300?text=Question+3',
        answers: ['Correct Answer 3', 'Wrong Answer 1', 'Wrong Answer 2', 'Wrong Answer 3']
    }
];

let currentQuestionIndex = 0;

document.getElementById('start-button').addEventListener('click', startTest);
document.getElementById('restart-button').addEventListener('click', restartTest);

function startTest() {
    console.log('Starting test...');
    document.getElementById('welcome-screen').classList.add('hidden');
    document.getElementById('test-screen').classList.remove('hidden');
    loadQuestion();
    console.log('Test started!');
}

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-image').src = question.image;

    const buttons = document.querySelectorAll('.answer-button');
    buttons.forEach((button, index) => {
        button.textContent = question.answers[index];
        button.style.display = 'block'; // Reset display
        button.onclick = () => handleAnswer(index);
    });
}

function handleAnswer(index) {
    if (index === 0) { // Correct answer is always the first one
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion();
        } else {
            completeTest();
        }
    } else {
        // Wrong answer: hide the button
        const buttons = document.querySelectorAll('.answer-button');
        buttons[index].style.display = 'none';
    }
}

function completeTest() {
    document.getElementById('test-screen').classList.add('hidden');
    document.getElementById('result-screen').classList.remove('hidden');
}

function restartTest() {
    currentQuestionIndex = 0;
    document.getElementById('result-screen').classList.add('hidden');
    document.getElementById('welcome-screen').classList.remove('hidden');
}