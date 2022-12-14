(function () {
  const days = document.getElementById("tdays");
  const hours = document.getElementById("thours");
  const minutes = document.getElementById("tminutes");
  const seconds = document.getElementById("tseconds");
  const countdown = document.getElementById("tcountdown");
  const year = document.getElementById("tyear");
  const loading = document.getElementById("tloading");

  const currentYear = new Date().getFullYear();

  const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

  year.innerText = currentYear + 1;

  function updateCountdown() {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;

    const d = Math.floor(diff / 1000 / 60 / 60 / 24);
    const h = Math.floor(diff / 1000 / 60 / 60) % 24;
    const m = Math.floor(diff / 1000 / 60) % 60;
    const s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? "0" + h : h;
    minutes.innerHTML = m < 10 ? "0" + m : m;
    seconds.innerHTML = s < 10 ? "0" + s : s;
  }

  setTimeout(() => {
    countdown.style.display = "flex";
  }, 1000);

  setInterval(updateCountdown, 1000);
})();