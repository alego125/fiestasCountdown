const d = document;

d.addEventListener('DOMContentLoaded', e => {
    const $countdown = d.getElementById("countdown"),
        countdownDate = new Date("Dec 24 2021 18:32:00").getTime(),
        $alarm = d.createElement("audio"),
        $btnAlarma = d.getElementById("btn-alarm");

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
            limitTime = countdownDate - now,
            days = Math.floor(limitTime / (1000 * 60 * 60 * 24)),
            hours = ("0" + Math.floor((limitTime % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))).slice(-2),
            minutes = ("0" + Math.floor((limitTime % (1000 * 60 * 60) / (1000 * 60)))).slice(-2),
            seconds = ("0" + Math.floor((limitTime % (1000 * 60) / 1000))).slice(-2);

        $countdown.innerHTML = `<h3 style="font-size: 100px;">${days} dias ${hours} horas ${minutes} minutos y ${seconds} segundos</h3>`;

        if (limitTime < 0) {
            clearInterval(countDownTempo);
            $countdown.innerHTML = `<h3 style="font-size: 100px;">${"🎅🎅FELIZ NAVIDAD🎅🎅"}</h3>`;
            $btnAlarma.classList.add("visible");
            $alarm.src = "assets/alarma.mp3";
            $alarm.play();
            $btnAlarma.addEventListener('click', () => {
                $btnAlarma.classList.remove("visible");
                $alarm.pause();
                $alarm.currentTime = 0;
            });
        }
    }, 1000);

});
