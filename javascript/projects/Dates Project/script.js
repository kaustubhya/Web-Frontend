const date = document.querySelector("#datems");
const form = document.querySelector("#form");
const result = document.querySelector(".result-text");
const result2 = document.querySelector(".result-text-2");

let dateNormal = "";

date.addEventListener(
  "input",
  (e) =>
    // console.log(e.target.value),
    (dateNormal = e.target.value)
);

form.addEventListener("click", (e) => {
  e.preventDefault();
  let dateReal = new Date(parseInt(dateNormal)).toLocaleString("en-GB", {
    dateStyle: "full",
    timeStyle: "full",
  });

  let dateReal2 = new Date(+dateNormal).toUTCString({
    dateStyle: "full",
    timeStyle: "full",
  });

  result.innerText = dateReal;
  result2.innerText = dateReal2;
});

// *******************************************************

const ageForm = document.querySelector("#ageForm");
const dob1 = document.querySelector("#dob1");
const dob2 = document.querySelector("#dob2");
const ageCompare = document.querySelector("#age-compare");

function difference(date1ms, date2ms) {
  const diffMilliseconds = Math.abs(date1ms - date2ms);
  const diffSeconds = Math.floor(diffMilliseconds / 1000);
  const diffMinutes = Math.floor(diffSeconds / 60);
  const diffHours = Math.floor(diffMinutes / 60);
  const diffDays = Math.floor(diffHours / 24);
  const diffMonths = Math.floor(diffDays / 30);
  const diffYears = Math.floor(diffMonths / 12);

  return {
    years: diffYears,
    months: diffMonths % 12, // Remaining months after full years
    days: diffDays % 30, // Remaining days after full months
    hours: diffHours % 24, // Remaining hours after full days
    minutes: diffMinutes % 60, // Remaining minutes after full hours
    seconds: diffSeconds % 60, // Remaining seconds after full minutes
    milliseconds: diffMilliseconds % 1000, // Remaining milliseconds
  };
}

ageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  function parseDateTime(inputString) {
    let [dateString, timeString] = inputString.split(" ");
    let [day, month, year] = dateString.split("-").map((el) => +el);
    let [hours, minutes, seconds, milliseconds] = timeString
      .split(":")
      .map((el) => +el);
    return new Date(
      year,
      month - 1,
      day,
      hours,
      minutes,
      seconds,
      milliseconds
    );
  }

  let age1ms = Date.now() - parseDateTime(dob1.value).getTime();
  let age2ms = Date.now() - parseDateTime(dob2.value).getTime();

  //   console.log(date1);
  //   console.log(date2);

  const diff = difference(age1ms, age2ms); // returns an object

  if (age1ms > age2ms) {
    ageCompare.innerText = `User 1 is older by ${diff.years} years ${diff.months} months ${diff.days} days ${diff.hours} hours ${diff.minutes} minutes ${diff.seconds} seconds ${diff.milliseconds} milliseconds`;
  } else if (age1ms < age2ms) {
    ageCompare.innerText = `User 2 is older by ${diff.years} years ${diff.months} months ${diff.days} days ${diff.hours} hours ${diff.minutes} minutes ${diff.seconds} seconds ${diff.milliseconds} milliseconds`;
  } else {
    ageCompare.innerText = "Both users are of same age";
  }
});
