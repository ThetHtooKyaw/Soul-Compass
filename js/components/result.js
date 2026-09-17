import { monthShortNames } from "../../model/zodiac_model.js";
import { zodiacDescriptionList } from "../../model/zodiac_description_model.js";

export function displayZodiacResult({ zodiacSign }) {
  const contents = zodiacDescriptionList[zodiacSign.name];

  const zodiacImage = document.querySelector(".sign-image");
  const zodiacName = document.querySelector(".sign-title");
  const zodiacDate = document.querySelector(".sign-date");

  const elementImage = document.getElementById("element-image");
  const elementTitle = document.getElementById("element-title");
  const planetImage = document.getElementById("planet-image");
  const planetTitle = document.getElementById("planet-title");

  const sunSign = document.getElementById("sun-sign");
  const strengths = document.getElementById("strengths");
  const weaknesses = document.getElementById("weaknesses");
  const compatibility = document.getElementById("compatibility");

  zodiacImage.src = zodiacSign.image;
  zodiacName.textContent = zodiacSign.name;
  zodiacDate.textContent = formatZodiacSignDate({ zodiacSign });
  elementImage.src = zodiacSign.element.image;
  elementTitle.textContent = zodiacSign.element.name;
  planetImage.src = zodiacSign.planet.image;
  planetTitle.textContent = zodiacSign.planet.name;

  sunSign.textContent = contents.sunSign;
  strengths.textContent = contents.strengths;
  weaknesses.textContent = contents.weaknesses;
  compatibility.textContent = contents.compatibility;
}

export function toggleElement() {
  const label = document.getElementById("element-button");
  const elementContainer = document.getElementById("element-container");

  label.classList.toggle("is-changed");
  elementContainer.classList.toggle("is-open");
}

export function togglePlanet() {
  const label = document.getElementById("planet-button");
  const planetContainer = document.getElementById("planet-container");

  label.classList.toggle("is-changed");
  planetContainer.classList.toggle("is-open");
}

// Helper functions
function formatZodiacSignDate({ zodiacSign }) {
  const startMonth = monthShortNames[zodiacSign.startMonth - 1];
  const startDate = zodiacSign.startDate;
  const endMonth = monthShortNames[zodiacSign.endMonth - 1];
  const endDate = zodiacSign.endDate;

  return `${startMonth} ${Number(startDate)} - ${endMonth} ${Number(endDate)}`;
}
