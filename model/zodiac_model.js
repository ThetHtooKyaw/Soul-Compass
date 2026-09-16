class ZodiacModel {
  constructor(data) {
    Object.assign(this, data);

    if (data.element) {
      this.element = new ElementModel(data.element);
    }
    if (data.planet) {
      this.planet = new PlanetModel(data.planet);
    }
  }
}

class ElementModel {
  constructor(data) {
    Object.assign(this, data);
  }
}

class PlanetModel {
  constructor(data) {
    Object.assign(this, data);
  }
}

// Zodiac Signs in Astrological Order
export const zodiacList = [
  new ZodiacModel({
    name: "Aries",
    startMonth: 3,
    startDate: 21,
    endMonth: 4,
    endDate: 19,
    image: "../assets/images/aries.webp",
    symbol: "../assets/icons/aries.webp",
    element: new ElementModel({
      name: "Fire (Cardinal)",
      image: "../assets/icons/fire.webp",
    }),
    planet: new PlanetModel({
      name: "Mars",
      image: "../assets/images/mars.webp",
      symbol: "../assets/icons/mars_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Taurus",
    startMonth: 4,
    startDate: 20,
    endMonth: 5,
    endDate: 20,
    image: "../assets/images/taurus.webp",
    symbol: "../assets/icons/taurus.webp",
    element: new ElementModel({
      name: "Earth (Fixed)",
      image: "../assets/icons/earth.webp",
    }),
    planet: new PlanetModel({
      name: "Venus",
      image: "../assets/images/venus.webp",
      symbol: "../assets/icons/venus_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Gemini",
    startMonth: 5,
    startDate: 21,
    endMonth: 6,
    endDate: 20,
    image: "../assets/images/gemini.webp",
    symbol: "../assets/icons/gemini.webp",
    element: new ElementModel({
      name: "Air (Mutable)",
      image: "../assets/icons/air.webp",
    }),
    planet: new PlanetModel({
      name: "Mercury",
      image: "../assets/images/mercury.webp",
      symbol: "../assets/icons/mercury_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Cancer",
    startMonth: 6,
    startDate: 21,
    endMonth: 7,
    endDate: 22,
    image: "../assets/images/cancer.webp",
    symbol: "../assets/icons/cancer.webp",
    element: new ElementModel({
      name: "Water (Cardinal)",
      image: "../assets/icons/water.webp",
    }),
    planet: new PlanetModel({
      name: "Moon",
      image: "../assets/images/moon.webp",
      symbol: "../assets/icons/moon_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Leo",
    startMonth: 7,
    startDate: 23,
    endMonth: 8,
    endDate: 22,
    image: "../assets/images/leo.webp",
    symbol: "../assets/icons/leo.webp",
    element: new ElementModel({
      name: "Fire (Fixed)",
      image: "../assets/icons/fire.webp",
    }),
    planet: new PlanetModel({
      name: "Sun",
      image: "../assets/images/sun.webp",
      symbol: "../assets/icons/sun_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Virgo",
    startMonth: 8,
    startDate: 23,
    endMonth: 9,
    endDate: 22,
    image: "../assets/images/virgo.webp",
    symbol: "../assets/icons/virgo.webp",
    element: new ElementModel({
      name: "Earth (Mutable)",
      image: "../assets/icons/earth.webp",
    }),
    planet: new PlanetModel({
      name: "Mercury",
      image: "../assets/images/mercury.webp",
      symbol: "../assets/icons/mercury_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Libra",
    startMonth: 9,
    startDate: 23,
    endMonth: 10,
    endDate: 22,
    image: "../assets/images/libra.webp",
    symbol: "../assets/icons/libra.webp",
    element: new ElementModel({
      name: "Air (Cardinal)",
      image: "../assets/icons/air.webp",
    }),
    planet: new PlanetModel({
      name: "Venus",
      image: "../assets/images/venus.webp",
      symbol: "../assets/icons/venus_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Scorpio",
    startMonth: 10,
    startDate: 23,
    endMonth: 11,
    endDate: 21,
    image: "../assets/images/scorpio.webp",
    symbol: "../assets/icons/scorpio.webp",
    element: new ElementModel({
      name: "Water (Fixed)",
      image: "../assets/icons/water.webp",
    }),
    planet: new PlanetModel({
      name: "Pluto",
      image: "../assets/images/pluto.webp",
      symbol: "../assets/icons/pluto_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Sagittarius",
    startMonth: 11,
    startDate: 22,
    endMonth: 12,
    endDate: 21,
    image: "../assets/images/sagittarius.webp",
    symbol: "../assets/icons/sagittarius.webp",
    element: new ElementModel({
      name: "Fire (Mutable)",
      image: "../assets/icons/fire.webp",
    }),
    planet: new PlanetModel({
      name: "Jupiter",
      image: "../assets/images/jupiter.webp",
      symbol: "../assets/icons/jupiter_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Capricorn",
    startMonth: 12,
    startDate: 22,
    endMonth: 1,
    endDate: 19,
    image: "../assets/images/capricorn.webp",
    symbol: "../assets/icons/capricorn.webp",
    element: new ElementModel({
      name: "Earth (Cardinal)",
      image: "../assets/icons/earth.webp",
    }),
    planet: new PlanetModel({
      name: "Saturn",
      image: "../assets/images/saturn.webp",
      symbol: "../assets/icons/saturn_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Aquarius",
    startMonth: 1,
    startDate: 20,
    endMonth: 2,
    endDate: 18,
    image: "../assets/images/aquarius.webp",
    symbol: "../assets/icons/aquarius.webp",
    element: new ElementModel({
      name: "Air (Fixed)",
      image: "../assets/icons/air.webp",
    }),
    planet: new PlanetModel({
      name: "Uranus",
      image: "../assets/images/uranus.webp",
      symbol: "../assets/icons/uranus_symbol.webp",
    }),
  }),
  new ZodiacModel({
    name: "Pisces",
    startMonth: 2,
    startDate: 19,
    endMonth: 3,
    endDate: 20,
    image: "../assets/images/pisces.webp",
    symbol: "../assets/icons/pisces.webp",
    element: new ElementModel({
      name: "Water (Mutable)",
      image: "../assets/icons/water.webp",
    }),
    planet: new PlanetModel({
      name: "Neptune",
      image: "../assets/images/neptune.webp",
      symbol: "../assets/icons/neptune_symbol.webp",
    }),
  }),
];

// Zodiac Signs in Wheel Order
export const zodiacWheelItem = [
  "pisces",
  "aquarius",
  "capricorn",
  "sagittarius",
  "scorpio",
  "libra",
  "virgo",
  "leo",
  "cancer",
  "gemini",
  "taurus",
  "aries",
];

export const monthShortNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
