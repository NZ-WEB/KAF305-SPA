const d = new Date();
const currentYear = d.getFullYear();
const outSemStart = new Date(currentYear, 8, 2);
const sprSemStart = new Date(currentYear, 0, 2);

const semesterCounter = (d, outSemStart, sprSemStart) => {

  if (d > outSemStart) {
    return Math.floor(Math.round((d - outSemStart) / 1000 / 60 / 60 / 24) / 6);
  } else if (d < outSemStart) {
    return Math.floor(Math.round((d - sprSemStart) / 1000 / 60 / 60 / 24) / 6);
  }
}


export default semesterCounter(d,  outSemStart, sprSemStart);


