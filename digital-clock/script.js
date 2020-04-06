const curr = () => {

const now = new Date();
const fullYear = now.getFullYear();
const month = now.getMonth();
const date = now.getDate();
const day = now.getDay();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();
const mili = now.getMilliseconds();
const dateStr = now.toDateString();
const timeStr = now.toTimeString();
const localStr = now.toLocaleString();
const timeStamp = now.getTime();


const arr = [fullYear, month, date, day, hours, minutes, seconds, mili, dateStr, timeStr, localStr, timeStamp];

const spans = document.querySelectorAll(".get-time");
const buttons = document.querySelectorAll("button");

buttons.forEach((curr, index) => {
    curr.addEventListener("click", () => {
        spans[index].textContent = arr[index];
    });
});

document.querySelector("#current").textContent = `${hours}: ${minutes}: ${seconds}: ${mili}`

}

setInterval(curr, 100);