const parks = [
  { name: "Acadia", areaInSquareKm: 198.6 },
  { name: "Crater Lake", areaInSquareKm: 741.5 },
  { name: "Kenai Fjords", areaInSquareKm: 2710 },
  { name: "Zion", areaInSquareKm: 595.9 },
];

const result = parks.reduce((acc, park) => {
  acc[park.name] = park.areaInSquareKm;
  return acc;
}, {});