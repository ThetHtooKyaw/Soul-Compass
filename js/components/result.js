import { monthShortNames } from "../../model/zodiac_model.js";

export function displayZodiacResult({ zodiacSign }) {
  const zodiacImage = document.querySelector(".sign-image");
  const zodiacName = document.querySelector(".sign-title");
  const zodiacDate = document.querySelector(".sign-date");
  const elementImage = document.getElementById("element-image");
  const elementTitle = document.getElementById("element-title");
  const planetImage = document.getElementById("planet-image");
  const planetTitle = document.getElementById("planet-title");

  zodiacImage.src = zodiacSign.image;
  zodiacName.textContent = zodiacSign.name;
  zodiacDate.textContent = formatZodiacSignDate({ zodiacSign });
  elementImage.src = zodiacSign.element.image;
  elementTitle.textContent = zodiacSign.element.name;
  // planetImage.src = zodiacSign.planet.image;
  planetTitle.textContent = zodiacSign.planet.name;
}

function formatZodiacSignDate({ zodiacSign }) {
  const startMonth = monthShortNames[zodiacSign.startMonth - 1];
  const startDate = zodiacSign.startDate;
  const endMonth = monthShortNames[zodiacSign.endMonth - 1];
  const endDate = zodiacSign.endDate;

  return `${startMonth} ${Number(startDate)} - ${endMonth} ${Number(endDate)}`;
}
