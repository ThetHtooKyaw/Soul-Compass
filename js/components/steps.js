// Variables
let currentStep = 1;
const totalSteps = 3;

// Exported Functions
export function changeStep(direction) {
  let nextStep = currentStep + direction;

  if (nextStep < 1 || nextStep > totalSteps) return;

  const currentElement = document.getElementById(`step-${currentStep}`);
  const nextElement = document.getElementById(`step-${nextStep}`);

  currentElement.classList.add("display-none");
  currentElement.classList.remove("animate-fade-up", "animate-fade-down");
  nextElement.classList.remove("display-none");

  if (direction === 1) {
    nextElement.classList.add("animate-fade-up");
  } else {
    nextElement.classList.add("animate-fade-down");
  }

  currentStep = nextStep;
}

export function resultStep() {
  const inputContainer = document.getElementById("input-container");
  const resultContainer = document.getElementById("result-container");

  inputContainer.classList.add("display-none");
  resultContainer.classList.remove("display-none");
  resultContainer.classList.add("animate-fade-up");
}

export function restartJourney() {
  const inputContainer = document.getElementById("input-container");
  const resultContainer = document.getElementById("result-container");

  for (let step = 1; step <= totalSteps; step++) {
    const stepElement = document.getElementById(`step-${step}`);
    stepElement.classList.toggle("display-none", step !== 1);
    stepElement.classList.remove("animate-fade-up", "animate-fade-down");
  }

  resultContainer.classList.add("display-none");
  resultContainer.classList.remove("animate-fade-up", "animate-fade-down");

  inputContainer.classList.remove("display-none");
  inputContainer.classList.remove("animate-fade-up", "animate-fade-down");

  void inputContainer.offsetWidth;
  inputContainer.classList.add("animate-fade-up");

  currentStep = 1;
}
