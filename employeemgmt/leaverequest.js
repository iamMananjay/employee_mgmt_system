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

const monthday = document.querySelector(".days");

const weekdays = document.querySelector(".weekdays");

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
    }
  }
});

let monthinnumber = new Date().getMonth();
// getTotalNoOfDays();

let monthRender = (day) => {
  let highLighMode = false;
  let totalDays = 0;

  totalDays = getTotalNoOfDays();

  if (totalDays == 0 || totalDays == undefined || totalDays == "") {
    setTotalNumberofDays();
  }

  monthday.innerHTML = "";
  const currentyear = date.getFullYear();
  const currentmonth = months[date.getMonth()];
  const currentdate = date.getDate();
  const currentday = date.getDay();

  todaydate.innerHTML = ` ${currentmonth} ${currentyear}`;

  let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

  let firstDayofmonth = new Date(
    date.getFullYear(),
    date.getMonth(),
    1
  ).getDay();

  let daycount = 1;
  for (rw = 0; rw < 6; rw++) {
    if (daycount >= lastDay) {
      break;
    }
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

        // fun(createEachcolumn);

        if (currentyear == new Date().getFullYear()) {
          if (currentmonth == months[monthinnumber]) {
            if (
              createEachcolumn.textContent == new Date().getDate() &&
              currentmonth == months[monthinnumber] &&
              currentyear == new Date().getFullYear()
            ) {
              createEachcolumn.style.color = "#FF69B4";
            }
          } else {
            createEachcolumn.style.color = "none";
          }
        } else {
          createEachcolumn.style.color = "none";
        }

        if (createEachcolumn.className == "col-6 col") {
          createEachcolumn.style.color = "red";
        }

        if (day == createEachcolumn.textContent) {
          highLighMode = true;
        }

        if (highLighMode) {
          if (totalDays > 0) {
            // debugger;

            createEachcolumn.style.color = "#FF1493";
            createEachcolumn.classList.add = "from";
            // totalNoOfDays--;
            // localStorage.getItem(days)--;
            // x--;
            setTotalNumberofDays(--totalDays);
          } else {
            highLighMode = false;
          }
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
  // fun(createEachcolumn);
};

let getTotalNoOfDays = () => {
  return localStorage.getItem("days");
};

let setTotalNumberofDays = (noOfDays) => {
  let totalNoofDays;
  if (noOfDays == undefined) {
    totalNoofDays = document.querySelector(".leaveday").value;
  } else {
    totalNoofDays = noOfDays;
  }

  localStorage.setItem("days", totalNoofDays);
  // totalDays = localStorage.getItem("days");
};

previousbtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  monthRender();
});

nextbtn.addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  console.log(date);
  monthRender();
});
// monthsectionend;

const leavestartdate = document.querySelector(".leavestartdatefrom");
const leaveenddate = document.querySelector(".leaveenddatefrom");

let startday;
leavestartdate.addEventListener("change", () => {
  let startDate = leavestartdate.value.split("-");
  startday = parseInt(startDate[2]);
  startmonth = parseInt(startDate[1]);
  startyear = parseInt(startDate[0]);

  monthRender(startday);
});

// leaveenddate.addEventListener("change", () => {
//   let endDate = leaveenddate.value.split("-");
//   endday = parseInt(endDate[2]);
//   endmonth = parseInt(endDate[1]);
//   endyear = parseInt(endDate[0]);
//   monthRender(endday, "leaveend");
// });

// console.log(startday);
