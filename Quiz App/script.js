const questionList = [
	{
		id: 1,
		question: "What is 1 + 1?",
		options: [11, 9, 2, 4],
		correctOption: 2,
	},
	{
		id: 2,
		question: "What is 2 + 2?",
		options: [22, 2, 9, 4],
		correctOption: 3,
	},
	{
		id: 3,
		question: "What is 3 + 3?",
		options: [33, 3, 9, 6],
		correctOption: 3,
	},
	{
		id: 4,
		question: "What is 4 + 4?",
		options: [16, 8, 4, 44],
		correctOption: 1,
	},
	{
		id: 5,
		question: "What is 5 + 5?",
		options: [25, 55, 5, 10],
		correctOption: 3,
	},
	{
		id: 6,
		question: "What is 6 + 6?",
		options: [66, 6, 18, 12],
		correctOption: 3,
	},
	{
		id: 7,
		question: "What is 7 + 7?",
		options: [14, 77, 7, 49],
		correctOption: 0,
	},
	{
		id: 8,
		question: "What is 8 + 8?",
		options: [8, 16, 88, 18],
		correctOption: 1,
	},
	{
		id: 9,
		question: "What is 9 + 9?",
		options: [18, 12, 91, 4],
		correctOption: 0,
	},
	{
		id: 10,
		question: "What is 10 + 10?",
		options: [1010, 20, 19, 11],
		correctOption: 1,
	},
];

// Correct Option => [2, 3, 3, 1, 3, 3, 0, 1, 0, 1]

const questionNumberIndicatorEl = document.querySelector(".question-number");
const scoreEl = document.querySelector(".score");
const tryAgainBtn = document.querySelector(".try-again-btn");
tryAgainBtn.classList.add("hidden");

const questionContainerEl = document.querySelector(".question-container");
const questionEl = questionContainerEl.children[0];
const options = questionContainerEl.children[1];
const optionOne = options.children[0];
const optionTwo = options.children[1];
const optionThree = options.children[2];
const optionFour = options.children[3];

const abcd = ["(a)", "(b)", "(c)", "(d)"];

let currentQuestion = -1;
let score = 0;

function generateNextQuestion() {
	currentQuestion++;
	questionEl.textContent = questionList[currentQuestion].question;
	for (let i = 0; i < 4; i++) {
		options.children[
			i
		].textContent = `${abcd[i]} ${questionList[currentQuestion].options[i]}`;
	}
	questionNumberIndicatorEl.textContent = `Question: ${
		currentQuestion + 1
	}/10`;
}

function checkAnswer(optionChoosen) {
	let correctOption = questionList[currentQuestion].correctOption;
	console.log("Correct Option ", correctOption);
	console.log("Choosen Option ", optionChoosen);

	if (correctOption == optionChoosen) {
		score++;
		scoreEl.textContent = `score: ${score}`;
	}

	if (currentQuestion >= 9) {
		tryAgainBtn.classList.remove("hidden");
	}
}

generateNextQuestion();

optionOne.addEventListener("click", () => {
	checkAnswer(0);
	generateNextQuestion();
});
optionTwo.addEventListener("click", () => {
	checkAnswer(1);
	generateNextQuestion();
});
optionThree.addEventListener("click", () => {
	checkAnswer(2);
	generateNextQuestion();
});
optionFour.addEventListener("click", () => {
	checkAnswer(3);
	generateNextQuestion();
});

tryAgainBtn.addEventListener("click", () => {
	currentQuestion = -1;
	score = 0;
	generateNextQuestion();
	scoreEl.textContent = `Score : 0`;
	tryAgainBtn.classList.add("hidden");
});
