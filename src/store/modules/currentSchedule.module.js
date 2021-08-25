function goodwordform(k,w,o1,o2,o5) { //Корректное склонение окончания слова
  if ( (k%100>10 && k%100<20) || k%10>4 || k%10==0) w+=o5;
  else if (k%10==1) w+=o1;
  else w+=o2;
  return w;
}

function delta (year) { //Разница в днях текущей даты с новым годом для года year
  var date = new Date();
  var newYear = new Date(year, 0, 1);
  return (Math.floor((date.getTime() - newYear.getTime())/1000/60/60/24));
}

function newYearDays () { //Выводим инфо о ближайших Новых годах
  var date = new Date();
  var Y = date.getFullYear();
  var delta1 = delta (Y);
  document.getElementById('info').innerHTML = '';
  if (delta1>0) document.getElementById('info').innerHTML += 'С Нового года '+goodwordform(delta1,'прош','ёл','ло','ло')+
    ' '+delta1+' '+ goodwordform(delta1,'д','ень','ня','ней')+'<br>'+"\n";
  var delta2 = Math.abs(delta (Y+1));
  document.getElementById('info').innerHTML += 'До следующего Нового года '+goodwordform(delta2,'остал','ся','ось','ось')+
    ' '+delta2+' '+ goodwordform(delta2,'д','ень','ня','ней')+'<br>'+"\n";
}

var calStartDOW = 1; //С чего начинать неделю, в США день 0 (Вс), в мире день 1 (Пн)

function getWeekNum (day,month,year) { //Корректно определяем номер недели в году
  if (calStartDOW == 0) day++; //Чтоб работало и для САЩ :)
  month++; //в JS месяцы нумеруются с нуля!
  var a = Math.floor((14-month) / 12);
  var y = year + 4800 - a;
  var m = month + 12 * a - 3;
  var J = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y/4) -
    Math.floor(y/100) + Math.floor(y/400) - 32045;
  var d4 = (((J + 31741 - (J % 7)) % 146097) % 36524) % 1461;
  var L = Math.floor(d4 / 1460);
  var d1 = ((d4 - L) % 365) + L;
  var week = Math.floor(d1/7) + 1;
  if (week<10) week='0'+week; //Лидирующий ноль для недель 1-9
  return week;
}

function numWeekSep (Y) { //Найти номер недели начала учебного года для года Y
  var date1 = new Date(Y,9-1,1);
  var wd1=date1.getDay();
  var nw1=getWeekNum(1,9-1,Y);
  if (wd1==0 || wd1==6) nw1++; //Если 1 сент. - Сб или Вс, начнём со след. Пн
  console.log(nw1)
  return nw1;
}


export function currentSchedule() {
  const date = new Date()
  const currentSchedule = store.getters['schedule/WeekSchedule'].filter(i => i.number === numWeekSep(2021) - 20)//NEED TO REFACTOR IN REAL TIME
  const currentScheduleData = currentSchedule[0].days
  const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
  const month = date.getMonth() < 10 ? `0${date.getMonth() - 2}` : date.getMonth() - 4//NEED TO REFACTOR
  const currDate = days + '.' + month + '.' + date.getFullYear()
  const currWeeksSchedule = currentScheduleData.filter(i => i.date === currDate)
  console.log('curr Week Schedule',currWeeksSchedule)
  return currWeeksSchedule
}
