
// Predefined case database
const caseDatabase = [
    { problem: "Syntax error", solution: "Check for missing semicolons, brackets, or incorrect keywords.", feedback: [] },
    { problem: "Null pointer exception", solution: "Ensure all variables are initialized before use.", feedback: [] },
    { problem: "Application not responding", solution: "Optimize loops and avoid heavy tasks on the main thread.", feedback: [] },
    { problem: "API call failed", solution: "Check API keys, endpoint URLs, and error response codes.", feedback: [] }
];

// Select elements
const problemDropdown = document.getElementById("problemDropdown");
const searchBtn = document.getElementById("searchBtn");
const solutionContainer = document.getElementById("solutionContainer");
const problemText = document.getElementById("problemText");
const solutionText = document.getElementById("solutionText");
const userRatingInput = document.getElementById("userRating");
const submitRatingBtn = document.getElementById("submitRatingBtn");

let currentCase = null; // Holds the current case for updating

// Show solution when problem is selected
searchBtn.addEventListener("click", () => {
    const selectedProblemIndex = parseInt(problemDropdown.value);
    if (isNaN(selectedProblemIndex)) {
        alert("Please select a valid problem.");
        return;
    }

    // Get the selected case
    currentCase = caseDatabase[selectedProblemIndex];
    if (currentCase) {
        // Display the solution
        problemText.textContent = currentCase.problem;
        solutionText.textContent = currentCase.solution;
        solutionContainer.classList.remove("d-none");
    }
});

// Submit feedback
submitRatingBtn.addEventListener("click", () => {
    const userRating = parseInt(userRatingInput.value);

    if (!userRating || !currentCase) {
        alert("Please fill out all fields before submitting feedback.");
        return;
    }

    alert("Thank you for your feedback!");
});
