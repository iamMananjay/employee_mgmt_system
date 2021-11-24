const numberofleaveday = document.querySelector(".leaveday");
const onedayleave = document.querySelector(".one-day-section");
const multipledayleave = document.querySelector(".multiple-day-section");
const negativenumbermssg = document.querySelector(".message");

numberofleaveday.addEventListener("keyup", (e) => {
  if (numberofleaveday.value == 1) {
    onedayleave.style.display = "block";
    // onedayleave.style.transform = `translateY(0%)`;
    negativenumbermssg.style.display = "none";
    multipledayleave.style.display = "none";
  } else if (numberofleaveday.value == 0) {
    onedayleave.style.display = "none";
    negativenumbermssg.style.display = "none";
    multipledayleave.style.display = "none";
  } else if (numberofleaveday.value < 0) {
    negativenumbermssg.style.display = "block";
    onedayleave.style.display = "none";
    multipledayleave.style.display = "none";
  } else {
    negativenumbermssg.style.display = "none";
    onedayleave.style.display = "none";
    multipledayleave.style.display = "block";
  }
});

// monthsectionstart
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
// weekstart
const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const date = new Date();
const previousbtn = document.querySelector(".prebtn");
const nextbtn = document.querySelector(".nextbtn");
const todaydate = document.querySelector(".calendar-head-section h3");
// const todayevent = document.querySelector(".todaydate");

const monthday = document.querySelector(".days");

const weekdays = document.querySelector(".weekdays");
console.log(weekdays);

// const month = document.querySelector(".monthdropbtn");
// const year = document.querySelector(".yeardropbtn");

// console.log(date);
// console.log(previousbtn);
// console.log(nextbtn);
// console.log(todaydate);
// console.log(monthday);
// console.log(month);
// console.log(year);

window.addEventListener("DOMContentLoaded", () => {
  monthRender();
  for (row = 0; row < 1; row++) {
    const createEachforweekday = document.createElement("div");
    createEachforweekday.classList.add(`week-${row}`);
    createEachforweekday.classList.add(`Week`);
    weekdays.appendChild(createEachforweekday);

    for (col = 0; col < 7; col++) {
      const createEachweek = document.createElement("div");
      createEachweek.classList.add(`colweek-${col}`);
      createEachweek.classList.add(`colweek`);
      createEachweek.textContent = weeks[col];

      createEachforweekday.appendChild(createEachweek);
      // daycount++;
      // week++;
    }
  }
});

let monthRender = () => {
  monthday.innerHTML = "";
  const currentyear = date.getFullYear();
  const currentmonth = months[date.getMonth()];
  const currentdate = date.getDate();
  const currentday = date.getDay();
  // console.log(currentyear);
  // console.log(currentmonth);
  // console.log(months[date.getMonth()]);
  // const week = weeks[date.getDay()];

  // month.innerHTML = `${currentmonth}`;
  // year.innerHTML = `${currentyear}`;
  todaydate.innerHTML = ` ${currentmonth} ${currentyear}`;

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let firstDayofmonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();
  // debugger;

  let daycount = 1;
  for (rw = 0; rw < 5; rw++) {
    const createEachrow = document.createElement("div");
    createEachrow.classList.add(`row-${rw}`);
    createEachrow.classList.add(`row`);
    monthday.appendChild(createEachrow);

    for (col = 0; col < 7; col++) {
      if (firstDayofmonth == 0) {
        const createEachcolumn = document.createElement("div");
        createEachcolumn.classList.add(`col-${col}`);
        createEachcolumn.textContent = daycount;
        createEachcolumn.classList.add(`col`);

        createEachrow.appendChild(createEachcolumn);

        if (
          // currentdate == date.getDate() &&
          // currentmonth == months[date.getMonth()] &&
          // currentyear == date.getFullYear()
          createEachcolumn.textContent ==
          date.getDate(currentyear, currentmonth, currentday)
        ) {
          createEachcolumn.style.color = "#FF69B4";
        }

        if (daycount >= lastDay) {
          break;
        }
        daycount++;
      } else {
        const createprevoiusmonth = document.createElement("div");
        createprevoiusmonth.classList.add(`previousmonth`);
        createEachrow.appendChild(createprevoiusmonth);
        firstDayofmonth--;
      }
    }
  }
};

previousbtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  monthRender();
});

nextbtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  monthRender();
});
// monthsectionend;
