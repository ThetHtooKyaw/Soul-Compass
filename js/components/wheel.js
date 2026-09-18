import { zodiacList, zodiacWheelItem } from "../../model/zodiac_model.js";

// Variables
let wheelRotation = 0;
let lastRotation = 0;

const zodiacWheel = document.querySelector(".zodiac-wheel");
const degreesPerSign = 360 / 12;
const fullSpins = 360 * 3;

// Exported Functions
export function spinWheel() {
  return animateWheelToRotation({ rotation: fullSpins });
}

export function spinBetweenSigns({ month }) {
  const WHEEL_START_MONTH = 3;
  const boundaryIndex = (WHEEL_START_MONTH - month + 12) % 12;
  const boundaryAngle = boundaryIndex * degreesPerSign;
  const alignmentAngle = 360 - boundaryAngle;

  return animateWheelToRotation({ rotation: fullSpins + alignmentAngle });
}

export async function spinToSign({ month, day }) {
  const zodiacSign = getZodiacSign({ month, day });

  if (!zodiacSign) {
    return null;
  }

  const signIndex = zodiacWheelItem.indexOf(zodiacSign.name.toLowerCase());
  const signCenterAngle = signIndex * degreesPerSign + 15;
  const targetRotation = (360 - signCenterAngle) % 360;
  const remainingRotation = getRotationDifference(targetRotation);

  await animateWheelToRotation({ rotation: fullSpins + remainingRotation });

  return zodiacSign;
}

export function reverseWheel() {
  if (lastRotation === 0) {
    return null;
  }

  const reverseRotation = -lastRotation;

  wheelRotation += reverseRotation;
  zodiacWheel.style.transform = `rotate(${wheelRotation}deg)`;

  return waitForTransitionEnd(zodiacWheel);
}

export function resetWheel() {
  wheelRotation = 0;
  lastRotation = 0;
  zodiacWheel.style.transition = "none";
  zodiacWheel.style.transform = `rotate(0deg)`;

  void zodiacWheel.offsetWidth;
  zodiacWheel.style.transition = "";
}

// Helper Functions
function waitForTransitionEnd(element, timeoutMs = 800) {
  return new Promise((resolve) => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      clearTimeout(timer);
      element.removeEventListener("transitionend", finish);
      resolve();
    };

    const timer = setTimeout(finish, timeoutMs);
    element.addEventListener("transitionend", finish, { once: true });
  });
}

function animateWheelToRotation({ rotation }) {
  wheelRotation += rotation;
  lastRotation = wheelRotation;

  zodiacWheel.style.transform = `rotate(${wheelRotation}deg)`;

  return waitForTransitionEnd(zodiacWheel);
}

function getZodiacSign({ month, day }) {
  return zodiacList.find((sign) => {
    const selectedDate = month * 100 + day;
    const startDate = sign.startMonth * 100 + sign.startDate;
    const endDate = sign.endMonth * 100 + sign.endDate;

    if (startDate > endDate) {
      return selectedDate >= startDate || selectedDate <= endDate;
    }

    return selectedDate >= startDate && selectedDate <= endDate;
  });
}

function getCurrentAngle() {
  return ((wheelRotation % 360) + 360) % 360;
}

function getRotationDifference(targetAngle) {
  const currentAngle = getCurrentAngle();

  return (targetAngle - currentAngle + 360) % 360;
}
