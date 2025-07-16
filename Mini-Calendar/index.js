const monthName = document.getElementById("month-name")
const dayNameE1 = document.getElementById("day-name")
const dayNumE1 = document.getElementById("day-number");
const yearE1 = document.getElementById("year");

const date = new Date();
const month = date.getMonth()
monthName.innerText = date.toLocaleString("en",{
  month:"long"
})

dayNameE1.innerText = date.toLocaleString("en",{
  weekday:"long"
})

dayNumE1,innerText = date.getDate()

yearE1.innerText = date.getFullYear()