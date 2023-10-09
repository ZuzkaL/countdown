const targetDate = new Date(2023, 9, 16, 0, 0, 0); // 16. október 2023, 00:00:00

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  if (timeDifference <= 0) {
    document.getElementById('countdown').innerText = 'Čas vypršal';
    return;
  }

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  const countdownElement_day = document.getElementById('countdown_day');
  countdownElement_day.innerHTML = `${days} dní,`;

  const countdownElement_time = document.getElementById('countdown_time');
  countdownElement_time.innerHTML = `${addLeadingZero(hours)} : ${addLeadingZero(minutes)} : ${addLeadingZero(seconds)}`;
}

function addLeadingZero(number) {
    return number < 10 ? '0' + number : number;
  }

setInterval(updateCountdown, 1000);

updateCountdown();
