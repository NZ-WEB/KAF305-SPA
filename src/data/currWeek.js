const d = new Date();
let oneJan = new Date(d.getFullYear(),0,1);
let numberOfDays = Math.floor((d - oneJan) / (24 * 60 * 60 * 1000));
let weekNum = Math.ceil(( d.getDay() + 1 + numberOfDays) / 7);

const day = (day) => {
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  };
}

const month = (month) => {
  if (month < 10) {
    return `0${month + 1}`;
  } else {
    return month + 1;
  };
}

const stringDate = () => {
  return `${day(d.getDate())}.${month(d.getMonth())}.${d.getFullYear()}`;
}

const semesterCounter = () => {
  if (weekNum >= 35) {
    return weekNum - 34;
  } else {
    return weekNum;
  };
}

export {semesterCounter}


