function updateClock() {
    const now = new Date();
    let hours = String(now.getHours()).padStart(2, '0');
    const meridian = hours>=12?"PM":"AM";
    hours = hours%12 || 12;
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);
