// Accordion Toggle Function
function toggleAccordion(element) {
    const content = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');

    // Toggle display of accordion content
    if (content.style.display === 'block') {
        content.style.display = 'none';
        icon.textContent = '+';
    } else {
        content.style.display = 'block';
        icon.textContent = '-';
    }
}

// Quiz Functions
const quizData = [
    {
        question: "What is a primary ethical concern with AI?",
        options: ["Bias", "Speed", "Efficiency"],
        answer: "Bias"
    },
    {
        question: "Why is transparency important in AI?",
        options: ["It improves accuracy", "It allows for accountability", "It speeds up processing"],
        answer: "It allows for accountability"
    },
    {
        question: "Which is a security concern with AI?",
        options: ["Data Encryption", "Adversarial Attacks", "User Interface"],
        answer: "Adversarial Attacks"
    },
    {
        question: "What is the primary purpose of AI in healthcare?",
        options: ["Entertainment", "Personalized Treatment", "Surveillance"],
        answer: "Personalized Treatment"
    },
    {
        question: "How can bias in AI be mitigated?",
        options: ["Using more data", "Ensuring diverse training data", "Ignoring bias"],
        answer: "Ensuring diverse training data"
    }
];

function openQuiz() {
    document.getElementById("quiz-modal").style.display = "block";
    loadQuiz();
}

function closeQuiz() {
    document.getElementById("quiz-modal").style.display = "none";
}

function loadQuiz() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = '';

    // Dynamically generate quiz questions
    quizData.forEach((item, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.className = "quiz-question";
        
        const questionTitle = document.createElement("h3");
        questionTitle.textContent = `Q${index + 1}: ${item.question}`;
        
        const optionsDiv = document.createElement("div");
        optionsDiv.className = "quiz-options";

        // Create radio buttons for each option
        item.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            optionsDiv.appendChild(label);
        });

        questionDiv.appendChild(questionTitle);
        questionDiv.appendChild(optionsDiv);
        quizContainer.appendChild(questionDiv);
    });
}

function submitQuiz() {
    let score = 0;

    // Evaluate the quiz
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });

    // Display quiz score
    alert(`You scored ${score} out of ${quizData.length}`);
    closeQuiz();
}
