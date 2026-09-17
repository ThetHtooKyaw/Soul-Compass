import { initializeLoader } from "./components/loader.js";
import { monthShortNames } from "../model/zodiac_model.js";
import {
  spinWheel,
  spinBetweenSigns,
  spinToSign,
  reverseWheel,
} from "./components/wheel.js";
import { createSliderItems } from "./components/slider.js";
import { changeStep, resultStep } from "./components/steps.js";
import {
  displayZodiacResult,
  toggleElement,
  togglePlanet,
} from "./components/result.js";

initializeLoader();

// Date Configuration
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;
const currentDay = new Date().getDate();

function getDaysInMonth({ year, month }) {
  return new Date(year, month, 0).getDate();
}

// Element References
const yearSlider = document.getElementById("year-slider");
const monthSlider = document.getElementById("month-slider");
const daySlider = document.getElementById("day-slider");

const confirmYearButton = document.getElementById("confirm-year");
const confirmMonthButton = document.getElementById("confirm-month");
const cancelMonthButton = document.getElementById("cancel-month");
const confirmDayButton = document.getElementById("confirm-day");
const cancelDayButton = document.getElementById("cancel-day");

const elementButton = document.getElementById("element-button");
const planetButton = document.getElementById("planet-button");

// Slider Controllers
const yearSliderController = createSliderItems({
  slider: yearSlider,
  min: currentYear - 40,
  max: currentYear + 3,
  currentItem: currentYear,
  maxSelectableValue: currentYear,
});

const monthSliderController = createSliderItems({
  slider: monthSlider,
  min: 1,
  max: 12,
  currentItem: currentMonth,
  formatItem: (item) => monthShortNames[item - 1],
});

let daySliderController = null;

// Event Listeners
// Year Components
confirmYearButton.addEventListener("click", async () => {
  const selectedYear = yearSliderController.getValue();

  if (selectedYear === currentYear) {
    monthSliderController.setMaxSelectableValue(currentMonth);
  } else {
    monthSliderController.setMaxSelectableValue(12);
  }

  confirmYearButton.disabled = true;

  try {
    yearSliderController.lockScroll();
    yearSliderController.animateActiveItem();
    await spinWheel();

    await new Promise((resolve) => setTimeout(resolve, 5500));

    changeStep(1);
    requestAnimationFrame(() => {
      monthSliderController.center();
    });
  } catch (error) {
    console.error("Error during year confirmation:", error);
  } finally {
    yearSliderController.unlockScroll();
    confirmYearButton.disabled = false;
  }
});

// Month Components
confirmMonthButton.addEventListener("click", async () => {
  const selectedYear = yearSliderController.getValue();
  const selectedMonth = monthSliderController.getValue();

  confirmMonthButton.disabled = true;
  cancelMonthButton.disabled = true;

  try {
    monthSliderController.lockScroll();
    monthSliderController.animateActiveItem();
    await spinBetweenSigns({ month: selectedMonth });
    await new Promise((resolve) => setTimeout(resolve, 5500));

    const daysInSelectedMonth = getDaysInMonth({
      year: selectedYear,
      month: selectedMonth,
    });

    const maxSelectableDay =
      selectedYear === currentYear && selectedMonth === currentMonth
        ? currentDay
        : daysInSelectedMonth;

    const startingDay = Math.min(currentDay, daysInSelectedMonth);

    daySliderController = createSliderItems({
      slider: daySlider,
      min: 1,
      max: daysInSelectedMonth,
      currentItem: startingDay,
      maxSelectableValue: maxSelectableDay,
    });

    changeStep(1);
    requestAnimationFrame(() => {
      daySliderController.center();
    });
  } catch (error) {
    console.error("Error during month confirmation:", error);
  } finally {
    monthSliderController.unlockScroll();
    confirmMonthButton.disabled = false;
    cancelMonthButton.disabled = false;
  }
});

cancelMonthButton.addEventListener("click", async () => {
  cancelMonthButton.disabled = true;
  confirmMonthButton.disabled = true;

  try {
    monthSliderController.lockScroll();
    await reverseWheel();
    await new Promise((resolve) => setTimeout(resolve, 5500));

    changeStep(-1);
    requestAnimationFrame(() => {
      yearSliderController.center();
    });
  } catch (error) {
    console.error("Error during month cancellation:", error);
  } finally {
    monthSliderController.unlockScroll();
    confirmMonthButton.disabled = false;
    cancelMonthButton.disabled = false;
  }
});

// Day Components
confirmDayButton.addEventListener("click", async () => {
  if (!daySliderController) return;

  const selectedMonth = monthSliderController.getValue();
  const selectedDay = daySliderController.getValue();

  confirmDayButton.disabled = true;
  cancelDayButton.disabled = true;

  try {
    daySliderController.lockScroll();
    daySliderController.animateActiveItem();
    const selectedZodiacSign = await spinToSign({
      month: selectedMonth,
      day: selectedDay,
    });
    await new Promise((resolve) => setTimeout(resolve, 6000));

    changeStep(1);
    resultStep();
    if (selectedZodiacSign) {
      displayZodiacResult({ zodiacSign: selectedZodiacSign });
    }
  } catch (error) {
    console.error("Error during day confirmation:", error);
  } finally {
    daySliderController.unlockScroll();
    confirmDayButton.disabled = false;
    cancelDayButton.disabled = false;
  }
});

cancelDayButton.addEventListener("click", async () => {
  if (!daySliderController) return;

  cancelDayButton.disabled = true;
  confirmDayButton.disabled = true;

  try {
    daySliderController.lockScroll();
    await reverseWheel();
    await new Promise((resolve) => setTimeout(resolve, 5500));

    changeStep(-1);
    requestAnimationFrame(() => {
      monthSliderController.center();
    });
  } catch (error) {
    console.error("Error during day cancellation:", error);
  } finally {
    daySliderController.unlockScroll();
    confirmDayButton.disabled = false;
    cancelDayButton.disabled = false;
  }
});

elementButton.addEventListener("click", function (event) {
  event.stopPropagation();
  toggleElement();
});

planetButton.addEventListener("click", function (event) {
  event.stopPropagation();
  togglePlanet();
});
