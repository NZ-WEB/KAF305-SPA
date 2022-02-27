const d = new Date();
const firstDate = new Date(2021, 7, 30);
let semesterCounter;

function weeksBetween(d1, d2) {
  return Math.round((d2 - d1) / (7 * 24 * 60 * 60 * 1000));
}

if (d.getDay() === 0) {
  semesterCounter = weeksBetween(firstDate, d) + 1;
} else {
  semesterCounter = weeksBetween(firstDate, d);
}

export { semesterCounter };
